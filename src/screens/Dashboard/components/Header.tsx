import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

import AppText from "@/components/common/AppText";
import { Theme } from "@/theme";

export default function Header() {
  return (
    <View style={styles.container}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Theme.spacing.lg,

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",
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