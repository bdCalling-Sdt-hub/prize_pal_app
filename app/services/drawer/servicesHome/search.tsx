import {
  ImgServiceFive,
  ImgServiceFour,
  ImgServiceOne,
  ImgServiceThree,
  ImgServiceTwo,
} from "@/assets/image";
import { IconRightArrowConner, IconSearch } from "@/icons/icon";
import tw from "@/lib/tailwind";
import { Formik } from "formik";
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
import { TextInput } from "react-native-gesture-handler";
import { SvgXml } from "react-native-svg";

const Search = () => {
  interface ISearchData {
    id: number;
    title: string;
    image: any;
  }

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
      <Pressable>
        <Image
          style={tw`relative w-44 h-36 rounded-2xl `}
          source={item.image}
        />
        <View
          style={tw`absolute bottom-3 flex-row justify-between items-center w-full px-2`}
        >
          <Text style={tw`font-DegularDisplayMedium text-lg text-white`}>
            {item.title}
          </Text>
          <TouchableOpacity
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
      <Formik
        initialValues={{ searchText: "" }}
        onSubmit={(values) => console.log("Submitted:", values)}
      >
        {({ handleChange, handleBlur, values }) => {
          if (values.searchText.length > 0) {
            console.log("Searching for:", values.searchText);
          }
          return (
            <View
              style={tw`bg-primary border-deepGreycc border dark:bg-[#3D3D3D]  my-3 rounded-full flex-row items-center pl-6`}
            >
              <SvgXml xml={IconSearch} />
              <TextInput
                style={tw`h-[60px] flex-1 pl-3`}
                placeholder="Search items"
                placeholderTextColor="#888888"
                onChangeText={handleChange("searchText")}
                onBlur={handleBlur("searchText")}
                value={values.searchText}
              />
            </View>
          );
        }}
      </Formik>
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

export default Search;
