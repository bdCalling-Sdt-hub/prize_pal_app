import {
  IconBackBlack,
  IconBackWhite,
  IconCrossWhite,
  IconSEditPenBlack,
  IconSEditPenWhite,
  IconSHomeBlack,
  IconSHomeWhite,
  IconSTimerBlack,
  IconSTimerWhite,
} from "@/icons/icon";
import tw from "@/lib/tailwind";
import { useTheme } from "@react-navigation/native";
import { router } from "expo-router";
import React from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SvgXml } from "react-native-svg";

const Bookings = () => {
  const { colorScheme } = useTheme();
  return (
    <ScrollView
      style={tw`flex-1 bg-base-light dark:bg-base-dark px-4`}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
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
            Back
          </Text>
        </View>
        <View
          style={tw`bg-Sblue p-3 rounded-2xl flex-row justify-center items-center gap-2`}
        >
          <Text style={tw`w-4 h-4 bg-white rounded-full `}></Text>
          <Text style={tw`font-DegularDisplayMedium text-lg text-white`}>
            Pending
          </Text>
        </View>
      </View>

      <View style={tw`bg-slate-200 dark:bg-base-dark px-4 py-5 rounded-xl`}>
        <View style={tw`flex-row justify-start items-center gap-2 my-2`}>
          <SvgXml
            xml={colorScheme === "dark" ? IconSHomeWhite : IconSHomeBlack}
          />
          <Text
            style={tw`font-DegularDisplayMedium text-base dark:text-white text-black`}
          >
            Remodeling details
          </Text>
        </View>

        {/* -------------------- Details ----------------- */}

        <View
          style={tw`border border-deepGrey my-1 px-5 py-4 flex-row justify-between items-center rounded-2xl`}
        >
          <Text
            style={tw`font-DegularDisplayMedium text-black dark:text-white text-base`}
          >
            Zip Code
          </Text>
          <Text
            style={tw`font-DegularDisplayMedium text-black dark:text-white text-base`}
          >
            8320
          </Text>
        </View>
        <View
          style={tw`border border-deepGrey my-1 px-5 py-4 dark:text-white justify-start  rounded-2xl`}
        >
          <Text
            style={tw`font-DegularDisplayMedium dark:text-white text-black text-base`}
          >
            Property type
          </Text>
          <Text
            style={tw`font-DegularDisplayMedium text-deepGrey50 dark:text-deepGreycc text-base`}
          >
            Home / Single family
          </Text>
        </View>
        <View
          style={tw`border border-deepGrey my-1 px-5 py-4 justify-start  rounded-2xl`}
        >
          <Text
            style={tw`font-DegularDisplayMedium dark:text-white text-black text-base`}
          >
            Property Owner ?
          </Text>
          <Text
            style={tw`font-DegularDisplayMedium dark:text-deepGreycc text-deepGrey50 text-base`}
          >
            Yes
          </Text>
        </View>
        <View
          style={tw`border border-deepGrey my-1 px-5 py-4 justify-start  rounded-2xl`}
        >
          <Text
            style={tw`font-DegularDisplayMedium dark:text-white text-black text-base`}
          >
            Planning to renovate
          </Text>
          <Text
            style={tw`font-DegularDisplayMedium dark:text-deepGreycc text-deepGrey50 text-base`}
          >
            Whitin a month
          </Text>
        </View>
        <View
          style={tw`border border-deepGrey my-1 px-5 py-4 justify-start  rounded-2xl`}
        >
          <Text
            style={tw`font-DegularDisplayMedium dark:text-white text-black text-base`}
          >
            Areas to renovate
          </Text>
          <Text
            style={tw`font-DegularDisplayMedium dark:text-deepGreycc text-deepGrey50 text-base`}
          >
            Bedroom, Bathroom
          </Text>
        </View>
        <View
          style={tw`border border-deepGrey my-1 px-5 py-4 justify-start  rounded-2xl`}
        >
          <Text
            style={tw`font-DegularDisplayMedium dark:text-white text-black text-base`}
          >
            Size of house
          </Text>
          <Text
            style={tw`font-DegularDisplayMedium dark:text-deepGreycc text-deepGrey50 text-base`}
          >
            Aprx 1000 sq ft
          </Text>
        </View>
        <View
          style={tw`border border-deepGrey my-1 px-5 py-4 justify-start  rounded-2xl`}
        >
          <Text
            style={tw`font-DegularDisplayMedium dark:text-white text-black text-base`}
          >
            Working with anyone ?
          </Text>
          <Text
            style={tw`font-DegularDisplayMedium dark:text-deepGreycc text-deepGrey50 text-base`}
          >
            Yes
          </Text>
        </View>
        <View
          style={tw`border border-deepGrey my-1 px-5 py-4 justify-start  rounded-2xl`}
        >
          <Text
            style={tw`font-DegularDisplayMedium dark:text-white text-black text-base`}
          >
            Level of budget
          </Text>
          <Text
            style={tw`font-DegularDisplayMedium dark:text-white text-deepGrey50 text-base`}
          >
            Mid level
          </Text>
        </View>
        <View
          style={tw`border border-deepGrey my-1 px-5 py-4 justify-start  rounded-2xl`}
        >
          <Text
            style={tw`font-DegularDisplayMedium dark:text-white text-black text-base`}
          >
            Property address
          </Text>
          <Text
            style={tw`font-DegularDisplayMedium dark:text-deepGreycc text-deepGrey50 text-base`}
          >
            lorem ipsum dolor sit.....
          </Text>
        </View>
      </View>

      <View
        style={tw`bg-slate-200 dark:bg-base-dark px-4 py-5 rounded-xl my-3`}
      >
        <View style={tw`flex-row justify-start items-center gap-2 my-2`}>
          <SvgXml
            xml={colorScheme === "dark" ? IconSTimerWhite : IconSTimerBlack}
          />
          <Text
            style={tw`font-DegularDisplayMedium text-base dark:text-white text-black`}
          >
            Booking details
          </Text>
        </View>

        <View style={tw`flex-row justify-between items-center`}>
          <View
            style={tw`border border-deepGrey w-[75%] my-1 px-5 py-4 flex-row justify-between items-center rounded-2xl`}
          >
            <Text
              style={tw`font-DegularDisplayMedium dark:text-white text-black text-base`}
            >
              Date
            </Text>
            <Text
              style={tw`font-DegularDisplayMedium dark:text-white text-black text-base`}
            >
              11-06-2025
            </Text>
          </View>
          <TouchableOpacity
            style={tw`border border-deepGrey my-1 p-5  justify-center items-center rounded-2xl`}
          >
            <SvgXml
              xml={
                colorScheme === "dark" ? IconSEditPenWhite : IconSEditPenBlack
              }
            />
          </TouchableOpacity>
        </View>
        <View style={tw`flex-row justify-between items-center`}>
          <View
            style={tw`border border-deepGrey w-[75%] my-1 px-5 py-4 flex-row justify-between items-center rounded-2xl`}
          >
            <Text
              style={tw`font-DegularDisplayMedium dark:text-white text-black text-base`}
            >
              Time
            </Text>
            <Text
              style={tw`font-DegularDisplayMedium dark:text-white text-black text-base`}
            >
              02: 00PM
            </Text>
          </View>
          <TouchableOpacity
            style={tw`border border-deepGrey my-1 p-5  justify-center items-center rounded-2xl`}
          >
            <SvgXml
              xml={
                colorScheme === "dark" ? IconSEditPenWhite : IconSEditPenBlack
              }
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={tw`bg-Sred rounded-2xl py-4 flex-row justify-center items-center gap-3 `}
      >
        <SvgXml xml={IconCrossWhite} />
        <Text style={tw`font-DegularDisplayMedium text-lg text-white`}>
          Cancel Appointment
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Bookings;
