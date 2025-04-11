// components/AnimatedBankSelector.tsx
"use client";

import { motion } from "framer-motion";
import React from "react";
import { BankSelector } from "./BankSelector";

interface AnimatedBankSelectorProps {
  accounts: Account[];
  selectedAccountId: string;
  onSelectionChange?: (isLoading: boolean) => void;
}

const AnimatedBankSelector: React.FC<AnimatedBankSelectorProps> = ({
  accounts,
  selectedAccountId,
  onSelectionChange,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="w-full"
    >
      <BankSelector
        accounts={accounts}
        selectedAccountId={selectedAccountId}
        onSelectionChange={onSelectionChange}
      />
    </motion.div>
  );
};

export default AnimatedBankSelector;
