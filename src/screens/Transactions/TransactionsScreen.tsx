import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AppText from "@/components/common/AppText";
import { useFinance } from "@/hooks/useFinance";
import { Theme } from "@/theme";

import FilterChips from "./components/FilterChips";
import SearchBar from "./components/SearchBar";
import TransactionCard from "./components/TransactionCard";

type Filter = "All" | "Income" | "Expense";

export default function TransactionsScreen() {
  const { transactions } = useFinance();

  const [searchQuery, setSearchQuery] = useState("");

  const [selectedFilter, setSelectedFilter] =
    useState<Filter>("All");

  const filteredTransactions = transactions.filter(
    (transaction) => {
      const matchesSearch =
        transaction.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        transaction.category
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

      const matchesFilter =
        selectedFilter === "All"
          ? true
          : selectedFilter === "Income"
          ? transaction.type === "income"
          : transaction.type === "expense";

      return matchesSearch && matchesFilter;
    }
  );

  return (
    <SafeAreaView style={styles.container}>
      <AppText
        variant="h2"
        weight="bold"
        style={styles.title}
      >
        Transactions
      </AppText>

      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
      />

      <FilterChips
        selected={selectedFilter}
        onSelect={setSelectedFilter}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {filteredTransactions.map((transaction) => (
          <TransactionCard
            key={transaction.id}
            transaction={transaction}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
    padding: Theme.spacing.lg,
  },

  title: {
    marginBottom: Theme.spacing.lg,
  },
});