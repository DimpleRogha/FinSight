import {
    SafeAreaView,
    StyleSheet,
    type ViewProps,
} from "react-native";

import { Theme } from "@/theme";

export default function Screen({
  children,
  style,
}: ViewProps) {
  return (
    <SafeAreaView
      style={[
        styles.container,
        style,
      ]}
    >
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: Theme.colors.background,

    paddingHorizontal: Theme.spacing.lg,

    paddingTop: Theme.spacing.lg,
  },
});