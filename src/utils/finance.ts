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

export function getWeeklyExpenses(
  transactions: Transaction[]
) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const weekly = new Array(7).fill(0);

  transactions.forEach((transaction) => {
    if (transaction.type === "expense") {
      const day = transaction.date.getDay();

      weekly[day] += transaction.amount;
    }
  });

  return {
    labels: days,

    datasets: [
      {
        data: weekly,
      },
    ],
  };
}