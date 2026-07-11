import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";

import AppText from "@/components/common/AppText";
import { useFinance } from "@/hooks/useFinance";
import { Theme } from "@/theme";
import {
    calculateBalance,
} from "@/utils/finance";

export default function BalanceCard() {
    const { transactions } = useFinance();
    const balance = calculateBalance(transactions);
  return (
    <LinearGradient
      colors={[
        Theme.colors.primaryDark,
        Theme.colors.primary,
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <AppText variant="sm" style={styles.subtitle}>
        Current Balance
      </AppText>

      <AppText variant="h1" weight="bold">
        ₹{balance.toLocaleString("en-IN")}
      </AppText>

      <View style={styles.bottom}>
        <View>
          <AppText variant="xs" style={styles.subtitle}>
            Last Updated
          </AppText>

          <AppText variant="sm">
            Today
          </AppText>
        </View>

        <View style={styles.circle}>
          <AppText variant="lg">
            💳
          </AppText>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Theme.spacing.xl,

    padding: Theme.spacing.xl,

    borderRadius: Theme.radius.xxl,

    ...Theme.shadows.md,
  },

  subtitle: {
    color: "#D8D0FF",
  },

  bottom: {
    marginTop: Theme.spacing.xl,

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",
  },

  circle: {
    width: 54,
    height: 54,

    borderRadius: 27,

    backgroundColor: "rgba(255,255,255,0.15)",

    justifyContent: "center",
    alignItems: "center",
  },
});