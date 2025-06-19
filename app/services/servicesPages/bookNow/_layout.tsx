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
    </Stack>
  );
};

export default BooknowRoot;
