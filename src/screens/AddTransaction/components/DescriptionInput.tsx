import { StyleSheet, TextInput, View } from "react-native";

import AppText from "@/components/common/AppText";
import { Theme } from "@/theme";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function DescriptionInput({
  value,
  onChange,
}: Props) {
  return (
    <View style={styles.container}>
      <AppText
        variant="sm"
        weight="medium"
        style={styles.heading}
      >
        Description
      </AppText>

      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder="What was this transaction for?"
        placeholderTextColor={Theme.colors.textMuted}
        style={styles.input}
        multiline
        numberOfLines={3}
        textAlignVertical="top"
        maxLength={100}
      />

      <AppText variant="xs" style={styles.counter}>
        {value.length}/100
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Theme.spacing.xxl,
  },

  heading: {
    marginBottom: Theme.spacing.md,
  },

  input: {
    minHeight: 110,

    backgroundColor: Theme.colors.surface,

    borderRadius: Theme.radius.xl,

    borderWidth: 1,
    borderColor: Theme.colors.border,

    paddingHorizontal: Theme.spacing.lg,
    paddingVertical: Theme.spacing.md,

    fontFamily: Theme.typography.fontFamily.regular,
    fontSize: Theme.typography.size.body,

    color: Theme.colors.text,

    ...Theme.shadows.sm,
  },

  counter: {
    alignSelf: "flex-end",
    marginTop: Theme.spacing.sm,
    color: Theme.colors.textMuted,
  },
});