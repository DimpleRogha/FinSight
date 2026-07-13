import { UserProvider } from "@/context/UserContext";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { FinanceProvider } from "@/context/FinanceContext";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <UserProvider>
      <FinanceProvider>
        <StatusBar style="dark" />

        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="add-transaction"
            options={{
              presentation: "modal",
              headerShown: false,
            }}
          />
        </Stack>
      </FinanceProvider>
    </UserProvider>
  );
}