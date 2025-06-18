import tw from "@/lib/tailwind";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link, router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../context/ThemeProvider";

const successfullMassge = () => {
  const { colorScheme } = useTheme();
  return (
    <View style={tw` dark:bg-base-dark h-full flex-1 justify-center relative`}>
      <View
        style={tw`w-[36px] h-[36px] dark:bg-deepGrey bg-primary200 m-4 absolute z-10 top-0 rounded-md  flex items-center justify-center`}
      >
        <Link href="/auth/set_new_password">
          <AntDesign
            name="left"
            size={24}
            color={colorScheme === "dark" ? "white" : "black"}
          />
        </Link>
      </View>

      <View style={tw`flex justify-center items-center mx-5`}>
        <Image
          style={tw`w-60 h-[278px]  z-10`}
          source={require("@/assets/images/passChanged.png")}
        />
        <TouchableOpacity
          style={tw`bg-primaryBlack dark:bg-primaryFF w-full rounded-full mt-9`}
          onPress={() => {
            router.replace("/auth/login");
          }}
        >
          <Text
            style={tw`text-primaryFF dark:text-primaryBlack text-center font-PoppinsBold text-lg py-[14px] `}
          >
            Back to login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default successfullMassge;
