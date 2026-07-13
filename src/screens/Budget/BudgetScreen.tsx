import { useState } from "react";
import { Pressable, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AppText from "@/components/common/AppText";
import { useFinance } from "@/hooks/useFinance";
import { Theme } from "@/theme";

import AddBudgetModal from "./components/AddBudgetModal";
import BudgetCard from "./components/BudgetCard";

export default function BudgetScreen() {
  const {
    budgets,
    addBudget,
    updateBudget,
  } = useFinance();

  const [showModal, setShowModal] =
    useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <AppText
        variant="h2"
        weight="bold"
        style={styles.title}
      >
        Monthly Budget
      </AppText>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {budgets.map((budget) => (
          <BudgetCard
            key={budget.id}
            budget={budget}
            onEdit={(budget) => {
              console.log("Edit:", budget);
            }}
          />
        ))}

        <Pressable
          style={styles.addButton}
          onPress={() => setShowModal(true)}
        >
          <AppText
            weight="bold"
            style={styles.buttonText}
          >
            + Add Budget
          </AppText>
        </Pressable>
      </ScrollView>

      <AddBudgetModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        onSave={(category, limit) => {
          const existing = budgets.find(
            (budget) =>
              budget.category === category
          );

          if (existing) {
            updateBudget(existing.id, limit);
          } else {
            addBudget({
              id: Date.now(),
              category,
              limit,
            });
          }
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
    padding: Theme.spacing.lg,
  },

  title: {
    marginBottom: Theme.spacing.xl,
  },

  addButton: {
    marginTop: Theme.spacing.lg,
    marginBottom: Theme.spacing.xxl,

    paddingVertical: 16,

    borderRadius: Theme.radius.xl,

    backgroundColor: Theme.colors.primary,

    justifyContent: "center",
    alignItems: "center",

    ...Theme.shadows.md,
  },

  buttonText: {
    color: "#FFFFFF",
  },
});