import React, { createContext, useState } from "react";

import { budgets as initialBudgets } from "@/data/budget";
import { transactions as initialTransactions } from "@/data/transactions";

import type { Budget } from "@/types/budget";
import type { Transaction } from "@/types/transaction";

interface FinanceContextType {
  transactions: Transaction[];

  budgets: Budget[];

  addTransaction: (transaction: Transaction) => void;

  deleteTransaction: (id: number) => void;

  addBudget: (budget: Budget) => void;

  updateBudget: (id: number, limit: number) => void;

  deleteBudget: (id: number) => void;
}

export const FinanceContext = createContext<FinanceContextType>(
  {} as FinanceContextType
);

export function FinanceProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [transactions, setTransactions] =
    useState(initialTransactions);

  const [budgets, setBudgets] =
    useState(initialBudgets);

  function addTransaction(transaction: Transaction) {
    setTransactions((previous) => [
      transaction,
      ...previous,
    ]);
  }

  function deleteTransaction(id: number) {
    setTransactions((previous) =>
      previous.filter(
        (transaction) => transaction.id !== id
      )
    );
  }

  function addBudget(budget: Budget) {
    setBudgets((previous) => [
      ...previous,
      budget,
    ]);
  }

  function updateBudget(
  id: number,
  limit: number
) {
  setBudgets((previous) =>
    previous.map((budget) =>
      budget.id === id
        ? {
            ...budget,
            limit,
          }
        : budget
    )
  );
}

  function deleteBudget(id: number) {
    setBudgets((previous) =>
      previous.filter(
        (budget) => budget.id !== id
      )
    );
  }

  return (
    <FinanceContext.Provider
      value={{
        transactions,
        budgets,

        addTransaction,
        deleteTransaction,

        addBudget,
        updateBudget,
        deleteBudget,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
}