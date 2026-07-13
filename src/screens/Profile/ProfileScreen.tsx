import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import EditableName from "./components/EditableName";
import ProfileHeader from "./components/ProfileHeader";
import SaveProfileButton from "./components/SaveProfileButton";
import ThemeToggle from "./components/ThemeToggle";

import { useUser } from "@/hooks/useUser";
import { Theme } from "@/theme";

export default function ProfileScreen() {
  const { name, setName } = useUser();

  const [darkMode, setDarkMode] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <ProfileHeader />

        <EditableName
          name={name}
          onChange={setName}
        />

        <ThemeToggle
          enabled={darkMode}
          onChange={setDarkMode}
        />

        <SaveProfileButton />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },

  content: {
    padding: Theme.spacing.lg,
    paddingBottom: 100,
  },
});