import { useTheme } from "@/app/context/ThemeProvider";
import {
  ImgServiceFour,
  ImgServiceOne,
  ImgServiceThree,
  ImgServiceTwo,
} from "@/assets/image";
import {
  IconBackBlack,
  IconBackWhite,
  IconLoction,
  IconMessageBlack,
  IconMessageWhite,
  IconSTimerWhite,
} from "@/icons/icon";
import tw from "@/lib/tailwind";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import StarRating from "react-native-star-rating-widget";
import { SvgXml } from "react-native-svg";

const ServiceProviderProfile = () => {
  const { colorScheme } = useTheme();
  const [rating, setRating] = useState(4);

  const Images = [
    ImgServiceOne,
    ImgServiceTwo,
    ImgServiceThree,
    ImgServiceFour,
  ];

  return (
    <ScrollView style={tw`flex-1 bg-base-light dark:bg-base-dark px-5`}>
      {/* ================ head back bar ============== */}
      <View style={tw`flex-row justify-between items-center my-3`}>
        <View style={tw`flex-row gap-8 justify-center items-center`}>
          <Pressable onPress={() => router.back()} style={tw` `}>
            <SvgXml
              xml={colorScheme === "dark" ? IconBackWhite : IconBackBlack}
            />
          </Pressable>
          <Text
            style={tw`font-DegularDisplaySemibold text-lg text-black dark:text-white`}
          >
            Back
          </Text>
        </View>
        <Text></Text>
      </View>

      {/* ===================== service provider profile content ============= */}
      <View>
        <View
          style={tw` relative flex justify-center items-center border border-deepGreycc dark:border-deepGrey80 py-3 rounded-xl my-2 dark:bg-deepGrey50 gap-1`}
        >
          <Image style={tw`w-24 h-24 rounded-full`} source={ImgServiceOne} />
          <Text
            style={tw`font-DegularDisplayMedium text-xl text-black dark:text-white`}
          >
            ABC
          </Text>
          <View style={tw`flex-row justify-center items-center gap-2`}>
            <SvgXml xml={IconLoction} />
            <Text
              style={tw`font-DegularDisplayRegular text-base text-deepGrey50 dark:text-deepGreycc`}
            >
              Dhaka, bangladesh
            </Text>
          </View>
          <View style={tw`flex-row justify-start items-center gap-2`}>
            <View style={tw``}>
              <StarRating starSize={26} rating={rating} onChange={setRating} />
            </View>
            <Text
              style={tw`font-DegularDisplaySemibold text-lg text-black dark:text-white `}
            >
              4
              <Text
                style={tw`font-DegularDisplayRegular text-base text-black dark:text-white`}
              >
                (100)
              </Text>
            </Text>
          </View>
        </View>

        <View style={tw`absolute right-3 top-4 gap-2`}>
          <TouchableOpacity
            style={tw`bg-SPrimary justify-center items-center w-24 py-1.5 rounded-full`}
          >
            <Text style={tw`font-DegularDisplayMedium text-base text-white`}>
              Cleaner
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`bg-SPrimary w-24 py-1.5 justify-center items-center rounded-full`}
          >
            <Text style={tw`font-DegularDisplayMedium text-base text-white`}>
              Plumber
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          horizontal
          data={Images}
          keyExtractor={(_, index) => index.toLocaleString()}
          renderItem={({ item }: any) => (
            <View style={tw`mr-3`}>
              <Image style={tw`w-36 h-32 rounded-xl`} source={item} />
            </View>
          )}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />

        <View style={tw`flex-row justify-between items-center gap-2 my-3`}>
          <TouchableOpacity
            style={tw`border border-black flex-row justify-center items-center rounded-full py-3 w-44 gap-2`}
          >
            <SvgXml
              xml={colorScheme === "dark" ? IconMessageWhite : IconMessageBlack}
            />
            <Text
              style={tw`font-DegularDisplayMedium text-lg text-black dark:text-white`}
            >
              Message
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw` flex-row justify-center items-center bg-SPrimary rounded-full py-3 w-44 gap-2`}
          >
            <SvgXml xml={IconSTimerWhite} />
            <Text style={tw`font-DegularDisplayMedium text-lg text-white`}>
              Book
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ServiceProviderProfile;
