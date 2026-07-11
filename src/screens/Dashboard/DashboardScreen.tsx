import Screen from "@/components/common/Screen";
//import AnalyticsCard from "./components/AnalyticsCar";
import BalanceCard from "./components/BalanceCard";
import Header from "./components/Header";
import IncomeExpenseCards from "./components/IncomeExpenseCards";
import RecentTransactions from "./components/RecentTransactions";

export default function DashboardScreen() {
  return (
    <Screen>
      <Header />
      <BalanceCard />
      <IncomeExpenseCards />
      <RecentTransactions />
      {/* <AnalyticsCard /> */}
    </Screen>
  );
}