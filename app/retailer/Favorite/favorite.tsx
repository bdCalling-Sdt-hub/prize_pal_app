import { IconDelete } from "@/icons/icon";
import BackWithComponent from "@/lib/backHeader/BackWithCoponent";
import tw from "@/lib/tailwind";
import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";

const favorite = () => {
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
      <BackWithComponent
        onPress={() => {
          router.back();
        }}
        togather
        title={"Terns and conditions"}
      />
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
