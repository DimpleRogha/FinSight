import { router } from "expo-router";
import { Alert, Pressable, StyleSheet } from "react-native";

import AppText from "@/components/common/AppText";
import { useFinance } from "@/hooks/useFinance";
import { Theme } from "@/theme";

type Props = {
  type: "income" | "expense";
  amount: string;
  category: string;
  description: string;
  date: Date;
};

export default function SaveButton({
  type,
  amount,
  category,
  description,
  date,
}: Props) {
  const { addTransaction } = useFinance();

  const disabled =
    !amount || !category || !description;

  function handleSave() {
    if (disabled) {
      Alert.alert(
        "Incomplete Form",
        "Please fill all the fields."
      );
      return;
    }

    addTransaction({
      id: Date.now(),
      title: description,
      amount: Number(amount),
      category,
      type,
      date,
      icon: getIcon(category),
    });

    Alert.alert(
      "Success",
      "Transaction added successfully!"
    );

    router.back();
  }

  return (
    <Pressable
      onPress={handleSave}
      disabled={disabled}
      style={[
        styles.button,
        disabled && styles.disabled,
      ]}
    >
      <AppText
        weight="bold"
        style={styles.text}
      >
        Add Transaction
      </AppText>
    </Pressable>
  );
}

function getIcon(category: string) {
  switch (category) {
    case "Food":
      return "fast-food-outline";

    case "Travel":
      return "car-outline";

    case "Shopping":
      return "cart-outline";

    case "Bills":
      return "flash-outline";

    case "Rent":
      return "home-outline";

    case "Entertainment":
      return "film-outline";

    case "Health":
      return "fitness-outline";

    case "Education":
      return "school-outline";

    case "Salary":
      return "wallet-outline";

    case "Freelance":
      return "laptop-outline";

    case "Investment":
      return "trending-up-outline";

    case "Gift":
      return "gift-outline";

    case "Interest":
      return "cash-outline";

    case "Refund":
      return "refresh-outline";

    default:
      return "wallet-outline";
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: Theme.spacing.xxl,

    backgroundColor: Theme.colors.primary,

    paddingVertical: 18,

    borderRadius: Theme.radius.xl,

    justifyContent: "center",
    alignItems: "center",

    ...Theme.shadows.md,
  },

  disabled: {
    backgroundColor: Theme.colors.textMuted,
  },

  text: {
    color: "#FFFFFF",
  },
});