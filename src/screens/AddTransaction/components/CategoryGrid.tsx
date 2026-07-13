import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

import AppText from "@/components/common/AppText";
import { Theme } from "@/theme";

type TransactionType = "income" | "expense";

type Props = {
  type: TransactionType;
  selected: string;
  onSelect: (category: string) => void;
};

const expenseCategories = [
  { title: "Food", icon: "fast-food-outline" },
  { title: "Travel", icon: "car-outline" },
  { title: "Shopping", icon: "cart-outline" },
  { title: "Bills", icon: "flash-outline" },
  { title: "Rent", icon: "home-outline" },
  { title: "Entertainment", icon: "film-outline" },
  { title: "Health", icon: "fitness-outline" },
  { title: "Education", icon: "school-outline" },
] as const;

const incomeCategories = [
  { title: "Salary", icon: "wallet-outline" },
  { title: "Freelance", icon: "laptop-outline" },
  { title: "Investment", icon: "trending-up-outline" },
  { title: "Gift", icon: "gift-outline" },
  { title: "Interest", icon: "cash-outline" },
  { title: "Refund", icon: "refresh-outline" },
] as const;

export default function CategoryGrid({
  type,
  selected,
  onSelect,
}: Props) {
  const categories =
    type === "expense"
      ? expenseCategories
      : incomeCategories;

  return (
    <View style={styles.container}>
      <AppText
        variant="sm"
        weight="medium"
        style={styles.heading}
      >
        Category
      </AppText>

      <View style={styles.grid}>
        {categories.map((item) => {
          const active = selected === item.title;

          return (
            <Pressable
              key={item.title}
              onPress={() => onSelect(item.title)}
              style={[
                styles.card,
                active && styles.activeCard,
              ]}
            >
              <Ionicons
                name={item.icon}
                size={28}
                color={
                  active
                    ? "#FFFFFF"
                    : Theme.colors.primary
                }
              />

              <AppText
                variant="sm"
                weight="medium"
                style={[
                  styles.label,
                  active && styles.activeLabel,
                ]}
              >
                {item.title}
              </AppText>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Theme.spacing.xxl,
  },

  heading: {
    marginBottom: Theme.spacing.lg,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: Theme.spacing.md,
  },

  card: {
    width: "47%",
    backgroundColor: Theme.colors.surface,
    borderRadius: Theme.radius.xl,
    paddingVertical: Theme.spacing.lg,

    alignItems: "center",
    justifyContent: "center",

    borderWidth: 1,
    borderColor: Theme.colors.border,

    ...Theme.shadows.sm,
  },

  activeCard: {
    backgroundColor: Theme.colors.primary,
    borderColor: Theme.colors.primary,
  },

  label: {
    marginTop: Theme.spacing.sm,
    color: Theme.colors.text,
  },

  activeLabel: {
    color: "#FFFFFF",
  },
});