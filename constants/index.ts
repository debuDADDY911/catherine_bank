// constants/index.ts - Updated with Indian transaction categories
export const sidebarLinks = [
  {
    imgURL: "/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/icons/dollar-circle.svg",
    route: "/my-banks",
    label: "My Banks",
  },
  {
    imgURL: "/icons/transaction.svg",
    route: "/transaction-history",
    label: "Transaction History",
  },
  {
    imgURL: "/icons/money-send.svg",
    route: "/payment-transfer",
    label: "Transfer Funds",
  },
];

// good_user / good_password - Bank of America
export const TEST_USER_ID = "6627ed3d00267aa6fa3e";

// custom_user -> Chase Bank
export const TEST_ACCESS_TOKEN =
  "access-sandbox-229476cf-25bc-46d2-9ed5-fba9df7a5d63";

export const ITEMS = [
  {
    id: "6624c02e00367128945e", // appwrite item Id
    accessToken: "access-sandbox-83fd9200-0165-4ef8-afde-65744b9d1548",
    itemId: "VPMQJKG5vASvpX8B6JK3HmXkZlAyplhW3r9xm",
    userId: "6627ed3d00267aa6fa3e",
    accountId: "X7LMJkE5vnskJBxwPeXaUWDBxAyZXwi9DNEWJ",
  },
  {
    id: "6627f07b00348f242ea9", // appwrite item Id
    accessToken: "access-sandbox-74d49e15-fc3b-4d10-a5e7-be4ddae05b30",
    itemId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
    userId: "6627ed3d00267aa6fa3e",
    accountId: "x1GQb1lDrDHWX4BwkqQbI4qpQP1lL6tJ3VVo9",
  },
];

export const topCategoryStyles = {
  "Groceries & Food": {
    bg: "bg-green-25",
    circleBg: "bg-green-100",
    text: {
      main: "text-green-900",
      count: "text-green-700",
    },
    progress: {
      bg: "bg-green-100",
      indicator: "bg-green-700",
    },
    icon: "/icons/shopping-bag.svg",
  },
  Transportation: {
    bg: "bg-blue-25",
    circleBg: "bg-blue-100",
    text: {
      main: "text-blue-900",
      count: "text-blue-700",
    },
    progress: {
      bg: "bg-blue-100",
      indicator: "bg-blue-700",
    },
    icon: "/icons/monitor.svg",
  },
  Utilities: {
    bg: "bg-orange-25",
    circleBg: "bg-orange-100",
    text: {
      main: "text-orange-900",
      count: "text-orange-700",
    },
    progress: {
      bg: "bg-orange-100",
      indicator: "bg-orange-700",
    },
    icon: "/icons/coins.svg",
  },
  "Food and Drink": {
    bg: "bg-pink-25",
    circleBg: "bg-pink-100",
    text: {
      main: "text-pink-900",
      count: "text-pink-700",
    },
    progress: {
      bg: "bg-pink-100",
      indicator: "bg-pink-700",
    },
    icon: "/icons/monitor.svg",
  },
  Travel: {
    bg: "bg-success-25",
    circleBg: "bg-success-100",
    text: {
      main: "text-success-900",
      count: "text-success-700",
    },
    progress: {
      bg: "bg-success-100",
      indicator: "bg-success-700",
    },
    icon: "/icons/coins.svg",
  },
  default: {
    bg: "bg-pink-25",
    circleBg: "bg-pink-100",
    text: {
      main: "text-pink-900",
      count: "text-pink-700",
    },
    progress: {
      bg: "bg-pink-100",
      indicator: "bg-pink-700",
    },
    icon: "/icons/shopping-bag.svg",
  },
};

export const transactionCategoryStyles = {
  // Original categories
  "Food and Drink": {
    borderColor: "border-pink-600",
    backgroundColor: "bg-pink-500",
    textColor: "text-pink-700",
    chipBackgroundColor: "bg-inherit",
  },
  Payment: {
    borderColor: "border-success-600",
    backgroundColor: "bg-green-600",
    textColor: "text-success-700",
    chipBackgroundColor: "bg-inherit",
  },
  "Bank Fees": {
    borderColor: "border-success-600",
    backgroundColor: "bg-green-600",
    textColor: "text-success-700",
    chipBackgroundColor: "bg-inherit",
  },
  Transfer: {
    borderColor: "border-red-700",
    backgroundColor: "bg-red-700",
    textColor: "text-red-700",
    chipBackgroundColor: "bg-inherit",
  },
  Processing: {
    borderColor: "border-[#F2F4F7]",
    backgroundColor: "bg-gray-500",
    textColor: "text-[#344054]",
    chipBackgroundColor: "bg-[#F2F4F7]",
  },
  Success: {
    borderColor: "border-[#12B76A]",
    backgroundColor: "bg-[#12B76A]",
    textColor: "text-[#027A48]",
    chipBackgroundColor: "bg-[#ECFDF3]",
  },
  Travel: {
    borderColor: "border-[#0047AB]",
    backgroundColor: "bg-blue-500",
    textColor: "text-blue-700",
    chipBackgroundColor: "bg-[#ECFDF3]",
  },

  // New Indian categories
  "Groceries & Food": {
    borderColor: "border-green-600",
    backgroundColor: "bg-green-600",
    textColor: "text-green-700",
    chipBackgroundColor: "bg-inherit",
  },
  Household: {
    borderColor: "border-gray-600",
    backgroundColor: "bg-gray-600",
    textColor: "text-gray-700",
    chipBackgroundColor: "bg-inherit",
  },
  Transportation: {
    borderColor: "border-blue-600",
    backgroundColor: "bg-blue-600",
    textColor: "text-blue-700",
    chipBackgroundColor: "bg-inherit",
  },
  Utilities: {
    borderColor: "border-orange-600",
    backgroundColor: "bg-orange-600",
    textColor: "text-orange-700",
    chipBackgroundColor: "bg-inherit",
  },
  Healthcare: {
    borderColor: "border-red-600",
    backgroundColor: "bg-red-600",
    textColor: "text-red-700",
    chipBackgroundColor: "bg-inherit",
  },
  Education: {
    borderColor: "border-purple-600",
    backgroundColor: "bg-purple-600",
    textColor: "text-purple-700",
    chipBackgroundColor: "bg-inherit",
  },
  Entertainment: {
    borderColor: "border-pink-600",
    backgroundColor: "bg-pink-600",
    textColor: "text-pink-700",
    chipBackgroundColor: "bg-inherit",
  },
  Shopping: {
    borderColor: "border-indigo-600",
    backgroundColor: "bg-indigo-600",
    textColor: "text-indigo-700",
    chipBackgroundColor: "bg-inherit",
  },
  Investment: {
    borderColor: "border-emerald-600",
    backgroundColor: "bg-emerald-600",
    textColor: "text-emerald-700",
    chipBackgroundColor: "bg-inherit",
  },
  Insurance: {
    borderColor: "border-cyan-600",
    backgroundColor: "bg-cyan-600",
    textColor: "text-cyan-700",
    chipBackgroundColor: "bg-inherit",
  },
  EMI: {
    borderColor: "border-yellow-600",
    backgroundColor: "bg-yellow-600",
    textColor: "text-yellow-700",
    chipBackgroundColor: "bg-inherit",
  },
  Income: {
    borderColor: "border-green-500",
    backgroundColor: "bg-green-500",
    textColor: "text-green-600",
    chipBackgroundColor: "bg-inherit",
  },

  // Default fallback
  default: {
    borderColor: "",
    backgroundColor: "bg-blue-500",
    textColor: "text-blue-700",
    chipBackgroundColor: "bg-inherit",
  },
};

// Indian payment channels mapping
export const indianPaymentChannels = {
  upi: "UPI",
  card: "Card",
  cash: "Cash",
  auto_debit: "Auto Debit",
  transfer: "Bank Transfer",
  online: "Online",
  other: "Other",
};

// Popular Indian merchants and services
export const indianMerchants = {
  grocery: [
    "Big Bazaar",
    "DMart",
    "Spencer's",
    "More Megastore",
    "Reliance Fresh",
  ],
  food: ["Swiggy", "Zomato", "McDonald's", "KFC", "Domino's", "Subway"],
  transport: ["Uber", "Ola", "Rapido", "BMTC", "IRCTC"],
  utilities: ["BESCOM", "Airtel", "Jio", "Vi", "BWSSB", "Indane Gas"],
  healthcare: ["Apollo", "Manipal", "Fortis", "1mg", "PharmEasy"],
  entertainment: [
    "Netflix",
    "Amazon Prime",
    "Disney+ Hotstar",
    "Spotify",
    "BookMyShow",
  ],
  shopping: ["Amazon", "Flipkart", "Myntra", "Nykaa", "Zara", "H&M"],
  education: ["BYJU'S", "Unacademy", "Coursera", "Khan Academy"],
  investment: ["Zerodha", "Groww", "Upstox", "Angel Broking"],
  insurance: ["LIC", "HDFC ERGO", "Bajaj Allianz", "ICICI Lombard"],
};
