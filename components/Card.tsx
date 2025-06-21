import { IconErow, love } from "@/icons/icon";
import tw from "@/lib/tailwind";
import { _HIGHT, _Width } from "@/utils/utils";
import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";

const Card = ({ item }: any) => {
  return (
    <View>
      {/* card view all */}
      <View style={tw`flex-row justify-between my-5`}>
        <View style={tw`flex-row items-center gap-3`}>
          <Image
            style={tw`w-14 h-14 rounded-full`}
            source={{ uri: item.avater }}
          ></Image>

          <View>
            <Text
              style={tw`font-semibold text-lg font-PoppinsMedium dark:text-primaryFF`}
            >
              {item.category}
            </Text>
            <Text
              style={tw`font-normal text-base font-Poppins text-deepGrey dark:text-primaryFF`}
            >
              {item.productsCount} products
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={tw`py-[8px] px-[16px] border dark:border-primaryFF flex items-center justify-center rounded-full border-deepGrey w-[90px]`}
        >
          <Text
            style={tw`font-normal text-base font-Poppins dark:text-primaryFF`}
          >
            See all
          </Text>
        </TouchableOpacity>
      </View>
      {/* card show  */}

      <View style={tw`flex-row gap-1 pb-3 justify-between items-center`}>
        {item.products.map((cardItem: any) => (
          <TouchableOpacity
            onPress={() => {
              router.push(`/product_details/${item?.id}`);
            }}
            key={cardItem.id}
            style={[
              tw`bg-primary dark:bg-darkPrimary  rounded-3xl relative`,
              {
                width: _Width * 0.44,
              },
            ]}
          >
            <View style={tw`p-1.`}>
              <Image
                style={[
                  tw`w-full rounded-3xl `,
                  {
                    height: _HIGHT * 0.17,
                  },
                ]}
                source={{ uri: cardItem.image }}
              />
            </View>
            {/* love icon */}
            <TouchableOpacity
              style={tw`bg-primaryFF absolute right-3 top-3 w-10 h-10 justify-center items-center rounded-xl`}
            >
              <SvgXml xml={love} />
            </TouchableOpacity>
            {/* card content */}
            <View style={tw`p-3`}>
              <View>
                <Text
                  style={tw`font-semibold text-lg font-PoppinsSemiBold dark:text-primaryFF text-black`}
                >
                  {cardItem.name}
                </Text>
              </View>
              <View style={tw`flex-row justify-between items-center `}>
                <Text
                  style={tw`font-normal text-lg font-PoppinsLight dark:text-primaryFF text-deepGrey`}
                >
                  {cardItem.price}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    router.push(`/product_details/${item?.id}`);
                  }}
                  style={tw`bg-primaryFF w-10 h-10 justify-center items-center rounded-xl`}
                >
                  <SvgXml xml={IconErow} />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
export default Card;
