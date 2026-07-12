import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

import { useFinance } from "@/hooks/useFinance";
import { getWeeklyExpenses } from "@/utils/finance";

import AppText from "@/components/common/AppText";
import Card from "@/components/common/Card";
import { Theme } from "@/theme";

const lineData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      data: [1200, 2200, 1800, 3100, 2700, 4200, 2600],
    },
  ],
};

export default function SpendingChart() {
  const [chartWidth, setChartWidth] = useState(0);

  const { transactions } = useFinance();
  const lineData = getWeeklyExpenses(transactions);

  return (
    <Card style={styles.card}>
      <View style={styles.header}>
        <AppText variant="body" weight="bold">
          Spending Overview
        </AppText>

        <AppText variant="sm" style={styles.month}>
          This Week
        </AppText>
      </View>

      <View
        style={styles.chartContainer}
        onLayout={(event) => {
          setChartWidth(event.nativeEvent.layout.width);
        }}
      >
        {chartWidth > 0 && (
          <LineChart
            data={lineData}
            width={chartWidth}
            height={220}
            bezier
            withShadow
            withInnerLines={false}
            withOuterLines={false}
            withVerticalLines={false}
            withHorizontalLines={false}
            fromZero
            chartConfig={{
              backgroundGradientFrom: Theme.colors.surface,
              backgroundGradientTo: Theme.colors.surface,

              decimalPlaces: 0,

              color: (opacity = 1) =>
                `rgba(106, 90, 249, ${opacity})`,

              labelColor: (opacity = 1) =>
                `rgba(120,120,120,${opacity})`,

              propsForDots: {
                r: "4",
                strokeWidth: "2",
                stroke: Theme.colors.primary,
              },

              propsForBackgroundLines: {
                strokeWidth: 0,
              },
            }}
            style={styles.chart}
          />
        )}
      </View>
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
    marginBottom: Theme.spacing.lg,
  },

  month: {
    color: Theme.colors.textSecondary,
  },

  chartContainer: {
    width: "100%",
    overflow: "hidden",
    borderRadius: Theme.radius.lg,
  },

  chart: {
    borderRadius: Theme.radius.lg,
    marginLeft: -18, // removes the extra left padding added by chart-kit
  },
});