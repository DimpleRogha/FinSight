import React, { createContext, useState } from "react";

import { transactions as initialTransactions } from "@/data/transactions";
import type { Transaction } from "@/types/transaction";

interface FinanceContextType {
  transactions: Transaction[];

  addTransaction: (transaction: Transaction) => void;

  deleteTransaction: (id: number) => void;
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

  function deleteTransaction(id: number) {
    setTransactions((previous) =>
      previous.filter((transaction) => transaction.id !== id)
    );
  }

  return (
    <FinanceContext.Provider
      value={{
        transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
}