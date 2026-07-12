import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

import AppText from "@/components/common/AppText";
import { Theme } from "@/theme";
import { LinearGradient } from "expo-linear-gradient";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View>
          <AppText variant="h2" weight="semiBold">
            Hello{" "}
            <AppText
              variant="h2"
              weight="bold"
              style={styles.name}
            >
              Dimple!
            </AppText>
          </AppText>
        </View>

        <View style={styles.actions}>
          <Pressable style={styles.iconButton}>
            <Ionicons
              name="notifications-outline"
              size={24}
              color={Theme.colors.text}
            />
          </Pressable>

          <Pressable style={styles.iconButton}>
            <Ionicons
              name="settings-outline"
              size={24}
              color={Theme.colors.text}
            />
          </Pressable>
        </View>
      </View>

      <LinearGradient
  colors={[
    "transparent",
    "#D9D3FF",
    "transparent",
  ]}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 0 }}
  style={styles.divider}
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Theme.spacing.lg,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  divider: {
  height: 1,
  marginTop: Theme.spacing.lg,
  },

  actions: {
    flexDirection: "row",
    gap: Theme.spacing.md,
  },

  iconButton: {
    width: 42,
    height: 42,

    borderRadius: Theme.radius.full,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: Theme.colors.surface,
  },

  name: {
    color: Theme.colors.primaryLight,
  },
});