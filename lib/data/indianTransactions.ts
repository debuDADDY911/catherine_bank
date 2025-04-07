// lib/data/indianTransactions.ts

export interface IndianTransaction {
  id: string;
  name: string;
  amount: number;
  category: string;
  paymentChannel: string;
  date: string;
  type: "debit" | "credit";
  description?: string;
}

const indianTransactionData = [
  // Groceries & Food
  {
    name: "Big Bazaar - Weekly Groceries",
    category: "Groceries & Food",
    amountRange: [800, 3500],
    channel: "card",
  },
  {
    name: "DMart - Household Items",
    category: "Groceries & Food",
    amountRange: [500, 2000],
    channel: "card",
  },
  {
    name: "Spencer's Retail",
    category: "Groceries & Food",
    amountRange: [300, 1500],
    channel: "card",
  },
  {
    name: "More Megastore",
    category: "Groceries & Food",
    amountRange: [400, 1800],
    channel: "card",
  },
  {
    name: "Reliance Fresh",
    category: "Groceries & Food",
    amountRange: [200, 1200],
    channel: "card",
  },
  {
    name: "Local Kirana Store",
    category: "Groceries & Food",
    amountRange: [100, 800],
    channel: "cash",
  },
  {
    name: "Milk Vendor - Daily",
    category: "Groceries & Food",
    amountRange: [50, 150],
    channel: "cash",
  },
  {
    name: "Vegetable Vendor",
    category: "Groceries & Food",
    amountRange: [80, 300],
    channel: "cash",
  },
  {
    name: "Swiggy Food Delivery",
    category: "Groceries & Food",
    amountRange: [150, 600],
    channel: "upi",
  },
  {
    name: "Zomato Order",
    category: "Groceries & Food",
    amountRange: [200, 800],
    channel: "upi",
  },
  {
    name: "McDonald's India",
    category: "Groceries & Food",
    amountRange: [250, 700],
    channel: "card",
  },
  {
    name: "KFC India",
    category: "Groceries & Food",
    amountRange: [300, 900],
    channel: "card",
  },
  {
    name: "Domino's Pizza",
    category: "Groceries & Food",
    amountRange: [400, 1200],
    channel: "upi",
  },
  {
    name: "Subway India",
    category: "Groceries & Food",
    amountRange: [200, 500],
    channel: "card",
  },
  {
    name: "Pizza Hut",
    category: "Groceries & Food",
    amountRange: [350, 1000],
    channel: "upi",
  },

  // Transportation
  {
    name: "Uber Ride",
    category: "Transportation",
    amountRange: [80, 400],
    channel: "upi",
  },
  {
    name: "Ola Cab Service",
    category: "Transportation",
    amountRange: [70, 350],
    channel: "upi",
  },
  {
    name: "Auto Rickshaw",
    category: "Transportation",
    amountRange: [30, 150],
    channel: "cash",
  },
  {
    name: "BMTC Bus Pass",
    category: "Transportation",
    amountRange: [500, 1500],
    channel: "card",
  },
  {
    name: "Metro Rail Card Recharge",
    category: "Transportation",
    amountRange: [200, 1000],
    channel: "upi",
  },
  {
    name: "Petrol Pump - HP",
    category: "Transportation",
    amountRange: [500, 3000],
    channel: "card",
  },
  {
    name: "Indian Oil Petrol",
    category: "Transportation",
    amountRange: [600, 3500],
    channel: "card",
  },
  {
    name: "Rapido Bike Taxi",
    category: "Transportation",
    amountRange: [40, 120],
    channel: "upi",
  },
  {
    name: "Railway Ticket Booking",
    category: "Transportation",
    amountRange: [200, 2500],
    channel: "upi",
  },
  {
    name: "IRCTC Train Booking",
    category: "Transportation",
    amountRange: [300, 4000],
    channel: "card",
  },
  {
    name: "BluSmart Cab",
    category: "Transportation",
    amountRange: [100, 500],
    channel: "upi",
  },

  // Utilities
  {
    name: "BESCOM Electricity Bill",
    category: "Utilities",
    amountRange: [800, 4500],
    channel: "upi",
  },
  {
    name: "Airtel DTH Recharge",
    category: "Utilities",
    amountRange: [200, 600],
    channel: "upi",
  },
  {
    name: "Jio Mobile Recharge",
    category: "Utilities",
    amountRange: [150, 700],
    channel: "upi",
  },
  {
    name: "Vi Mobile Prepaid",
    category: "Utilities",
    amountRange: [200, 500],
    channel: "upi",
  },
  {
    name: "BWSSB Water Bill",
    category: "Utilities",
    amountRange: [300, 1200],
    channel: "upi",
  },
  {
    name: "Indane Gas Cylinder",
    category: "Utilities",
    amountRange: [800, 1200],
    channel: "card",
  },
  {
    name: "Airtel Broadband",
    category: "Utilities",
    amountRange: [600, 2000],
    channel: "auto_debit",
  },
  {
    name: "Tata Sky DTH",
    category: "Utilities",
    amountRange: [250, 800],
    channel: "upi",
  },
  {
    name: "BSNL Broadband",
    category: "Utilities",
    amountRange: [400, 1200],
    channel: "auto_debit",
  },

  // Healthcare
  {
    name: "Apollo Pharmacy",
    category: "Healthcare",
    amountRange: [150, 1500],
    channel: "card",
  },
  {
    name: "Manipal Hospital",
    category: "Healthcare",
    amountRange: [500, 8000],
    channel: "card",
  },
  {
    name: "Dr. Reddy's Lab Test",
    category: "Healthcare",
    amountRange: [300, 2000],
    channel: "upi",
  },
  {
    name: "Fortis Healthcare",
    category: "Healthcare",
    amountRange: [800, 5000],
    channel: "card",
  },
  {
    name: "1mg Medicine Order",
    category: "Healthcare",
    amountRange: [100, 800],
    channel: "upi",
  },
  {
    name: "PharmEasy Delivery",
    category: "Healthcare",
    amountRange: [120, 600],
    channel: "upi",
  },
  {
    name: "Local Clinic Consultation",
    category: "Healthcare",
    amountRange: [200, 800],
    channel: "cash",
  },
  {
    name: "Netmeds Online",
    category: "Healthcare",
    amountRange: [150, 1000],
    channel: "upi",
  },

  // Education
  {
    name: "BYJU'S Monthly Fee",
    category: "Education",
    amountRange: [1000, 3000],
    channel: "auto_debit",
  },
  {
    name: "Unacademy Subscription",
    category: "Education",
    amountRange: [500, 2500],
    channel: "upi",
  },
  {
    name: "School Fees",
    category: "Education",
    amountRange: [3000, 15000],
    channel: "card",
  },
  {
    name: "Coaching Classes",
    category: "Education",
    amountRange: [1500, 8000],
    channel: "cash",
  },
  {
    name: "Amazon Kindle Books",
    category: "Education",
    amountRange: [100, 500],
    channel: "card",
  },
  {
    name: "Coursera Course Fee",
    category: "Education",
    amountRange: [2000, 6000],
    channel: "card",
  },
  {
    name: "Vedantu Classes",
    category: "Education",
    amountRange: [800, 2500],
    channel: "upi",
  },

  // Entertainment
  {
    name: "Netflix Subscription",
    category: "Entertainment",
    amountRange: [200, 800],
    channel: "auto_debit",
  },
  {
    name: "Amazon Prime Video",
    category: "Entertainment",
    amountRange: [150, 1500],
    channel: "card",
  },
  {
    name: "Disney+ Hotstar",
    category: "Entertainment",
    amountRange: [300, 1500],
    channel: "upi",
  },
  {
    name: "Spotify Premium",
    category: "Entertainment",
    amountRange: [120, 200],
    channel: "auto_debit",
  },
  {
    name: "PVR Cinemas Ticket",
    category: "Entertainment",
    amountRange: [200, 800],
    channel: "card",
  },
  {
    name: "BookMyShow Movie",
    category: "Entertainment",
    amountRange: [150, 600],
    channel: "upi",
  },
  {
    name: "YouTube Premium",
    category: "Entertainment",
    amountRange: [130, 200],
    channel: "auto_debit",
  },
  {
    name: "INOX Cinema",
    category: "Entertainment",
    amountRange: [180, 700],
    channel: "card",
  },
  {
    name: "SonyLIV Subscription",
    category: "Entertainment",
    amountRange: [300, 999],
    channel: "upi",
  },

  // Shopping
  {
    name: "Amazon India Purchase",
    category: "Shopping",
    amountRange: [200, 5000],
    channel: "card",
  },
  {
    name: "Flipkart Order",
    category: "Shopping",
    amountRange: [300, 8000],
    channel: "upi",
  },
  {
    name: "Myntra Fashion",
    category: "Shopping",
    amountRange: [500, 3000],
    channel: "card",
  },
  {
    name: "Nykaa Beauty",
    category: "Shopping",
    amountRange: [300, 2000],
    channel: "card",
  },
  {
    name: "Zara India",
    category: "Shopping",
    amountRange: [1000, 5000],
    channel: "card",
  },
  {
    name: "H&M India",
    category: "Shopping",
    amountRange: [800, 3500],
    channel: "card",
  },
  {
    name: "Big Bazaar Fashion",
    category: "Shopping",
    amountRange: [400, 2500],
    channel: "card",
  },
  {
    name: "Tanishq Jewellery",
    category: "Shopping",
    amountRange: [5000, 50000],
    channel: "card",
  },
  {
    name: "Lifestyle Stores",
    category: "Shopping",
    amountRange: [600, 4000],
    channel: "card",
  },
  {
    name: "Shoppers Stop",
    category: "Shopping",
    amountRange: [800, 6000],
    channel: "card",
  },

  // Investment (Credit transactions)
  {
    name: "SIP - HDFC Mutual Fund",
    category: "Investment",
    amountRange: [1000, 10000],
    channel: "auto_debit",
    type: "debit",
  },
  {
    name: "Zerodha Trading",
    category: "Investment",
    amountRange: [500, 15000],
    channel: "upi",
    type: "debit",
  },
  {
    name: "PPF Contribution",
    category: "Investment",
    amountRange: [500, 12500],
    channel: "transfer",
    type: "debit",
  },
  {
    name: "NSC Investment",
    category: "Investment",
    amountRange: [1000, 10000],
    channel: "transfer",
    type: "debit",
  },
  {
    name: "Groww Investment",
    category: "Investment",
    amountRange: [500, 8000],
    channel: "upi",
    type: "debit",
  },
  {
    name: "Stock Dividend",
    category: "Investment",
    amountRange: [200, 5000],
    channel: "transfer",
    type: "credit",
  },
  {
    name: "Mutual Fund Returns",
    category: "Investment",
    amountRange: [300, 8000],
    channel: "transfer",
    type: "credit",
  },

  // Insurance
  {
    name: "LIC Premium Payment",
    category: "Insurance",
    amountRange: [2000, 25000],
    channel: "auto_debit",
  },
  {
    name: "HDFC ERGO Health Insurance",
    category: "Insurance",
    amountRange: [1500, 15000],
    channel: "card",
  },
  {
    name: "Bajaj Allianz Motor Insurance",
    category: "Insurance",
    amountRange: [3000, 20000],
    channel: "upi",
  },
  {
    name: "ICICI Lombard Premium",
    category: "Insurance",
    amountRange: [2500, 18000],
    channel: "auto_debit",
  },
  {
    name: "Term Insurance Premium",
    category: "Insurance",
    amountRange: [1000, 12000],
    channel: "auto_debit",
  },

  // EMI
  {
    name: "Home Loan EMI - SBI",
    category: "EMI",
    amountRange: [15000, 50000],
    channel: "auto_debit",
  },
  {
    name: "Car Loan EMI - HDFC",
    category: "EMI",
    amountRange: [8000, 30000],
    channel: "auto_debit",
  },
  {
    name: "Personal Loan EMI",
    category: "EMI",
    amountRange: [5000, 20000],
    channel: "auto_debit",
  },
  {
    name: "Credit Card Payment",
    category: "EMI",
    amountRange: [2000, 25000],
    channel: "auto_debit",
  },
  {
    name: "Education Loan EMI",
    category: "EMI",
    amountRange: [3000, 15000],
    channel: "auto_debit",
  },
  {
    name: "Bike Loan EMI",
    category: "EMI",
    amountRange: [2000, 8000],
    channel: "auto_debit",
  },

  // Income (Credits)
  {
    name: "Salary Credit",
    category: "Income",
    amountRange: [25000, 150000],
    channel: "transfer",
    type: "credit",
  },
  {
    name: "Freelance Payment",
    category: "Income",
    amountRange: [5000, 50000],
    channel: "transfer",
    type: "credit",
  },
  {
    name: "Interest Earned",
    category: "Income",
    amountRange: [100, 2000],
    channel: "transfer",
    type: "credit",
  },
  {
    name: "Cashback Reward",
    category: "Income",
    amountRange: [50, 500],
    channel: "transfer",
    type: "credit",
  },
  {
    name: "Bonus Payment",
    category: "Income",
    amountRange: [5000, 50000],
    channel: "transfer",
    type: "credit",
  },
  {
    name: "Fixed Deposit Maturity",
    category: "Income",
    amountRange: [10000, 200000],
    channel: "transfer",
    type: "credit",
  },
  {
    name: "Rental Income",
    category: "Income",
    amountRange: [8000, 40000],
    channel: "transfer",
    type: "credit",
  },

  // Additional categories
  {
    name: "Maid Salary",
    category: "Household",
    amountRange: [3000, 8000],
    channel: "cash",
  },
  {
    name: "Watchman Salary",
    category: "Household",
    amountRange: [1000, 3000],
    channel: "cash",
  },
  {
    name: "Society Maintenance",
    category: "Household",
    amountRange: [2000, 8000],
    channel: "upi",
  },
  {
    name: "House Rent",
    category: "Household",
    amountRange: [10000, 50000],
    channel: "transfer",
  },
  {
    name: "Internet Bill",
    category: "Utilities",
    amountRange: [500, 2000],
    channel: "auto_debit",
  },
  {
    name: "Pest Control Service",
    category: "Household",
    amountRange: [800, 2000],
    channel: "cash",
  },
  {
    name: "Laundry Service",
    category: "Household",
    amountRange: [200, 800],
    channel: "cash",
  },
];

export function generateRandomIndianTransactions(
  count: number = 20
): IndianTransaction[] {
  const transactions: IndianTransaction[] = [];

  for (let i = 0; i < count; i++) {
    const transactionTemplate =
      indianTransactionData[
        Math.floor(Math.random() * indianTransactionData.length)
      ];
    const amount = Math.floor(
      Math.random() *
        (transactionTemplate.amountRange[1] -
          transactionTemplate.amountRange[0]) +
        transactionTemplate.amountRange[0]
    );

    // Generate random date within last 90 days
    const randomDays = Math.floor(Math.random() * 90);
    const date = new Date();
    date.setDate(date.getDate() - randomDays);

    // Determine transaction type - 85% debit, 15% credit for more realistic balance
    const type =
      transactionTemplate.type || (Math.random() > 0.85 ? "credit" : "debit");

    transactions.push({
      id: `indian_txn_${Date.now()}_${i}`,
      name: transactionTemplate.name,
      amount: type === "credit" ? amount : amount, // Keep positive, type determines display
      category: transactionTemplate.category,
      paymentChannel: transactionTemplate.channel,
      date: date.toISOString(),
      type: type,
      description: `${transactionTemplate.name} transaction`,
    });
  }

  // Sort by date (newest first)
  return transactions.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getIndianTransactionsByCategory(): Record<
  string,
  IndianTransaction[]
> {
  const allTransactions = generateRandomIndianTransactions(50);
  const grouped: Record<string, IndianTransaction[]> = {};

  allTransactions.forEach((transaction) => {
    if (!grouped[transaction.category]) {
      grouped[transaction.category] = [];
    }
    grouped[transaction.category].push(transaction);
  });

  return grouped;
}
