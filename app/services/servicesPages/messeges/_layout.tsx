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
    </Stack>
  );
};

export default MessegeRoot;
