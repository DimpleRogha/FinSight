import { Transaction } from "@/types/transaction";

export function calculateIncome(
  transactions: Transaction[]
) {
  return transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);
}

export function calculateExpenses(
  transactions: Transaction[]
) {
  return transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);
}

export function calculateBalance(
  transactions: Transaction[]
) {
  return (
    calculateIncome(transactions) -
    calculateExpenses(transactions)
  );
}

export function recentTransactions(
  transactions: Transaction[],
  count = 3
) {
  return transactions.slice(0, count);
}