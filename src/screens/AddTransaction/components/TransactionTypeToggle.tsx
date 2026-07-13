import { Pressable, StyleSheet, View } from "react-native";

import AppText from "@/components/common/AppText";
import { Theme } from "@/theme";

type Props = {
  selected: "income" | "expense";
  onChange: (value: "income" | "expense") => void;
};

export default function TransactionTypeToggle({
  selected,
  onChange,
}: Props) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => onChange("income")}
        style={[
          styles.button,
          selected === "income" && styles.active,
        ]}
      >
        <AppText
          weight="semiBold"
          style={[
            styles.text,
            selected === "income" && styles.activeText,
          ]}
        >
          Income
        </AppText>
      </Pressable>

      <Pressable
        onPress={() => onChange("expense")}
        style={[
          styles.button,
          selected === "expense" && styles.active,
        ]}
      >
        <AppText
          weight="semiBold"
          style={[
            styles.text,
            selected === "expense" && styles.activeText,
          ]}
        >
          Expense
        </AppText>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Theme.colors.surface,
    borderRadius: Theme.radius.xl,
    padding: 6,

    ...Theme.shadows.sm,
  },

  button: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: Theme.radius.lg,
    alignItems: "center",
  },

  active: {
    backgroundColor: Theme.colors.primary,
  },

  text: {
    color: Theme.colors.textSecondary,
  },

  activeText: {
    color: Theme.colors.textInverse,
  },
});