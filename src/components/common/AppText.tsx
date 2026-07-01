import { Theme } from "@/theme";
import { StyleSheet, Text, type TextProps } from "react-native";

interface AppTextProps extends TextProps {
  variant?:
    | "xs"
    | "sm"
    | "body"
    | "lg"
    | "xl"
    | "h3"
    | "h2"
    | "h1";

  weight?:
    | "regular"
    | "medium"
    | "semiBold"
    | "bold";
}

export default function AppText({
  children,
  style,
  variant = "body",
  weight = "regular",
  ...props
}: AppTextProps) {
  return (
    <Text
      {...props}
      style={[
        styles.text,

        {
          fontSize: Theme.typography.size[variant],
          fontFamily: Theme.typography.fontFamily[weight],
        },

        style,
      ]}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: Theme.colors.text,
  },
});