import { Platform } from "react-native";

export const Shadows = {
  sm: Platform.select({
    ios: {
      shadowColor: "#7C4DFF",
      shadowOpacity: 0.12,
      shadowRadius: 8,
      shadowOffset: {
        width: 0,
        height: 4,
      },
    },
    android: {
      elevation: 3,
    },
  }),

  md: Platform.select({
    ios: {
      shadowColor: "#7C4DFF",
      shadowOpacity: 0.2,
      shadowRadius: 16,
      shadowOffset: {
        width: 0,
        height: 8,
      },
    },
    android: {
      elevation: 6,
    },
  }),
};