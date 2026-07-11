import React, { createContext, useState } from "react";

import { transactions as initialTransactions } from "@/data/transactions";
import type { Transaction } from "@/types/transaction";

interface FinanceContextType {
  transactions: Transaction[];

  addTransaction: (transaction: Transaction) => void;
}

export const FinanceContext = createContext<FinanceContextType>(
  {} as FinanceContextType
);

export function FinanceProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [transactions, setTransactions] = useState(
    initialTransactions
  );

  function addTransaction(transaction: Transaction) {
    setTransactions((previous) => [
      transaction,
      ...previous,
    ]);
  }

  return (
    <FinanceContext.Provider
      value={{
        transactions,
        addTransaction,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
}