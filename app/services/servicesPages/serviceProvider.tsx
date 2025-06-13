import { useTheme } from "@/app/context/ThemeProvider";
import {
  ImgServiceFour,
  ImgServiceOne,
  ImgServiceThree,
  ImgServiceTwo,
} from "@/assets/image";
import { IconBackBlack, IconBackWhite } from "@/icons/icon";
import tw from "@/lib/tailwind";
import { router } from "expo-router";
import React from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";

const ServiceProvider = () => {
  const { colorScheme } = useTheme();

  const categoryData = [
    {
      id: 1,
      title: "Abc",
      categoryName: "Cleaner",
      location: "Dhaka, Bangladesh",
      ratting: 4,
      providerImag:
        "https://i.ibb.co/tP3ZhqjQ/5422619320e6bf2da2c5dec6a0480ccbb170a029.jpg",
      image: [ImgServiceOne, ImgServiceTwo, ImgServiceThree, ImgServiceFour],
      price: 150,
    },
    {
      id: 2,
      title: "ADF",
      categoryName: "Cleaner",
      location: "Dhaka, Bangladesh",
      ratting: 3,
      providerImage:
        "https://i.ibb.co/xSV1VSJ4/82a52628b7997151bc265d871ecb35769953a63e.jpg",
      image: [ImgServiceOne, ImgServiceTwo, ImgServiceThree, ImgServiceFour],
      price: 260,
    },
    {
      id: 3,
      title: "XYZ",
      categoryName: "Cleaner",
      location: "Dhaka, Bangladesh",
      ratting: 3,
      providerImage:
        "https://i.ibb.co/vxv26Pwk/ecd8c7b1e23858e2e5e4ed8b975de6097e81fff2.jpg",
      image: [ImgServiceOne, ImgServiceTwo, ImgServiceThree, ImgServiceFour],
      price: 152,
    },
    {
      id: 4,
      title: "123",
      categoryName: "Cleaner",
      location: "Dhaka, Bangladesh",
      ratting: 5,
      providerImage:
        "https://i.ibb.co/JFqLGdV2/e62f6ba9df0fa31493fbab20cf281a57d4a22b55.jpg",
      image: [ImgServiceOne, ImgServiceTwo, ImgServiceThree, ImgServiceFour],
      price: 542,
    },
    {
      id: 5,
      title: "JKJ",
      categoryName: "Cleaner",
      location: "Dhaka, Bangladesh",
      ratting: 4,
      providerImage: "",
      image: [ImgServiceOne, ImgServiceTwo, ImgServiceThree, ImgServiceFour],
      price: 480,
    },
  ];

  const HeaderContent = () => {
    return (
      <View style={tw`flex-row justify-between items-center my-3`}>
        <View style={tw`flex-row gap-8 justify-center items-center`}>
          <Pressable onPress={() => router.back()} style={tw` `}>
            <SvgXml
              xml={colorScheme === "dark" ? IconBackWhite : IconBackBlack}
            />
          </Pressable>
          <Text
            style={tw`font-DegularDisplaySemibold text-base text-black dark:text-white`}
          >
            {/* =-=============  this is a dynamic category name ================== */}
            Cleaners
          </Text>
        </View>
        <Text></Text>
      </View>
    );
  };

  const RenderItem = () => {
    return (
      <View>
        <Text>;alsdkf;</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={categoryData}
      ListHeaderComponent={HeaderContent}
      keyExtractor={(item) => item.id.toLocaleString()}
      renderItem={RenderItem}
    />
  );
};

export default ServiceProvider;
