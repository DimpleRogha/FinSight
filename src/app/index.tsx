import AppText from "@/components/common/AppText";
import { View } from "react-native";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppText variant="h1" weight="bold">
        FinSight
      </AppText>

      <AppText>
        Your finance companion
      </AppText>
    </View>
  );
}