import { Stack } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="changePass" />
      <Stack.Screen name="Setting" />
    </Stack>
  );
};

export default _layout;
