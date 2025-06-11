import React from "react";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { useTheme } from "@/app/context/ThemeProvider";
import { ImgLogo } from "@/assets/image";
import Card from "@/components/Card";
import {
  IconLove,
  IconLoveDark,
  IconNotification,
  IconNotificationDark,
  IconSearch,
  IconSMenu,
  IconSMenuDark,
} from "@/icons/icon";
import data from "@/lib/data.json";
import tw from "@/lib/tailwind";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";
import { Formik } from "formik";
import { ScrollView } from "react-native-gesture-handler";
import { SvgXml } from "react-native-svg";

const Page = () => {
  const { toggleColorScheme, colorScheme } = useTheme();
  const navigation = useNavigation();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={tw`bg-base-light dark:bg-base-dark h-full `}
      contentContainerStyle={tw`px-4 pt-3 pb-30`}
    >
      {/* ============= theme toggle button ========================== */}
      <TouchableOpacity
        onPress={async () => {
          AsyncStorage.setItem(
            "mode",
            colorScheme === "dark" ? "light" : "dark"
          );
          toggleColorScheme();
        }}
      >
        <Text
          style={tw`dark:text-white text-black bg-green-500 rounded-full p-2`}
        >
          {colorScheme === "dark" ? "Make light" : "Make Dark"}
        </Text>
      </TouchableOpacity>
      {/* ================= header -================= */}
      <View style={tw`flex-row justify-between items-center my-5`}>
        <TouchableOpacity
          onPress={() => {
            (navigation as any)?.openDrawer();
          }}
          style={tw`w-14 h-14 rounded-full bg-primary dark:bg-[#3D3D3D] justify-center items-center`}
        >
          {colorScheme === "dark" ? (
            <SvgXml xml={IconSMenuDark} />
          ) : (
            <SvgXml xml={IconSMenu} />
          )}
        </TouchableOpacity>

        <Image style={tw`w-28 h-28 ml-8`} source={ImgLogo} />

        <View style={tw`flex-row gap-2`}>
          <TouchableOpacity
            onPress={() => router.push("/retailer/Favorite/favorite")}
            style={tw`w-14 h-14 rounded-full bg-primary dark:bg-[#3D3D3D] justify-center items-center`}
          >
            {colorScheme === "dark" ? (
              <SvgXml xml={IconLoveDark} />
            ) : (
              <SvgXml xml={IconLove} />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              router.push("/services/servicesPages/notificationServices")
            }
            style={tw`w-14 h-14 rounded-full bg-primary dark:bg-[#3D3D3D] justify-center items-center`}
          >
            {colorScheme === "dark" ? (
              <SvgXml xml={IconNotificationDark} />
            ) : (
              <SvgXml xml={IconNotification} />
            )}
          </TouchableOpacity>
        </View>
      </View>

      {/* =======================  search bar ===================== */}

      {/* search bar */}
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
              style={tw`bg-primary dark:bg-darkPrimary mt-7 mb-2 rounded-full flex-row items-center pl-6`}
            >
              <SvgXml xml={IconSearch} />
              <TextInput
                style={tw`h-[60px] flex-1 pl-3 `}
                placeholder="Search items"
                placeholderTextColor="text-deepGrey"
                onChangeText={handleChange("searchText")}
                onBlur={handleBlur("searchText")}
                value={values.searchText}
              />
            </View>
          );
        }}
      </Formik>
      <View style={tw` `}>
        {/* card */}
        <FlatList
          scrollEnabled={false}
          nestedScrollEnabled={true}
          data={data}
          renderItem={({ item }) => <Card item={item} />}
        />
      </View>
    </ScrollView>
  );
};

export default Page;
