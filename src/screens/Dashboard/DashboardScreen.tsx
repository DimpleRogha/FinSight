import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BalanceCard from "./components/BalanceCard";
import Header from "./components/Header";
import IncomeExpenseCards from "./components/IncomeExpenseCards";
import RecentTransactions from "./components/RecentTransactions";
import SpendingChart from "./components/SpendingChart";

import { Theme } from "@/theme";

export default function DashboardScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <BalanceCard />

        <IncomeExpenseCards />

        <SpendingChart />

        <RecentTransactions />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },

  headerContainer: {
    backgroundColor: Theme.colors.background,
    paddingHorizontal: Theme.spacing.lg,
    paddingTop: Theme.spacing.md,
    zIndex: 10,

    // Android
    elevation: 5,

    // iOS
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  content: {
    paddingHorizontal: Theme.spacing.lg,
    paddingTop: Theme.spacing.lg,
    paddingBottom: 120,
  },
});