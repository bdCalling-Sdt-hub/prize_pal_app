import { Stack } from "expo-router";
import React from "react";

const MessegeRoot = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="chatList" />
      <Stack.Screen name="messeging" />
    </Stack>
  );
};

export default MessegeRoot;
