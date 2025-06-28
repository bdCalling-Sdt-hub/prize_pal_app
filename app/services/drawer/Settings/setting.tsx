import { useTheme } from "@/app/context/ThemeProvider";
import {
  IconBackBlack,
  IconBackWhite,
  IconSChangePassBlack,
  IconSChangePassWhite,
  IconSDarkModeBlack,
  IconSDarkModeWhite,
  IconSEditBlack,
  IconSEditPenWhite,
  IconsRightArrowBlack,
  IconsRightArrowWhite,
} from "@/icons/icon";
import tw from "@/lib/tailwind";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React, { useState } from "react";
import { Pressable, Switch, Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";

const Setting = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const { toggleColorScheme, colorScheme } = useTheme();

  const handleTheme = async () => {
    const newValue = !isEnabled;
    setIsEnabled(newValue);
    toggleColorScheme();
    await AsyncStorage.setItem("mode", newValue ? "dark" : "light");
  };

  return (
    <View style={tw`bg-base-light dark:bg-base-dark h-full px-5`}>
      {/* --------------- header back -------------------- */}
      <View style={tw`flex-row justify-between items-center my-3`}>
        <View style={tw`flex-row gap-8 justify-center items-center`}>
          <Pressable
            onPress={() => router.back()}
            style={tw`flex-row items-center gap-5 `}
          >
            <SvgXml
              xml={colorScheme === "dark" ? IconBackWhite : IconBackBlack}
            />
            <Text
              style={tw`font-DegularDisplaySemibold text-base text-black dark:text-white`}
            >
              Back
            </Text>
          </Pressable>
        </View>
        <Text></Text>
      </View>

      <View style={tw`my-5`}>
        <View style={tw`bg-primary dark:bg-darkPrimary rounded-2xl`}>
          {/* add page */}
          <TouchableOpacity
            onPress={() => {
              router.push("/services/drawer/servicesHome/profile");
            }}
            style={tw`flex-row justify-between items-center px-3 bg-primary dark:bg-darkPrimary py-4 rounded-xl`}
          >
            <View style={tw`flex-row  items-center `}>
              <View
                style={tw`w-10 h-10  justify-center items-center bg-deepGreycc dark:bg-deepGrey80 rounded-3xl  mr-4`}
              >
                <SvgXml
                  xml={
                    colorScheme === "dark"
                      ? IconSChangePassWhite
                      : IconSChangePassBlack
                  }
                />
              </View>
              <Text style={tw`font-medium text-lg dark:text-white`}>
                Change password
              </Text>
            </View>
            <SvgXml
              xml={
                colorScheme === "dark"
                  ? IconsRightArrowWhite
                  : IconsRightArrowBlack
              }
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              router.push("/services/drawer/servicesHome/profile");
            }}
            style={tw`flex-row justify-between items-center px-3 bg-primary dark:bg-darkPrimary py-4 rounded-xl`}
          >
            <View style={tw`flex-row  items-center `}>
              <View
                style={tw`w-10 h-10  justify-center items-center bg-deepGreycc dark:bg-deepGrey80 rounded-3xl mr-4`}
              >
                <SvgXml
                  xml={
                    colorScheme === "dark" ? IconSEditPenWhite : IconSEditBlack
                  }
                />
              </View>
              <Text style={tw`font-medium text-lg dark:text-white`}>
                Edit profile
              </Text>
            </View>
            <SvgXml
              xml={
                colorScheme === "dark"
                  ? IconsRightArrowWhite
                  : IconsRightArrowBlack
              }
            />
          </TouchableOpacity>

          <TouchableOpacity
            // onPress={() => {
            //   router.push("/retailer/home/profile");
            // }}
            style={tw`flex-row justify-between items-center px-3 bg-primary dark:bg-darkPrimary  py-4 rounded-xl`}
          >
            <View style={tw`flex-row  items-center `}>
              <View
                style={tw`w-10 h-10  justify-center items-center bg-deepGreycc dark:bg-deepGrey80 rounded-3xl mr-4`}
              >
                <SvgXml
                  xml={
                    colorScheme === "dark"
                      ? IconSDarkModeWhite
                      : IconSDarkModeBlack
                  }
                />
              </View>
              <Text style={tw`font-medium text-lg dark:text-white`}>
                Dark Mode
              </Text>
            </View>
            <Switch
              onValueChange={handleTheme}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              // onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Setting;
