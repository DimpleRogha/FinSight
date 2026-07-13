import { StyleSheet, TextInput, View } from "react-native";

import AppText from "@/components/common/AppText";
import { Theme } from "@/theme";

type Props = {
  amount: string;
  onChange: (value: string) => void;
};

export default function AmountInput({
  amount,
  onChange,
}: Props) {
  return (
    <View style={styles.container}>
      <AppText variant="sm" weight="medium">
        Amount
      </AppText>

      <View style={styles.amountRow}>
        <AppText
          variant="h1"
          weight="bold"
          style={styles.currency}
        >
          ₹
        </AppText>

        <TextInput
          value={amount}
          onChangeText={onChange}
          placeholder="0.00"
          placeholderTextColor={Theme.colors.textMuted}
          keyboardType="decimal-pad"
          style={styles.input}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Theme.spacing.xxl,
    alignItems: "center",
  },

  amountRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Theme.spacing.md,
  },

  currency: {
    marginRight: 8,
    color: Theme.colors.primary,
  },

  input: {
    fontSize: 42,
    fontFamily: Theme.typography.fontFamily.bold,
    color: Theme.colors.text,
    minWidth: 180,
    textAlign: "center",
  },
});