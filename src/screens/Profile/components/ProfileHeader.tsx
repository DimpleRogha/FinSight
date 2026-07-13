import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

import AppText from "@/components/common/AppText";
import { Theme } from "@/theme";

export default function ProfileHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Ionicons
          name="person"
          size={48}
          color={Theme.colors.primary}
        />
      </View>

      <AppText
        variant="h2"
        weight="bold"
        style={styles.name}
      >
        Profile
      </AppText>

      <AppText
        variant="sm"
        style={styles.subtitle}
      >
        Manage your preferences
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: Theme.spacing.xxl,
  },

  avatar: {
    width: 90,
    height: 90,

    borderRadius: 45,

    backgroundColor: Theme.colors.purpleBg,

    justifyContent: "center",
    alignItems: "center",
  },

  name: {
    marginTop: Theme.spacing.lg,
  },

  subtitle: {
    marginTop: Theme.spacing.sm,
    color: Theme.colors.textSecondary,
  },
});