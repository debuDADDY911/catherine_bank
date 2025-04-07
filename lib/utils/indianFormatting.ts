// lib/utils/indianFormatting.ts

/**
 * Simple utility functions for Indian transactions
 */

// Format amount in Indian currency (₹)
export function formatIndianAmount(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

// Get payment channel display name
export function getPaymentChannelDisplay(channel: string): string {
  const channelMap: Record<string, string> = {
    upi: "UPI",
    card: "Card",
    cash: "Cash",
    auto_debit: "Auto Debit",
    transfer: "Transfer",
    online: "Online",
    other: "Other",
  };

  return channelMap[channel] || channel || "N/A";
}

// Clean transaction name for display
export function cleanTransactionName(name: string): string {
  if (!name) return "Unknown Transaction";

  // Remove any ID prefixes from Indian transactions
  if (name.includes("indian_txn_")) {
    return name.replace(/indian_txn_\d+_\d+/, "").trim();
  }

  return name;
}
