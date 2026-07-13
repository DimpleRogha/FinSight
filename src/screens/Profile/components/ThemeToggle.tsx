import { StyleSheet, Switch, View } from "react-native";

import AppText from "@/components/common/AppText";
import { Theme } from "@/theme";

type Props = {
  enabled: boolean;
  onChange: (value: boolean) => void;
};

export default function ThemeToggle({
  enabled,
  onChange,
}: Props) {
  return (
    <View style={styles.card}>
      <View>
        <AppText
          variant="body"
          weight="semiBold"
        >
          Dark Mode
        </AppText>

        <AppText
          variant="xs"
          style={styles.subtitle}
        >
          Switch between light and dark theme
        </AppText>
      </View>

      <Switch
        value={enabled}
        onValueChange={onChange}
        trackColor={{
          false: "#D1D5DB",
          true: Theme.colors.primary,
        }}
        thumbColor="#FFFFFF"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Theme.colors.surface,

    borderRadius: Theme.radius.xl,

    padding: Theme.spacing.lg,

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",

    ...Theme.shadows.sm,
  },

  subtitle: {
    marginTop: 2,
    color: Theme.colors.textSecondary,
  },
});