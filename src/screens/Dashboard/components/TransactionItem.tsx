import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

import AppText from "@/components/common/AppText";
import { Theme } from "@/theme";

interface TransactionItemProps {
  title: string;
  category: string;
  amount: number;
  income?: boolean;
  icon: keyof typeof Ionicons.glyphMap;
}

export default function TransactionItem({
  title,
  category,
  amount,
  income = false,
  icon,
}: TransactionItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View
          style={[
            styles.iconContainer,
            {
              backgroundColor: income
                ? Theme.colors.greenBg
                : Theme.colors.pinkBg,
            },
          ]}
        >
          <Ionicons
            name={icon}
            size={20}
            color={
              income
                ? Theme.colors.income
                : Theme.colors.expense
            }
          />
        </View>

        <View>
          <AppText variant="body" weight="semiBold">
            {title}
          </AppText>

          <AppText
            variant="sm"
            style={styles.category}
          >
            {category}
          </AppText>
        </View>
      </View>

      <AppText
        variant="body"
        weight="bold"
        style={{
          color: income
            ? Theme.colors.income
            : Theme.colors.expense,
        }}
      >
        {income ? "+" : "-"}₹
        {amount.toLocaleString("en-IN")}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingVertical: Theme.spacing.md,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconContainer: {
    width: 48,
    height: 48,

    borderRadius: Theme.radius.full,

    justifyContent: "center",
    alignItems: "center",

    marginRight: Theme.spacing.md,
  },

  category: {
    color: Theme.colors.textSecondary,
    marginTop: 2,
  },
});