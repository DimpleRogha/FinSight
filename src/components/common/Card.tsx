import {
    StyleSheet,
    View,
    type ViewProps,
} from "react-native";

import { Theme } from "@/theme";

export default function Card({
  children,
  style,
  ...props
}: ViewProps) {
  return (
    <View
      {...props}
      style={[
        styles.card,
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Theme.colors.surface,

    padding: Theme.spacing.lg,

    borderRadius: Theme.radius.xl,

    ...Theme.shadows.md,
  },
});