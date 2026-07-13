import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

import AppText from "@/components/common/AppText";
import { Theme } from "@/theme";

type Props = {
  date: Date;
  onChange: (date: Date) => void;
};

export default function DatePickerCard({
  date,
  onChange,
}: Props) {
  const formattedDate = date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <View style={styles.container}>
      <AppText
        variant="sm"
        weight="medium"
        style={styles.heading}
      >
        Date
      </AppText>

      <Pressable
        style={styles.card}
        onPress={() => {
          // We'll connect the native date picker next.
        }}
      >
        <View style={styles.left}>
          <View style={styles.iconContainer}>
            <Ionicons
              name="calendar-outline"
              size={22}
              color={Theme.colors.primary}
            />
          </View>

          <View>
            <AppText variant="body" weight="semiBold">
              {formattedDate}
            </AppText>

            <AppText
              variant="xs"
              style={styles.subtitle}
            >
              Tap to change
            </AppText>
          </View>
        </View>

        <Ionicons
          name="chevron-forward"
          size={20}
          color={Theme.colors.textSecondary}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Theme.spacing.xxl,
  },

  heading: {
    marginBottom: Theme.spacing.md,
  },

  card: {
    backgroundColor: Theme.colors.surface,

    borderRadius: Theme.radius.xl,

    borderWidth: 1,
    borderColor: Theme.colors.border,

    padding: Theme.spacing.lg,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    ...Theme.shadows.sm,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconContainer: {
    width: 46,
    height: 46,

    borderRadius: Theme.radius.full,

    backgroundColor: Theme.colors.primaryLight,

    justifyContent: "center",
    alignItems: "center",

    marginRight: Theme.spacing.md,
  },

  subtitle: {
    marginTop: 2,
    color: Theme.colors.textSecondary,
  },
});