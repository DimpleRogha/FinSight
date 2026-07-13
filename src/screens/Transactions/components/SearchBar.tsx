import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";

import { Theme } from "@/theme";

type Props = {
  value: string;
  onChange: (text: string) => void;
};

export default function SearchBar({
  value,
  onChange,
}: Props) {
  return (
    <View style={styles.container}>
      <Ionicons
        name="search"
        size={22}
        color={Theme.colors.textSecondary}
      />

      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder="Search transactions..."
        placeholderTextColor={Theme.colors.textMuted}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: Theme.colors.surface,

    borderRadius: Theme.radius.full,

    paddingHorizontal: Theme.spacing.lg,

    height: 54,

    borderWidth: 1,
    borderColor: Theme.colors.border,

    ...Theme.shadows.sm,
  },

  input: {
    flex: 1,

    marginLeft: Theme.spacing.md,

    fontSize: Theme.typography.size.body,
    fontFamily: Theme.typography.fontFamily.regular,

    color: Theme.colors.text,
  },
});