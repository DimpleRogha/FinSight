import { Pressable, StyleSheet, View } from "react-native";

import AppText from "@/components/common/AppText";
import Card from "@/components/common/Card";

import TransactionItem from "./TransactionItem";

import { Theme } from "@/theme";

import { useFinance } from "@/hooks/useFinance";
import {
    recentTransactions,
} from "@/utils/finance";

export default function RecentTransactions() {
    const { transactions } = useFinance();
  const latest = recentTransactions(transactions);

  return (
    <Card style={styles.card}>
      <View style={styles.header}>
        <AppText variant="lg" weight="bold">
          Recent Transactions
        </AppText>

        <Pressable>
          <AppText
            variant="sm"
            style={styles.seeAll}
          >
            See All
          </AppText>
        </Pressable>
      </View>

      {latest.map((transaction) => (
        <TransactionItem
            key={transaction.id}
            title={transaction.title}
            amount={transaction.amount}
            category={transaction.category}
            income={transaction.type === "income"}
            icon={transaction.icon as any}
        />
      ))}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: Theme.spacing.xl,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginBottom: Theme.spacing.md,
  },

  seeAll: {
    color: Theme.colors.primary,
  },
});