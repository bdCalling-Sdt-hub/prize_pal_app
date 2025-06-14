import {
  IconBack,
  IconBackBlack,
  IconBackDark,
  IconBackWhite,
  IconDarkmode,
  IconDarkmodeDark,
  IconEdits,
  IconEditsDark,
  IconKey,
  IconKeyDark,
} from "@/icons/icon";
import tw from "@/lib/tailwind";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React, { useState } from "react";
import { Pressable, Switch, Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { useTheme } from "../context/ThemeProvider";

const Settings = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const { toggleColorScheme, colorScheme } = useTheme();
  const handleTheme = async () => {
    const newValue = !isEnabled;
    setIsEnabled(newValue);
    toggleColorScheme();
    await AsyncStorage.setItem("mode", newValue ? "dark" : "light");
  };
  return (
    <View style={tw`bg-base-light dark:bg-base-dark h-full`}>
      <View style={tw`flex-row justify-between items-center pl-6 my-5`}>
        <Pressable onPress={() => router.back()} style={tw` `}>
          <View style={tw`flex-row gap-6 justify-center items-center`}>
            <SvgXml
              xml={colorScheme === "dark" ? IconBackWhite : IconBackBlack}
            />
            <Text
              style={tw`font-DegularDisplaySemibold text-base text-black dark:text-white`}
            >
              Settings
            </Text>
          </View>
        </Pressable>
        <Text> </Text>
      </View>
      <View style={tw`m-5`}>
        <View style={tw`bg-primary dark:bg-darkPrimary  rounded-3xl`}>
          {/* add page */}
          <TouchableOpacity
            onPress={() => {
              router.push("/Settings/changePass");
            }}
            style={tw`flex-row justify-between items-center px-3  py-4 rounded-xl`}
          >
            <View style={tw`flex-row gap-4 items-center `}>
              <View
                style={tw` rounded-3xl bg-offWhite dark:bg-deepGrey80  p-3 `}
              >
                <SvgXml xml={colorScheme === "dark" ? IconKeyDark : IconKey} />
              </View>
              <Text style={tw`font-medium text-lg dark:text-primaryFF`}>
                Change password
              </Text>
            </View>
            <SvgXml xml={colorScheme === "dark" ? IconBackDark : IconBack} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              router.push("/retailer/home/profile");
            }}
            style={tw`flex-row justify-between items-center px-3  py-4 rounded-xl`}
          >
            <View style={tw`flex-row gap-4 items-center `}>
              <View
                style={tw` rounded-3xl bg-offWhite dark:bg-deepGrey80  p-3 `}
              >
                <SvgXml
                  xml={colorScheme === "dark" ? IconEditsDark : IconEdits}
                />
              </View>
              <Text style={tw`font-medium text-lg  dark:text-primaryFF`}>
                Edit profile
              </Text>
            </View>
            <SvgXml xml={colorScheme === "dark" ? IconBackDark : IconBack} />
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`flex-row justify-between items-center px-3  py-4 rounded-xl`}
          >
            <View style={tw`flex-row gap-4 items-center `}>
              <View
                style={tw` rounded-3xl bg-offWhite dark:bg-deepGrey80  p-3 `}
              >
                <SvgXml
                  xml={colorScheme === "dark" ? IconDarkmodeDark : IconDarkmode}
                />
              </View>
              <Text style={tw`font-medium text-lg  dark:text-primaryFF`}>
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

export default Settings;
