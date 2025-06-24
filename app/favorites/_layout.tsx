import { Stack } from "expo-router";

const favoritesLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="favorite" />
    </Stack>
  );
};

export default favoritesLayout;
