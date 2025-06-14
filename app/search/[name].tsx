import ProductCard from "@/components/ProductCard";
import tw from "@/lib/tailwind";
import { router } from "expo-router";
import { useSearchParams } from "expo-router/build/hooks";
import React, { useEffect, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

import Cate from "@/assets/data/caretory.json";
import { IconBackBlack, IconBackWhite } from "@/icons/icon";
import { SvgXml } from "react-native-svg";
import { useTheme } from "../context/ThemeProvider";

const Details = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const [catagoty, setCatagoty] = useState<(typeof Cate)[0] | null>(null);

  const { colorScheme } = useTheme();

  useEffect(() => {
    const catagotyProduct = Cate.find((item) => item.name == name);
    if (catagotyProduct?.id) {
      setCatagoty(catagotyProduct);
    }
  }, [name]);

  return (
    <View style={tw`bg-base-light dark:bg-base-dark  h-full w-full`}>
      {/*  ------------ bottom header ------------------- */}
      <View style={tw`flex-row justify-between items-center pl-6 my-5`}>
        <Pressable onPress={() => router.back()} style={tw` `}>
          <View style={tw`flex-row gap-6 justify-center items-center`}>
            <SvgXml
              xml={colorScheme === "dark" ? IconBackWhite : IconBackBlack}
            />
            <Text
              style={tw`font-DegularDisplaySemibold text-base text-black dark:text-white`}
            >
              {name}
            </Text>
          </View>
        </Pressable>
        <Text> </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw`px-4 gap-3 pb-8 `}
        columnWrapperStyle={tw`justify-between gap-3 `}
        numColumns={2}
        data={catagoty?.product}
        renderItem={({ item }) => <ProductCard item={item as any} />}
      />
    </View>
  );
};

export default Details;
