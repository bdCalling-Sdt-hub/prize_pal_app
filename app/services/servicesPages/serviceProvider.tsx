import { useTheme } from "@/app/context/ThemeProvider";
import {
  ImgProviderFour,
  ImgProviderOne,
  ImgProviderThree,
  ImgProviderTwo,
  ImgServiceFour,
  ImgServiceOne,
  ImgServiceThree,
  ImgServiceTwo,
} from "@/assets/image";
import {
  IconBackBlack,
  IconBackWhite,
  IconRightArrowWhite,
} from "@/icons/icon";
import tw from "@/lib/tailwind";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import StarRating from "react-native-star-rating-widget";
import { SvgXml } from "react-native-svg";

const ServiceProvider = () => {
  const { colorScheme } = useTheme();
  const [rating, setRating] = useState(4);

  interface IPropsItem {
    id: number;
    title: string;
    categoryName: string;
    location: string;
    ratting: number;
    providerImage: any;
    image: any;
    price: number;
  }

  const categoryData = [
    {
      id: 1,
      title: "Abc",
      categoryName: "Cleaner",
      location: "Dhaka, Bangladesh",
      ratting: 4,
      providerImage: ImgProviderOne,
      image: [ImgServiceOne, ImgServiceTwo, ImgServiceThree, ImgServiceFour],
      price: 150,
    },
    {
      id: 2,
      title: "ADF",
      categoryName: "Cleaner",
      location: "Dhaka, Bangladesh",
      ratting: 3,
      providerImage: ImgProviderTwo,
      image: [ImgServiceOne, ImgServiceTwo, ImgServiceThree, ImgServiceFour],
      price: 260,
    },
    {
      id: 3,
      title: "XYZ",
      categoryName: "Cleaner",
      location: "Dhaka, Bangladesh",
      ratting: 3,
      providerImage: ImgProviderThree,
      image: [ImgServiceOne, ImgServiceTwo, ImgServiceThree, ImgServiceFour],
      price: 152,
    },
    {
      id: 4,
      title: "123",
      categoryName: "Cleaner",
      location: "Dhaka, Bangladesh",
      ratting: 5,
      providerImage: ImgProviderFour,
      image: [ImgServiceOne, ImgServiceTwo, ImgServiceThree, ImgServiceFour],
      price: 542,
    },
    {
      id: 5,
      title: "JKJ",
      categoryName: "Cleaner",
      location: "Dhaka, Bangladesh",
      ratting: 4,
      providerImage: ImgProviderThree,
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
            style={tw`font-DegularDisplaySemibold text-lg text-black dark:text-white`}
          >
            {/* =-=============  this is a dynamic category name ================== */}
            Cleaners
          </Text>
        </View>
        <Text></Text>
      </View>
    );
  };

  const RenderItem = ({ item }: { item: IPropsItem }) => {
    return (
      <Pressable
        onPress={() =>
          router.push("/services/servicesPages/serviceProviderProfile")
        }
        style={tw`border border-deepGreycc dark:border-deepGrey80 dark:bg-deepGrey50 rounded-2xl p-3`}
      >
        <View style={tw`flex-row justify-start items-center gap-3`}>
          <Image
            style={tw`w-20 h-20 rounded-full`}
            source={item?.providerImage}
          />
          <View>
            <Text
              style={tw`font-DegularDisplaySemibold text-xl text-black dark:text-white my-1`}
            >
              {item?.title}
            </Text>
            <View style={tw`flex-row items-center gap-1`}>
              <Text
                style={tw`font-DegularDisplayMedium text-lg text-black dark:text-white`}
              >
                {item.categoryName}
              </Text>
              <Text
                style={tw`font-DegularDisplayRegular text-base text-deepGrey dark:text-deepGreycc`}
              >
                {item.location}
              </Text>
            </View>
            <View style={tw`flex-row justify-start items-center gap-2`}>
              <View>
                <StarRating
                  starSize={26}
                  rating={rating}
                  onChange={setRating}
                />
              </View>
              <Text
                style={tw`font-DegularDisplaySemibold text-lg text-black dark:text-white `}
              >
                {item.ratting}
                <Text
                  style={tw`font-DegularDisplayRegular text-base text-black dark:text-white`}
                >
                  (100)
                </Text>
              </Text>
            </View>
          </View>
        </View>
        {/* ====================== horizontal image view =============== */}
        <FlatList
          data={item.image}
          contentContainerStyle={tw`my-4 shadow-sm`}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={tw`mr-3`}>
              <Image
                source={item}
                style={tw`w-24 h-20 rounded-xl`}
                resizeMode="cover"
              />
            </View>
          )}
        />

        <View style={tw`flex-row justify-between items-center`}>
          <TouchableOpacity
            onPress={() =>
              router.push("/services/servicesPages/serviceProviderProfile")
            }
            style={tw`bg-SPrimary justify-center items-center  w-[50%] rounded-full py-2 px-4`}
          >
            <View style={tw`flex-row gap-2 items-center`}>
              <Text
                style={tw`font-DegularDisplayRegular text-base text-white dark:text-white`}
              >
                Starting price:
              </Text>
              <Text
                style={tw`font-DegularDisplayMedium text-lg  text-white dark:text-white`}
              >
                ${item.price}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              router.push("/services/servicesPages/serviceProviderProfile")
            }
            style={tw`w-10 h-10 flex justify-center items-center bg-SPrimary rounded-full`}
          >
            <SvgXml xml={IconRightArrowWhite} />
          </TouchableOpacity>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-base-light dark:bg-base-dark px-4`}>
      <FlatList
        contentContainerStyle={tw`gap-4`}
        data={categoryData}
        ListHeaderComponent={HeaderContent}
        keyExtractor={(item) => item.id.toLocaleString()}
        renderItem={RenderItem}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default ServiceProvider;
