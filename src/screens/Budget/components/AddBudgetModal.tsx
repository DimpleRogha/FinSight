import { useState } from "react";
import {
    Modal,
    Pressable,
    StyleSheet,
    TextInput,
    View,
} from "react-native";

import AppText from "@/components/common/AppText";
import { Theme } from "@/theme";

type Props = {
  visible: boolean;

  onClose: () => void;

  onSave: (
    category: string,
    limit: number
  ) => void;
};

export default function AddBudgetModal({
  visible,
  onClose,
  onSave,
}: Props) {
  const [category, setCategory] = useState("");
  const categories = [
    "Food",
    "Travel",
    "Shopping",
    "Bills",
    "Rent",
    "Entertainment",
    "Health",
    "Education",
  ];
  const [limit, setLimit] = useState("");

  function handleSave() {
    if (!category || !limit) return;

    onSave(category, Number(limit));

    setCategory("");
    setLimit("");

    onClose();
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
    >
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <AppText
            variant="h3"
            weight="bold"
          >
            Add Budget
          </AppText>

            <AppText
            variant="sm"
            weight="medium"
            style={styles.heading}
            >
            Category
            </AppText>

            <View style={styles.categoryGrid}>
            {categories.map((item) => {
                const selected = category === item;

                return (
                <Pressable
                    key={item}
                    onPress={() => setCategory(item)}
                    style={[
                    styles.categoryChip,
                    selected && styles.selectedChip,
                    ]}
                >
                    <AppText
                    variant="sm"
                    weight="medium"
                    style={[
                        styles.categoryText,
                        selected && styles.selectedText,
                    ]}
                    >
                    {item}
                    </AppText>
                </Pressable>
                );
            })}
            </View>

          <TextInput
            placeholder="Budget Amount"

            value={limit}

            onChangeText={setLimit}

            keyboardType="numeric"

            style={styles.input}
          />

          <Pressable
            style={styles.button}
            onPress={handleSave}
          >
            <AppText
              weight="bold"
              style={styles.buttonText}
            >
              Save Budget
            </AppText>
          </Pressable>

          <Pressable
            onPress={onClose}
            style={styles.cancel}
          >
            <AppText>Cancel</AppText>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,

    justifyContent: "flex-end",

    backgroundColor: "rgba(0,0,0,0.35)",
  },

  modal: {
    backgroundColor: Theme.colors.surface,

    borderTopLeftRadius: Theme.radius.xxl,

    borderTopRightRadius: Theme.radius.xxl,

    padding: Theme.spacing.xl,
  },

  input: {
    marginTop: Theme.spacing.lg,

    backgroundColor: Theme.colors.background,

    padding: Theme.spacing.md,

    borderRadius: Theme.radius.lg,

    borderWidth: 1,

    borderColor: Theme.colors.border,
  },

  button: {
    marginTop: Theme.spacing.xl,

    backgroundColor: Theme.colors.primary,

    paddingVertical: 16,

    borderRadius: Theme.radius.xl,

    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
  },

  cancel: {
    marginTop: Theme.spacing.md,

    alignItems: "center",
  },
  heading: {
  marginTop: Theme.spacing.lg,
  marginBottom: Theme.spacing.md,
},

categoryGrid: {
  flexDirection: "row",
  flexWrap: "wrap",
  gap: Theme.spacing.sm,
},

categoryChip: {
  paddingHorizontal: Theme.spacing.lg,
  paddingVertical: Theme.spacing.sm,

  borderRadius: Theme.radius.full,

  backgroundColor: Theme.colors.background,

  borderWidth: 1,
  borderColor: Theme.colors.border,
},

selectedChip: {
  backgroundColor: Theme.colors.primary,
  borderColor: Theme.colors.primary,
},

categoryText: {
  color: Theme.colors.text,
},

selectedText: {
  color: "#FFFFFF",
},
});