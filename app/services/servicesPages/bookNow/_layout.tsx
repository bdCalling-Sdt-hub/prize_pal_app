import { Stack } from "expo-router";
import React from "react";

const BooknowRoot = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="zepcode" />
      <Stack.Screen name="redioInput" />
      <Stack.Screen name="buttonType" />
      <Stack.Screen name="calendarType" />
    </Stack>
  );
};

export default BooknowRoot;
