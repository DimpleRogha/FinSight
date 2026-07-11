import { StyleSheet, View } from "react-native";

import AppText from "@/components/common/AppText";
import Card from "@/components/common/Card";
import { Theme } from "@/theme";

import {
    CartesianChart,
    Line,
} from "victory-native";

const data = [
  { x: "Mon", y: 4000 },
  { x: "Tue", y: 7000 },
  { x: "Wed", y: 5200 },
  { x: "Thu", y: 9000 },
  { x: "Fri", y: 7500 },
  { x: "Sat", y: 11000 },
  { x: "Sun", y: 8300 },
];

export default function AnalyticsCard() {
  return (
    <Card style={styles.container}>
      <View style={styles.header}>
        <AppText variant="lg" weight="bold">
          Spending Overview
        </AppText>

        <AppText variant="sm">
          This Week
        </AppText>
      </View>

      <View style={{ height: 220 }}>
        <CartesianChart
          data={data}
          xKey="x"
          yKeys={["y"]}
        >
          {({ points }) => (
            <Line
              points={points.y}
              color={Theme.colors.primary}
              strokeWidth={4}
            />
          )}
        </CartesianChart>
      </View>

      <View style={styles.footer}>
        <View>
          <AppText variant="xs">Income</AppText>
          <AppText variant="lg" weight="bold">
            ₹65K
          </AppText>
        </View>

        <View>
          <AppText variant="xs">Expenses</AppText>
          <AppText variant="lg" weight="bold">
            ₹18K
          </AppText>
        </View>

        <View>
          <AppText variant="xs">Savings</AppText>
          <AppText variant="lg" weight="bold">
            ₹47K
          </AppText>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Theme.spacing.xl,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: Theme.spacing.lg,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Theme.spacing.lg,
  },
});