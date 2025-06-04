import { useTheme } from "@/app/context/ThemeProvider";
import { IconBackBlack, IconBackWhite } from "@/icons/icon";
import tw from "@/lib/tailwind";
import { router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";

const chatList = () => {
  const colorScheme = useTheme();
  return (
    <View style={tw`flex-1 bg-base-light dark:bg-base-dark`}>
      <View style={tw`flex-row justify-between items-center`}>
        <View style={tw`flex-row gap-5 justify-center items-center`}>
          <Pressable
            onPress={() => router.back()}
            style={tw`w-14 h-14 flex justify-center items-center rounded-full `}
          >
            <SvgXml
              xml={colorScheme === "dark" ? IconBackWhite : IconBackBlack}
            />
          </Pressable>
          <Text
            style={tw`font-DegularDisplaySemibold text-base text-black dark:text-white`}
          >
            Chat with providers
          </Text>
        </View>
        <Text> </Text>
      </View>
      <Text>chatList</Text>
    </View>
  );
};

export default chatList;
