import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

import { Theme } from "@/theme";
import { View } from "react-native";


export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarShowLabel: false,

        tabBarActiveTintColor: Theme.colors.primary,

        tabBarInactiveTintColor: Theme.colors.textSecondary,

        tabBarStyle: {
          position: "absolute",

          height: 80,

          borderTopWidth: 0,

          backgroundColor: Theme.colors.surface,

          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,

          paddingBottom: 12,
          paddingTop: 12,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",

          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="home"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="transactions"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="swap-horizontal"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
  name="add"
  options={{
    title: "",
    tabBarIcon: () => (
      <View
        style={{
          width: 64,
          height: 64,
          borderRadius: 32,
          backgroundColor: Theme.colors.primary,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 28,

          shadowColor: Theme.colors.primary,
          shadowOffset: {
            width: 0,
            height: 8,
          },
          shadowOpacity: 0.35,
          shadowRadius: 12,

          elevation: 10,
        }}
      >
        <Ionicons
          name="add"
          size={32}
          color="#fff"
        />
      </View>
    ),
  }}
/>

      <Tabs.Screen
        name="budget"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="pie-chart"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="person"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}