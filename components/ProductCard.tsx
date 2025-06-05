import { IconErow } from "@/icons/icon";
import tw from "@/lib/tailwind";
import { _HIGHT } from "@/utils/utils";
import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";

const ProductCard = ({
  item,
  containerStyle,
}: {
  containerStyle?: any;
  item: {
    id: string;
    image: string;
    title: string;
    brandName: string;
    price: string;
  };
}) => {
  console.log("====================================");
  console.log(item);
  console.log("====================================");
  return (
    <TouchableOpacity
      onPress={() => {
        router.push(`/product_details/${item?.id}`);
      }}
      style={[
        tw`bg-base-light dark:bg-darkPrimary   flex-1  rounded-3xl relative`,
        containerStyle,
      ]}
    >
      <View style={tw`p-1`}>
        <Image
          style={[
            tw`w-full rounded-3xl `,
            {
              height: _HIGHT * 0.17,
            },
          ]}
          source={{
            uri: item?.image,
          }}
        />
      </View>
      {/* card content */}
      <View style={tw` m-3`}>
        <View>
          <Text style={tw`font-medium  text-lg dark:text-primaryFF`}>
            {item?.title}
          </Text>
          <Text
            style={tw` text-base font-medium text-deepGrey50 dark:text-darkText`}
          >
            {item?.brandName}
          </Text>
        </View>
        <View style={tw`flex-row justify-between items-center`}>
          <Text style={tw`font-semibold text-xl  dark:text-primaryFF`}>
            {item?.price}
          </Text>
          <TouchableOpacity
            onPress={() => {
              router.push(`/product_details/${item?.id}`);
            }}
            style={tw`bg-primaryFF w-10 h-10  justify-center items-center rounded-xl`}
          >
            <SvgXml xml={IconErow} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
