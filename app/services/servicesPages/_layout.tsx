import { Stack } from "expo-router";
import React from "react";

const ServicesPageRoot = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="editServicesProfile" />
      <Stack.Screen name="notificationServices" />
      <Stack.Screen name="bookNowCategory" />
      <Stack.Screen name="bookNow" />
    </Stack>
  );
};

export default ServicesPageRoot;
