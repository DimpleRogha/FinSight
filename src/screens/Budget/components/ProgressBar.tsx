import { StyleSheet, View } from "react-native";

import { Theme } from "@/theme";

type Props = {
  progress: number;
};

export default function ProgressBar({
  progress,
}: Props) {
  const percentage = Math.min(progress, 100);

  function getColor() {
    if (percentage < 60) return Theme.colors.success;

    if (percentage < 90) return Theme.colors.warning;

    if (percentage <= 100) return Theme.colors.danger;

    return Theme.colors.primary;
  }

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.progress,
          {
            width: `${percentage}%`,
            backgroundColor: getColor(),
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 10,

    backgroundColor: Theme.colors.border,

    borderRadius: Theme.radius.full,

    overflow: "hidden",
  },

  progress: {
    height: "100%",

    borderRadius: Theme.radius.full,
  },
});