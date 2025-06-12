import { Stack } from "expo-router";
import React from "react";

const settingsLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="setting" />
    </Stack>
  );
};

export default settingsLayout;
