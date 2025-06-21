import tw from "@/lib/tailwind";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const loginSignUp = () => {
  return (
    <View style={tw`bg-base-light dark:bg-base-dark flex-1 justify-center`}>
      <View style={tw`p-5`}>
        <Text
          style={tw`text-center text-2xl font-semibold dark:text-primary p-3 font-PoppinsSemiBold mb-2`}
        >
          You haven’t created an account yet!
        </Text>
        <Text
          style={tw`text-center text-base  dark:text-primary font-PoppinsLight mb-8`}
        >
          Please create an account to continue
        </Text>

        <TouchableOpacity
          style={tw`bg-black dark:bg-primary rounded-full w-full py-3 mb-4`}
          onPress={() => router.push("/auth/login")}
        >
          <Text
            style={tw`text-white dark:text-primaryBlack text-center font-PoppinsSemiBold text-base font-semibold`}
          >
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`border border-gray-300 rounded-full w-full py-3`}
          onPress={() => router.push("/auth/register")}
        >
          <Text
            style={tw`text-black dark:text-primary text-center font-PoppinsSemiBold text-base font-semibold`}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default loginSignUp;
