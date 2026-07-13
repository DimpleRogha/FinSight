import { Alert, Pressable, StyleSheet } from "react-native";

import AppText from "@/components/common/AppText";
import { Theme } from "@/theme";

export default function SaveProfileButton() {
  return (
    <Pressable
      style={styles.button}
      onPress={() =>
        Alert.alert(
          "Saved",
          "Profile updated successfully."
        )
      }
    >
      <AppText
        weight="bold"
        style={styles.text}
      >
        Save Changes
      </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: Theme.spacing.xxl,

    backgroundColor: Theme.colors.primary,

    paddingVertical: 18,

    borderRadius: Theme.radius.xl,

    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "#FFFFFF",
  },
});