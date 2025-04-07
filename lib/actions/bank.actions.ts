// lib/actions/bank.actions.ts
"use server";

import {
  ACHClass,
  CountryCode,
  TransferAuthorizationCreateRequest,
  TransferCreateRequest,
  TransferNetwork,
  TransferType,
} from "plaid";

import { plaidClient } from "../plaid";
import { parseStringify } from "../utils";

import { getTransactionsByBankId } from "./transaction.actions";
import { getBanks, getBank } from "./user.actions";

// Helper function to calculate adjusted balance
const calculateAdjustedBalance = (
  originalBalance: number,
  transactions: any[],
  bankId: string
) => {
  let adjustment = 0;

  transactions.forEach((transaction: any) => {
    if (transaction.senderBankId === bankId) {
      // Deduct money sent
      adjustment -= parseFloat(transaction.amount);
    } else if (transaction.receiverBankId === bankId) {
      // Add money received
      adjustment += parseFloat(transaction.amount);
    }
  });

  return originalBalance + adjustment;
};

// Get multiple bank accounts
export const getAccounts = async ({ userId }: getAccountsProps) => {
  try {
    const banks = await getBanks({ userId });

    const accounts = await Promise.all(
      banks?.map(async (bank: Bank) => {
        const accountsResponse = await plaidClient.accountsGet({
          access_token: bank.accessToken,
        });
        const accountData = accountsResponse.data.accounts[0];

        // Get transactions for this bank to calculate adjusted balance
        const transferTransactionsData = await getTransactionsByBankId({
          bankId: bank.$id,
        });

        const institution = await getInstitution({
          institutionId: accountsResponse.data.item.institution_id!,
        });

        // Calculate adjusted balances
        const adjustedCurrentBalance = calculateAdjustedBalance(
          accountData.balances.current!,
          transferTransactionsData.documents,
          bank.$id
        );

        const adjustedAvailableBalance = calculateAdjustedBalance(
          accountData.balances.available!,
          transferTransactionsData.documents,
          bank.$id
        );

        return {
          id: accountData.account_id,
          availableBalance: adjustedAvailableBalance,
          currentBalance: adjustedCurrentBalance,
          institutionId: institution.institution_id,
          name: accountData.name,
          officialName: accountData.official_name,
          mask: accountData.mask!,
          type: accountData.type as string,
          subtype: accountData.subtype! as string,
          appwriteItemId: bank.$id,
          shareableId: bank.shareableId,
        };
      })
    );

    const totalBanks = accounts.length;
    const totalCurrentBalance = accounts.reduce((total, account) => {
      return total + account.currentBalance;
    }, 0);

    return parseStringify({ data: accounts, totalBanks, totalCurrentBalance });
  } catch (error) {
    console.error("An error occurred while getting the accounts:", error);
    return parseStringify({ data: [], totalBanks: 0, totalCurrentBalance: 0 });
  }
};

// Get one bank account
export const getAccount = async ({ appwriteItemId }: getAccountProps) => {
  try {
    const bank = await getBank({ documentId: appwriteItemId });

    const accountsResponse = await plaidClient.accountsGet({
      access_token: bank.accessToken,
    });
    const accountData = accountsResponse.data.accounts[0];

    const transferTransactionsData = await getTransactionsByBankId({
      bankId: bank.$id,
    });

    const transferTransactions = transferTransactionsData.documents.map(
      (transferData: Transaction) => ({
        id: transferData.$id,
        name: transferData.name!,
        amount: transferData.amount!,
        date: transferData.$createdAt,
        paymentChannel: transferData.channel,
        category: transferData.category,
        type: transferData.senderBankId === bank.$id ? "debit" : "credit",
      })
    );

    const institution = await getInstitution({
      institutionId: accountsResponse.data.item.institution_id!,
    });

    const transactions = await getTransactions({
      accessToken: bank?.accessToken,
    });

    // Calculate adjusted balances
    const adjustedCurrentBalance = calculateAdjustedBalance(
      accountData.balances.current!,
      transferTransactionsData.documents,
      bank.$id
    );

    const adjustedAvailableBalance = calculateAdjustedBalance(
      accountData.balances.available!,
      transferTransactionsData.documents,
      bank.$id
    );

    const account = {
      id: accountData.account_id,
      availableBalance: adjustedAvailableBalance,
      currentBalance: adjustedCurrentBalance,
      institutionId: institution.institution_id,
      name: accountData.name,
      officialName: accountData.official_name,
      mask: accountData.mask!,
      type: accountData.type as string,
      subtype: accountData.subtype! as string,
      appwriteItemId: bank.$id,
    };

    const allTransactions = [...transactions, ...transferTransactions].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return parseStringify({
      data: account,
      transactions: allTransactions,
    });
  } catch (error) {
    console.error("An error occurred while getting the account:", error);
    return parseStringify({
      data: null,
      transactions: [],
    });
  }
};
// lib/actions/bank.actions.ts - Enhanced getAccount function
// Add this enhanced version of getAccount to your existing bank.actions.ts

// Get one bank account with enhanced transaction data
export const getAccountWithDetails = async ({
  appwriteItemId,
}: getAccountProps) => {
  try {
    const bank = await getBank({ documentId: appwriteItemId });

    const accountsResponse = await plaidClient.accountsGet({
      access_token: bank.accessToken,
    });
    const accountData = accountsResponse.data.accounts[0];

    const transferTransactionsData = await getTransactionsByBankId({
      bankId: bank.$id,
    });

    const transferTransactions = transferTransactionsData.documents.map(
      (transferData: Transaction) => ({
        id: transferData.$id,
        name: transferData.name!,
        amount: transferData.amount!,
        date: transferData.$createdAt,
        paymentChannel: transferData.channel,
        category: transferData.category,
        type: transferData.senderBankId === bank.$id ? "debit" : "credit",
        accountName: accountData.name,
        accountMask: accountData.mask,
        bankName: accountData.official_name || accountData.name,
      })
    );

    const institution = await getInstitution({
      institutionId: accountsResponse.data.item.institution_id!,
    });

    const transactions = await getTransactions({
      accessToken: bank?.accessToken,
    });

    // Add account info to regular transactions
    const enhancedTransactions = transactions.map((transaction) => ({
      ...transaction,
      accountName: accountData.name,
      accountMask: accountData.mask,
      bankName: accountData.official_name || accountData.name,
    }));

    // Calculate adjusted balances
    const adjustedCurrentBalance = calculateAdjustedBalance(
      accountData.balances.current!,
      transferTransactionsData.documents,
      bank.$id
    );

    const adjustedAvailableBalance = calculateAdjustedBalance(
      accountData.balances.available!,
      transferTransactionsData.documents,
      bank.$id
    );

    const account = {
      id: accountData.account_id,
      availableBalance: adjustedAvailableBalance,
      currentBalance: adjustedCurrentBalance,
      institutionId: institution.institution_id,
      name: accountData.name,
      officialName: accountData.official_name,
      mask: accountData.mask!,
      type: accountData.type as string,
      subtype: accountData.subtype! as string,
      appwriteItemId: bank.$id,
    };

    const allTransactions = [
      ...enhancedTransactions,
      ...transferTransactions,
    ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return parseStringify({
      data: account,
      transactions: allTransactions,
    });
  } catch (error) {
    console.error("An error occurred while getting the account:", error);
    return parseStringify({
      data: null,
      transactions: [],
    });
  }
};

// Get bank info
export const getInstitution = async ({
  institutionId,
}: getInstitutionProps) => {
  try {
    const institutionResponse = await plaidClient.institutionsGetById({
      institution_id: institutionId,
      country_codes: ["US"] as CountryCode[],
    });

    return institutionResponse.data.institution;
  } catch (error) {
    console.error("An error occurred while getting the institution:", error);
    return { institution_id: institutionId, name: "Unknown Institution" };
  }
};

// Get transactions with pagination
export const getTransactions = async ({
  accessToken,
}: getTransactionsProps) => {
  let hasMore = true;
  let cursor: string | undefined = undefined;
  const transactions: Transaction[] = [];

  try {
    while (hasMore) {
      const response = await plaidClient.transactionsSync({
        access_token: accessToken,
        cursor,
      });

      const data = response.data;

      const newTransactions = data.added.map((transaction: any) => ({
        id: transaction.transaction_id,
        name: transaction.name,
        paymentChannel: transaction.payment_channel,
        type: transaction.payment_channel,
        accountId: transaction.account_id,
        amount: transaction.amount,
        pending: transaction.pending,
        category: transaction.category ? transaction.category[0] : "",
        date: transaction.date,
        image: transaction.logo_url,
      }));

      transactions.push(...newTransactions);
      hasMore = data.has_more;
      cursor = data.next_cursor;
    }

    return transactions;
  } catch (error) {
    console.error("An error occurred while getting the transactions:", error);
    return [];
  }
};

// Create Transfer
export const createTransfer = async () => {
  const transferAuthRequest: TransferAuthorizationCreateRequest = {
    access_token: "access-sandbox-cddd20c1-5ba8-4193-89f9-3a0b91034c25",
    account_id: "Zl8GWV1jqdTgjoKnxQn1HBxxVBanm5FxZpnQk",
    funding_account_id: "442d857f-fe69-4de2-a550-0c19dc4af467",
    type: "credit" as TransferType,
    network: "ach" as TransferNetwork,
    amount: "10.00",
    ach_class: "ppd" as ACHClass,
    user: {
      legal_name: "Anne Charleston",
    },
  };

  try {
    const transferAuthResponse = await plaidClient.transferAuthorizationCreate(
      transferAuthRequest
    );
    const authorizationId = transferAuthResponse.data.authorization.id;

    const transferCreateRequest: TransferCreateRequest = {
      access_token: "access-sandbox-cddd20c1-5ba8-4193-89f9-3a0b91034c25",
      account_id: "Zl8GWV1jqdTgjoKnxQn1HBxxVBanm5FxZpnQk",
      description: "payment",
      authorization_id: authorizationId,
    };

    const responseCreateResponse = await plaidClient.transferCreate(
      transferCreateRequest
    );

    const transfer = responseCreateResponse.data.transfer;
    return parseStringify(transfer);
  } catch (error) {
    console.error("An error occurred while creating transfer:", error);
    return null;
  }
};
