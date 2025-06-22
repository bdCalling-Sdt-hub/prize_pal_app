import { useTheme } from "@/app/context/ThemeProvider";
import {
  ImgServiceFive,
  ImgServiceFour,
  ImgServiceOne,
  ImgServiceThree,
  ImgServiceTwo,
} from "@/assets/image";
import {
  IconBackBlack,
  IconBackWhite,
  IconRightArrowConner,
} from "@/icons/icon";
import tw from "@/lib/tailwind";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { JSX } from "react";
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SvgXml } from "react-native-svg";

const BookNowCategory = () => {
  const { colorScheme } = useTheme();

  interface ISearchData {
    id: number;
    title: string;
    image: any;
  }

  // ===================  default search data ==============================

  const defaultSearchData: ISearchData[] = [
    {
      id: 1,
      title: "Cleaning",
      image: ImgServiceOne,
    },
    {
      id: 2,
      title: "Moving",
      image: ImgServiceTwo,
    },
    {
      id: 3,
      title: "Remodeling",
      image: ImgServiceThree,
    },
    {
      id: 4,
      title: "Plumbing",
      image: ImgServiceFour,
    },
    {
      id: 5,
      title: "Carpentry",
      image: ImgServiceFive,
    },
  ];

  const RenderItem = ({ item }: { item: ISearchData }): JSX.Element => {
    return (
      <Pressable
        onPress={() => router.push("/services/servicesPages/serviceExplorer")}
      >
        <Image
          style={tw`relative w-44 h-36 rounded-2xl `}
          source={item.image}
        />
        <LinearGradient
          colors={[
            "transparent",
            "transparent",
            "rgba(0,0,0,0.8)",
            "rgba(0,0,0,0.8)",
          ]}
          style={tw`absolute h-full w-full z-0`}
        />
        <View
          style={tw`absolute bottom-3 flex-row justify-between items-center w-full px-2`}
        >
          <Text style={tw`font-DegularDisplayMedium text-lg text-white`}>
            {item.title}
          </Text>
          <TouchableOpacity
            onPress={() =>
              router.push("/services/servicesPages/serviceExplorer")
            }
            style={tw`w-10 h-10 bg-slate-400 rounded-xl justify-center items-center`}
          >
            <SvgXml style={tw`text-center`} xml={IconRightArrowConner} />
          </TouchableOpacity>
        </View>
      </Pressable>
    );
  };

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
            Select a service
          </Text>
        </View>
        <Text></Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-base-light dark:bg-base-dark px-4`}>
      <FlatList
        data={defaultSearchData}
        numColumns={2}
        contentContainerStyle={tw` flex-1  gap-3 justify-start items-center`}
        columnWrapperStyle={{ gap: 10 }}
        renderItem={RenderItem}
        ListHeaderComponent={HeaderContent}
        ListHeaderComponentStyle={tw`w-full px-3`}
        keyExtractor={(item) => item.id.toLocaleString()}
      />
    </SafeAreaView>
  );
};

export default BookNowCategory;
