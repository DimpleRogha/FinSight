import { Pressable, StyleSheet, View } from "react-native";

import AppText from "@/components/common/AppText";
import { Theme } from "@/theme";

type Filter = "All" | "Income" | "Expense";

type Props = {
  selected: Filter;
  onSelect: (filter: Filter) => void;
};

const filters: Filter[] = ["All", "Income", "Expense"];

export default function FilterChips({
  selected,
  onSelect,
}: Props) {
  return (
    <View style={styles.container}>
      {filters.map((filter) => {
        const active = selected === filter;

        return (
          <Pressable
            key={filter}
            onPress={() => onSelect(filter)}
            style={[
              styles.chip,
              active && styles.activeChip,
            ]}
          >
            <AppText
              variant="sm"
              weight="medium"
              style={[
                styles.text,
                active && styles.activeText,
              ]}
            >
              {filter}
            </AppText>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: Theme.spacing.lg,
    gap: Theme.spacing.sm,
  },

  chip: {
    paddingHorizontal: Theme.spacing.lg,
    paddingVertical: Theme.spacing.sm,

    borderRadius: Theme.radius.full,

    backgroundColor: Theme.colors.surface,

    borderWidth: 1,
    borderColor: Theme.colors.border,
  },

  activeChip: {
    backgroundColor: Theme.colors.primary,
    borderColor: Theme.colors.primary,
  },

  text: {
    color: Theme.colors.textSecondary,
  },

  activeText: {
    color: "#FFFFFF",
  },
});