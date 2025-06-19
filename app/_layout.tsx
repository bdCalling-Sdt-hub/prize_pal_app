import tw from "@/lib/tailwind";

import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { AlertNotificationRoot } from "react-native-alert-notification";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import ThemeProvider from "./context/ThemeProvider";

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  return (
    <ThemeProvider>
      <GestureHandlerRootView style={tw`flex-1  `}>
        <AlertNotificationRoot>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="index" />
            <Stack.Screen name="choose_r_s" />
            <Stack.Screen name="auth" />
            <Stack.Screen name="retailer" />
            <Stack.Screen name="favorite" />
            {/* <Stack.Screen name="editProfile" /> */}
          </Stack>
        </AlertNotificationRoot>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
