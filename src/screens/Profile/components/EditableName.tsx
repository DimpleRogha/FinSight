import { StyleSheet, TextInput, View } from "react-native";

import AppText from "@/components/common/AppText";
import { Theme } from "@/theme";

type Props = {
  name: string;
  onChange: (text: string) => void;
};

export default function EditableName({
  name,
  onChange,
}: Props) {
  return (
    <View style={styles.container}>
      <AppText
        variant="sm"
        weight="medium"
      >
        Name
      </AppText>

      <TextInput
        value={name}
        onChangeText={onChange}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Theme.spacing.xxl,
  },

  input: {
    marginTop: Theme.spacing.md,

    backgroundColor: Theme.colors.surface,

    padding: Theme.spacing.lg,

    borderRadius: Theme.radius.xl,

    borderWidth: 1,
    borderColor: Theme.colors.border,

    fontFamily: Theme.typography.fontFamily.regular,

    color: Theme.colors.text,
  },
});