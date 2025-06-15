import { IconBackBlack, IconBackWhite, IconDelete } from "@/icons/icon";
import tw from "@/lib/tailwind";
import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { useTheme } from "../context/ThemeProvider";

const favorite = () => {
  const { colorScheme } = useTheme();
  const items = [
    {
      id: "1",
      name: "Wren Blazer",
      price: "$200",
      image: "https://i.imgur.com/7GyV3pI.png",
    },
    {
      id: "2",
      name: "Wren Blazer",
      price: "$200",
      image: "https://i.imgur.com/7GyV3pI.png",
    },
    {
      id: "3",
      name: "Wren Blazer",
      price: "$200",
      image: "https://i.imgur.com/7GyV3pI.png",
    },
  ];
  return (
    <View style={tw`bg-base-light p-5 dark:bg-base-dark h-full`}>
      <View style={tw`flex-row justify-between items-center pl-6 my-5`}>
        <Pressable onPress={() => router.back()}>
          <View style={tw`flex-row gap-6 justify-center items-center`}>
            <SvgXml
              xml={colorScheme === "dark" ? IconBackWhite : IconBackBlack}
            />
            <Text
              style={tw`font-DegularDisplaySemibold text-base text-black dark:text-white`}
            >
              About us
            </Text>
          </View>
        </Pressable>
        <Text> </Text>
      </View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw`pt-4`}
        renderItem={({ item }) => (
          <View
            style={tw`flex-row items-center justify-between p-4 mb-3 bg-primary dark:bg-darkPrimary rounded-xl shadow-sm`}
          >
            <View style={tw`flex-row items-center`}>
              <Image
                source={{ uri: item.image }}
                style={tw`w-16 h-16 rounded-lg`}
                resizeMode="cover"
              />
              <View style={tw`ml-4`}>
                <Text
                  style={tw`text-base font-semibold text-black dark:text-primaryFF`}
                >
                  {item.name}
                </Text>
                <Text style={tw`text-sm text-darkText`}>{item.price}</Text>
              </View>
            </View>
            <Pressable>
              <View style={tw`bg-red-100 p-2 rounded-2xl`}>
                <SvgXml xml={IconDelete} />
              </View>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};

export default favorite;
