import categories from "@/assets/data/caretory.json";
import { IconSearch } from "@/icons/icon";
import tw from "@/lib/tailwind";
import { _HIGHT } from "@/utils/utils";
import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SvgXml } from "react-native-svg";

const Page = () => {
  return (
    <View style={tw`bg-primaryFF dark:bg-base-dark   h-full `}>
      <View
        style={tw`bg-primary mt-8 mb-2 dark:bg-darkPrimary mx-3 rounded-full flex-row items-center pl-6`}
      >
        <SvgXml xml={IconSearch} />
        <TextInput
          style={tw`h-[60px] flex-1  pl-3`}
          placeholder="Search"
          placeholderTextColor="text-deepGrey"
          // value={}
        />
      </View>

      <View style={tw` px-2`}>
        {/* catagory card */}

        <FlatList
          data={categories}
          keyExtractor={(item): any => item.id}
          numColumns={2}
          contentContainerStyle={tw`py-2`}
          columnWrapperStyle={tw` justify-between mb-4`}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                router.push(`/search/${item?.name}`);
              }}
              className=" justify-center items-center"
            >
              {item?.image && (
                <Image
                  source={{
                    uri: item?.image,
                  }}
                  style={[
                    tw` aspect-video rounded-2xl `,
                    {
                      height: _HIGHT * 0.119,
                    },
                  ]}
                />
              )}
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Page;
