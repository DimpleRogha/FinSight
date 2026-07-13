import { Ionicons } from "@expo/vector-icons";
import { Alert, Pressable, StyleSheet, View } from "react-native";

import AppText from "@/components/common/AppText";
import { useFinance } from "@/hooks/useFinance";
import { Theme } from "@/theme";
import type { Transaction } from "@/types/transaction";

type Props = {
  transaction: Transaction;
};

export default function TransactionCard({
  transaction,
}: Props) {
  const { deleteTransaction } = useFinance();

  function handleDelete() {
    Alert.alert(
      "Delete Transaction",
      "Are you sure you want to delete this transaction?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () =>
            deleteTransaction(transaction.id),
        },
      ]
    );
  }

  const income = transaction.type === "income";

  return (
    <View style={styles.card}>
      <View style={styles.left}>
        <View
          style={[
            styles.iconContainer,
            {
              backgroundColor: income
                ? Theme.colors.incomeBg
                : Theme.colors.expenseBg,
            },
          ]}
        >
          <Ionicons
            name={transaction.icon as any}
            size={22}
            color={
              income
                ? Theme.colors.income
                : Theme.colors.expense
            }
          />
        </View>

        <View style={styles.details}>
          <AppText
            variant="body"
            weight="semiBold"
          >
            {transaction.title}
          </AppText>

          <AppText
            variant="xs"
            style={styles.category}
          >
            {transaction.category}
          </AppText>
        </View>
      </View>

      <View style={styles.right}>
        <AppText
          variant="body"
          weight="bold"
          style={{
            color: income
              ? Theme.colors.income
              : Theme.colors.expense,
          }}
        >
          {income ? "+" : "-"} ₹
          {transaction.amount.toLocaleString("en-IN")}
        </AppText>

        <Pressable
          onPress={handleDelete}
          hitSlop={10}
        >
          <Ionicons
            name="trash-outline"
            size={22}
            color={Theme.colors.textMuted}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Theme.colors.surface,

    borderRadius: Theme.radius.xl,

    padding: Theme.spacing.lg,

    marginBottom: Theme.spacing.md,

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",

    ...Theme.shadows.sm,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  iconContainer: {
    width: 48,
    height: 48,

    borderRadius: Theme.radius.full,

    justifyContent: "center",
    alignItems: "center",
  },

  details: {
    marginLeft: Theme.spacing.md,
    flex: 1,
  },

  category: {
    marginTop: 2,
    color: Theme.colors.textSecondary,
  },

  right: {
    alignItems: "flex-end",
    gap: Theme.spacing.sm,
  },
});