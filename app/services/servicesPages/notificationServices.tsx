import { useTheme } from "@/app/context/ThemeProvider";
import {
  IconBackBlack,
  IconBackWhite,
  IconSCancledWhite,
  IconSpenddingWhite,
  IconSSuccessWhite,
} from "@/icons/icon";
import tw from "@/lib/tailwind";
import { router } from "expo-router";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";

const NotificationServices = () => {
  const colorScheme = useTheme();

  return (
    <ScrollView style={tw`flex-1 bg-base-light dark:bg-base-dark px-4`}>
      <View style={tw``}>
        {/*  ------------ bottom header ------------------- */}
        <View style={tw`flex-row justify-between items-center my-5`}>
          <View style={tw`flex-row gap-8 justify-center items-center`}>
            <Pressable onPress={() => router.back()} style={tw` `}>
              <SvgXml
                xml={colorScheme === "dark" ? IconBackWhite : IconBackBlack}
              />
            </Pressable>
            <Text
              style={tw`font-DegularDisplaySemibold text-base text-black dark:text-white`}
            >
              Notifications
            </Text>
          </View>
          <Text> </Text>
        </View>

        <Pressable
          // onPress={() =>
          //   router.push("/services/servicesPages/messeges/messeging")
          // }
          style={tw`flex-row justify-between p-4   bg-[#D9EBFF] dark:bg-darkPrimary rounded-3xl items-center my-1.5`}
        >
          <View style={tw`flex-row justify-start items-center gap-4`}>
            <View
              style={tw`w-12 h-12 justify-center items-center bg-white dark:bg-deepGrey50 rounded-full`}
            >
              <SvgXml xml={IconSpenddingWhite} />
            </View>
            <View>
              <Text
                style={tw`font-DegularDisplayMedium text-lg text-[#007AFF] dark:text-[#007AFF]`}
              >
                Booking Pending
              </Text>
              <Text
                style={tw`font-DegularDisplayRegular text-sm text-deepGrey50 dark:text-white`}
              >
                Tap to see details
              </Text>
            </View>
          </View>
          <Text></Text>
        </Pressable>
        <Pressable
          // onPress={() =>
          //   router.push("/services/servicesPages/messeges/messeging")
          // }
          style={tw`flex-row justify-between p-4   bg-[#FFDBDB] dark:bg-darkPrimary rounded-3xl items-center my-1.5`}
        >
          <View style={tw`flex-row justify-start items-center gap-4`}>
            <View
              style={tw`w-12 h-12 justify-center items-center bg-white dark:bg-deepGrey50 rounded-full`}
            >
              <SvgXml xml={IconSCancledWhite} />
            </View>
            <View>
              <Text
                style={tw`font-DegularDisplayMedium text-lg text-[#FF3737] dark:text-[#FF3737]`}
              >
                Booking Canceled
              </Text>
              <Text
                style={tw`font-DegularDisplayRegular text-sm text-deepGrey50 dark:text-white`}
              >
                Tap to see details
              </Text>
            </View>
          </View>
          <Text></Text>
        </Pressable>
        <Pressable
          style={tw`flex-row justify-between p-4   bg-[#D3FFE5] dark:bg-darkPrimary rounded-3xl items-center my-1.5`}
        >
          <View style={tw`flex-row justify-start items-center gap-4`}>
            <View
              style={tw`w-12 h-12 justify-center items-center bg-white dark:bg-deepGrey50 rounded-full`}
            >
              <SvgXml xml={IconSSuccessWhite} />
            </View>
            <View>
              <Text
                style={tw`font-DegularDisplayMedium text-lg text-[#00B047] dark:text-[#00B047]`}
              >
                Booking successful
              </Text>
              <Text
                style={tw`font-DegularDisplayRegular text-sm text-deepGrey50 dark:text-white`}
              >
                Tap to review
              </Text>
            </View>
          </View>
          <Text></Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default NotificationServices;
