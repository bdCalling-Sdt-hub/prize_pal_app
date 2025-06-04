import { useTheme } from "@/app/context/ThemeProvider";
import { ImgLogo, ImgSPoster } from "@/assets/image";
import ServiceCarousel from "@/components/ServiceCarousel";
import {
  IconCheckBlack,
  IconCheckWhite,
  IconCleaningService,
  IconMovingService,
  IconRemodelingService,
  IconRightArrowWhite,
  IconSearch,
  IconSMassage,
  IconSMenu,
  IconSNotification,
} from "@/icons/icon";
import tw from "@/lib/tailwind";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, useNavigation } from "expo-router";
import { Formik } from "formik";
import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SvgXml } from "react-native-svg";

const ServiceHome = () => {
  const { toggleColorScheme, colorScheme } = useTheme();
  const navigation = useNavigation();

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={tw`flex-1 bg-base-light dark:bg-base-dark pb-20`}
    >
      <View style={tw`px-5 pb-24`}>
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
            style={tw`dark:text-white text-black bg-yellow-400 rounded-full p-2`}
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
            style={tw`w-14 h-14 rounded-full bg-lowGreen justify-center items-center`}
          >
            <SvgXml xml={IconSMenu} />
          </TouchableOpacity>

          <Image style={tw`w-28 h-28 ml-8`} source={ImgLogo} />

          <View style={tw`flex-row gap-2`}>
            <TouchableOpacity
              style={tw`w-14 h-14 rounded-full bg-lowGreen justify-center items-center`}
            >
              <SvgXml xml={IconSMassage} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                router.push("/services/servicesPages/notificationServices")
              }
              style={tw`w-14 h-14 rounded-full bg-lowGreen justify-center items-center`}
            >
              <SvgXml xml={IconSNotification} />
            </TouchableOpacity>
          </View>
        </View>

        {/* =======================  search bar ===================== */}
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
                style={tw`bg-primary my-2 rounded-full flex-row items-center pl-6`}
              >
                <SvgXml xml={IconSearch} />
                <TextInput
                  style={tw`h-[60px] flex-1 pl-3`}
                  placeholder="Search items"
                  onChangeText={handleChange("searchText")}
                  onBlur={handleBlur("searchText")}
                  value={values.searchText}
                />
              </View>
            );
          }}
        </Formik>

        {/* ============ carousel ============== */}

        <ServiceCarousel />

        {/* ============ details contents ============= */}
        <View style={tw`flex justify-center items-center my-3 `}>
          <Text
            style={tw`font-DegularDisplayMedium text-3xl text-black text-center dark:text-white px-6`}
          >
            Your All in One home project solution
          </Text>
          <Text
            style={tw`font-DegularDisplayRegular text-base text-black text-center dark:text-white px-2`}
          >
            Let’s book your appointment and give your home the care it deserves.
          </Text>
        </View>

        <TouchableOpacity
          style={tw`w-full bg-SPrimary rounded-full flex-row justify-center items-center gap-2 py-3`}
        >
          <Text style={tw`font-DegularDisplayMedium text-xl text-white `}>
            Book now
          </Text>
          <SvgXml xml={IconRightArrowWhite} />
        </TouchableOpacity>

        {/* ================ our services =============== */}
        <View style={tw`flex-row justify-between items-center my-5`}>
          <View
            style={tw`w-28 h-28 rounded-xl bg-lowGreen dark:border-SPrimary dark:border dark:bg-deepGrey50 flex justify-center items-center`}
          >
            <View
              style={tw`w-[80%] h-[60%] bg-SPrimary rounded-xl flex justify-center items-center`}
            >
              <SvgXml style={tw`text-center`} xml={IconCleaningService} />
            </View>
            <Text
              style={tw`text-black font-DegularDisplayRegular dark:text-white text-lg`}
            >
              Cleaning
            </Text>
          </View>
          <View
            style={tw`w-28 h-28 rounded-xl bg-lowGreen dark:border-SPrimary dark:border dark:bg-deepGrey50 flex justify-center items-center`}
          >
            <View
              style={tw`w-[80%] h-[60%] bg-SPrimary rounded-xl flex justify-center items-center`}
            >
              <SvgXml style={tw`text-center`} xml={IconMovingService} />
            </View>
            <Text
              style={tw`text-black font-DegularDisplayRegular dark:text-white text-lg`}
            >
              Moving
            </Text>
          </View>
          <View
            style={tw`w-28 h-28 rounded-xl bg-lowGreen dark:border-SPrimary dark:border dark:bg-deepGrey50 flex justify-center items-center`}
          >
            <View
              style={tw`w-[80%] h-[60%] bg-SPrimary rounded-xl flex justify-center items-center`}
            >
              <SvgXml style={tw`text-center`} xml={IconRemodelingService} />
            </View>
            <Text
              style={tw`text-black font-DegularDisplayRegular dark:text-white text-lg`}
            >
              Remodeling
            </Text>
          </View>
        </View>

        {/* ==========Booking process ============== */}
        <Text
          style={tw`text-2xl font-DegularDisplayMedium text-black text-center my-2 dark:text-white`}
        >
          Booking process
        </Text>

        <View
          style={tw`border border-deepGrey50 rounded-3xl px-10 py-6 mt-4 gap-3 mx-4`}
        >
          <View style={tw`flex-row justify-start items-center gap-5`}>
            <SvgXml
              xml={colorScheme === "dark" ? IconCheckWhite : IconCheckBlack}
            />
            <Text
              style={tw`font-DegularDisplayRegular text-lg text-black dark:text-white`}
            >
              Find your location
            </Text>
          </View>
          <View style={tw`flex-row justify-start items-center gap-5`}>
            <SvgXml
              xml={colorScheme === "dark" ? IconCheckWhite : IconCheckBlack}
            />
            <Text
              style={tw`font-DegularDisplayRegular text-lg text-black dark:text-white`}
            >
              Fill in details
            </Text>
          </View>
          <View style={tw`flex-row justify-start items-center gap-5`}>
            <SvgXml
              xml={colorScheme === "dark" ? IconCheckWhite : IconCheckBlack}
            />
            <Text
              style={tw`font-DegularDisplayRegular text-lg text-black dark:text-white`}
            >
              See price
            </Text>
          </View>
          <View style={tw`flex-row justify-start items-center gap-5`}>
            <SvgXml
              xml={colorScheme === "dark" ? IconCheckWhite : IconCheckBlack}
            />
            <Text
              style={tw`font-DegularDisplayRegular text-lg text-black dark:text-white`}
            >
              Schedule appointment
            </Text>
          </View>
        </View>

        <View style={tw`bg-slate-600 w-80 h-[490px] rounded-2xl mt-10 ml-3`}>
          <View style={tw`relative`}>
            <Image
              style={tw` w-80 h-[470px] rounded-2xl ml-5`}
              source={ImgSPoster}
            />
          </View>

          <View style={tw`absolute top-8 left-3 px-6`}>
            <Text
              style={tw`font-DegularDisplaySemibold text-2xl text-white text-center`}
            >
              Your one & only cleaning, moving and remodeling solution.
            </Text>
            <Text
              style={tw`font-DegularDisplayRegular text-white text-sm text-center`}
            >
              Let's book your appointment and give your home the care it
              deserves.
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={tw`w-full bg-SPrimary rounded-full flex-row justify-center items-center gap-2 mt-6 mb-1.5 py-3`}
        >
          <Text style={tw`font-DegularDisplayMedium text-xl text-white `}>
            Book now
          </Text>
          <SvgXml xml={IconRightArrowWhite} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ServiceHome;
