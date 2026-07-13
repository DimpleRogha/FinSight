import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

import AppText from "@/components/common/AppText";
import { useFinance } from "@/hooks/useFinance";
import { Theme } from "@/theme";
import { Budget } from "@/types/budget";
import { getCategoryExpense } from "@/utils/finance";
import ProgressBar from "./ProgressBar";

type Props = {
  budget: Budget;
  onEdit: (budget: Budget) => void;
};

export default function BudgetCard({
  budget,
  onEdit,
}: Props) {
  const { transactions } = useFinance();

  const spent = getCategoryExpense(
    transactions,
    budget.category
  );

  const percentage = Math.min(
    (spent / budget.limit) * 100,
    100
  );

  const remaining = budget.limit - spent;

  function progressColor() {
    if (percentage < 60) return Theme.colors.success;

    if (percentage < 90) return Theme.colors.warning;

    if (percentage <= 100) return Theme.colors.danger;

    return Theme.colors.primary;
  }

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <AppText
          variant="body"
          weight="bold"
        >
          {budget.category}
        </AppText>

        <Pressable onPress={() => onEdit(budget)}>
          <Ionicons
            name="create-outline"
            size={20}
            color={Theme.colors.primary}
          />
        </Pressable>
      </View>

      <AppText
        variant="sm"
        style={styles.amount}
      >
        ₹{spent.toLocaleString("en-IN")} / ₹
        {budget.limit.toLocaleString("en-IN")}
      </AppText>

      <ProgressBar progress={percentage} />

      <View style={styles.footer}>
        <AppText
          variant="xs"
          style={styles.remaining}
        >
          {remaining >= 0
            ? `₹${remaining.toLocaleString(
                "en-IN"
              )} remaining`
            : `Exceeded by ₹${Math.abs(
                remaining
              ).toLocaleString("en-IN")}`}
        </AppText>

        <AppText
          variant="xs"
          weight="bold"
          style={{
            color: progressColor(),
          }}
        >
          {percentage.toFixed(0)}%
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Theme.colors.surface,

    borderRadius: Theme.radius.xl,

    padding: Theme.spacing.lg,

    marginBottom: Theme.spacing.lg,

    ...Theme.shadows.sm,
  },

  header: {
    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",
  },

  amount: {
    marginTop: Theme.spacing.sm,

    color: Theme.colors.textSecondary,
  },

  footer: {
    marginTop: Theme.spacing.md,

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",
  },

  remaining: {
    color: Theme.colors.textSecondary,
  },
});