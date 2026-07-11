import { Transaction } from "@/types/transaction";

export const transactions: Transaction[] = [
  {
    id: 1,
    title: "Salary",
    amount: 65000,
    category: "Income",
    type: "income",
    date: "Today",
    icon: "wallet-outline",
  },

  {
    id: 2,
    title: "Starbucks",
    amount: 450,
    category: "Food",
    type: "expense",
    date: "Today",
    icon: "cafe-outline",
  },

  {
    id: 3,
    title: "Uber",
    amount: 680,
    category: "Travel",
    type: "expense",
    date: "Yesterday",
    icon: "car-outline",
  },

  {
    id: 4,
    title: "Electricity",
    amount: 3100,
    category: "Bills",
    type: "expense",
    date: "Yesterday",
    icon: "flash-outline",
  },

  {
    id: 5,
    title: "Freelancing",
    amount: 15000,
    category: "Income",
    type: "income",
    date: "2 days ago",
    icon: "briefcase-outline",
  },
];