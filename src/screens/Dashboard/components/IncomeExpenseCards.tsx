import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

import AppText from "@/components/common/AppText";
import Card from "@/components/common/Card";
import { Theme } from "@/theme";

import { useFinance } from "@/hooks/useFinance";
import {
  calculateExpenses,
  calculateIncome,
} from "@/utils/finance";

export default function IncomeExpenseCards() {
  const { transactions } = useFinance();
  const income = calculateIncome(transactions);
  const expenses = calculateExpenses(transactions);

  return (
    <View style={styles.container}>

      <Card style={styles.card}>
        <View style={[styles.icon, styles.income]}>
          <Ionicons
            name="arrow-down"
            size={20}
            color={Theme.colors.income}
          />
        </View>

        <AppText variant="xs">
          Income
        </AppText>

        <AppText
          variant="lg"
          weight="bold"
        >
          ₹{income.toLocaleString("en-IN")}
        </AppText>
      </Card>

      <Card style={styles.card}>
        <View style={[styles.icon, styles.expense]}>
          <Ionicons
            name="arrow-up"
            size={20}
            color={Theme.colors.expense}
          />
        </View>

        <AppText variant="xs">
          Expenses
        </AppText>

        <AppText
          variant="lg"
          weight="bold"
        >
          ₹{expenses.toLocaleString("en-IN")}
        </AppText>
      </Card>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Theme.spacing.lg,

    flexDirection: "row",

    justifyContent: "space-between",

    gap: Theme.spacing.md,
  },

  card: {
    flex: 1,
  },

  icon: {
    width: 42,
    height: 42,

    borderRadius: Theme.radius.full,

    justifyContent: "center",
    alignItems: "center",

    marginBottom: Theme.spacing.md,
  },

  income: {
    backgroundColor: Theme.colors.greenBg,
  },

  expense: {
    backgroundColor: Theme.colors.pinkBg,
  },
});