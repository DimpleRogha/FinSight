import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AmountInput from "./components/AmountInput";
import CategoryGrid from "./components/CategoryGrid";
import DatePickerCard from "./components/DatePickerCard";
import DescriptionInput from "./components/DescriptionInput";
import SaveButton from "./components/SaveButton";
import TransactionTypeToggle from "./components/TransactionTypeToggle";

import { Theme } from "@/theme";

export default function AddTransactionScreen() {
  const [type, setType] = useState<"income" | "expense">("expense");

  const [amount, setAmount] = useState("");

  const [category, setCategory] = useState("");

  const [description, setDescription] = useState("");

  const [date, setDate] = useState(new Date());

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <TransactionTypeToggle
          selected={type}
          onChange={setType}
        />

        <AmountInput
          amount={amount}
          onChange={setAmount}
        />

        <CategoryGrid
          type={type}
          selected={category}
          onSelect={setCategory}
        />

        <DescriptionInput
          value={description}
          onChange={setDescription}
        />

        <DatePickerCard
          date={date}
          onChange={setDate}
        />

        <SaveButton
          type={type}
          amount={amount}
          category={category}
          description={description}
          date={date}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },

  content: {
    padding: Theme.spacing.lg,
    paddingBottom: 120,
  },
});