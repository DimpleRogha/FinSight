import { Transaction } from "@/types/transaction";

export const transactions: Transaction[] = [
  {
    id: 1,
    title: "Salary",
    amount: 65000,
    category: "Income",
    type: "income",
    date: new Date(2026, 6, 7),
    icon: "wallet-outline",
  },

  {
    id: 2,
    title: "Starbucks",
    amount: 450,
    category: "Food",
    type: "expense",
    date: new Date(2026, 6, 7),
    icon: "cafe-outline",
  },

  {
    id: 3,
    title: "Uber",
    amount: 680,
    category: "Travel",
    type: "expense",
    date: new Date(2026, 6, 6),
    icon: "car-outline",
  },

  {
    id: 4,
    title: "Electricity",
    amount: 3100,
    category: "Bills",
    type: "expense",
    date: new Date(2026, 6, 5),
    icon: "flash-outline",
  },

  {
    id: 5,
    title: "Freelancing",
    amount: 15000,
    category: "Income",
    type: "income",
    date: new Date(2026, 6, 4),
    icon: "briefcase-outline",
  },
];