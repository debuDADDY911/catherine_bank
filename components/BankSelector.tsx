// components/BankSelector.tsx
"use client";

import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { formUrlQuery, formatAmount } from "@/lib/utils";

interface BankSelectorProps {
  accounts: Account[];
  selectedAccountId: string;
  onSelectionChange?: (isLoading: boolean) => void;
}

export const BankSelector = ({
  accounts = [],
  selectedAccountId,
  onSelectionChange,
}: BankSelectorProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selected, setSelected] = useState(
    accounts.find((account) => account.appwriteItemId === selectedAccountId) ||
      accounts[0]
  );
  const [isLoading, setIsLoading] = useState(false);

  // Update selected account when selectedAccountId prop changes
  useEffect(() => {
    const newSelected = accounts.find(
      (account) => account.appwriteItemId === selectedAccountId
    );
    if (
      newSelected &&
      newSelected.appwriteItemId !== selected?.appwriteItemId
    ) {
      setSelected(newSelected);
      // Stop loading when new account data is received
      setIsLoading(false);
      onSelectionChange?.(false);
    }
  }, [selectedAccountId, accounts, selected, onSelectionChange]);

  const handleBankChange = async (id: string) => {
    if (id === selectedAccountId) return; // Don't change if same account

    setIsLoading(true);
    onSelectionChange?.(true);

    const account = accounts.find((account) => account.appwriteItemId === id)!;

    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "id",
      value: id,
    });

    // Navigate immediately, loading will be handled by the parent component
    router.push(newUrl, { scroll: false });
  };

  return (
    <div className="w-full max-w-md">
      <label className="text-14 font-medium text-white/85 mb-2 block font-secondary">
        Select Bank Account
      </label>
      <Select
        disabled={isLoading}
        value={selected?.appwriteItemId || ""}
        onValueChange={(value) => handleBankChange(value)}
      >
        <SelectTrigger className="flex w-full bg-[#000]/40 text-white gap-3 backdrop-blur-md border border-white/30 h-12 font-secondary">
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Image
              src="/icons/credit-card.svg"
              width={20}
              height={20}
              alt="account"
              className="brightness-0 invert"
            />
          )}
          <p className="line-clamp-1 w-full text-left font-medium font-secondary">
            {isLoading
              ? "Switching account..."
              : selected?.name || "Select an account"}
          </p>
        </SelectTrigger>
        <SelectContent
          className="w-full bg-white/95 backdrop-blur-md z-[99999999] border border-white/30 font-secondary"
          align="start"
        >
          <SelectGroup>
            <SelectLabel className="py-2 font-semibold text-[#000]/70 font-secondary">
              Choose bank account to view transactions
            </SelectLabel>
            {accounts.map((account: Account) => (
              <SelectItem
                key={account.id}
                value={account.appwriteItemId}
                className="cursor-pointer border-t hover:bg-gray-100/50 transition-colors font-secondary"
              >
                <div className="flex flex-col w-full font-secondary">
                  <div className="flex items-center gap-3 mb-1">
                    <Image
                      src="/icons/credit-card.svg"
                      width={16}
                      height={16}
                      alt="account"
                      className="opacity-60"
                    />
                    <p className="text-16 font-semibold text-[#000] font-secondary">
                      {account.name}
                    </p>
                  </div>
                  <div className="flex justify-between items-center pl-5">
                    <p className="text-12 text-[#000]/60 font-secondary">
                      ●●●● ●●●● ●●●● {account.mask}
                    </p>
                    <p className="text-14 font-semibold text-[#000] font-secondary">
                      {formatAmount(account.currentBalance)}
                    </p>
                  </div>
                  <p className="text-12 text-[#000]/50 pl-5 font-secondary">
                    {account.officialName}
                  </p>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
