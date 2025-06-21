import { useTheme } from "@/app/context/ThemeProvider";
import {
  IconBackBlack,
  IconBackWhite,
  IconSMyBookingsStatic,
} from "@/icons/icon";
import tw from "@/lib/tailwind";
import { router } from "expo-router";
import React from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";

const MyBooking = () => {
  const { colorScheme } = useTheme();
  const BookingData = [
    {
      id: 1,
      title: "Cleaning appointment",
      icon: IconSMyBookingsStatic,
    },
    {
      id: 2,
      title: "Moving appointment",
      icon: IconSMyBookingsStatic,
    },
    {
      id: 3,
      title: "Remodeling appointment",
      icon: IconSMyBookingsStatic,
    },
    {
      id: 5,
      title: "Remodeling appointment ",
      icon: IconSMyBookingsStatic,
    },
  ];
  type TBookingItem = {
    id: number;
    title: string;
    icon: string;
  };

  const RenderHeaderItem = () => {
    return (
      <View style={tw`flex-row justify-between items-center my-5`}>
        <View style={tw`flex-row gap-8 justify-center items-center`}>
          <Pressable
            onPress={() => router.back()}
            style={tw`flex-row items-center gap-5`}
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
        <Text> </Text>
      </View>
    );
  };

  const RenderItem = ({ item }: { item: TBookingItem }) => {
    return (
      <Pressable
        onPress={() => router.push("/services/drawer/MyBokkings/bookings")}
        style={tw`flex-row justify-between p-4   bg-deepGreycc dark:bg-darkPrimary rounded-3xl items-center my-1.5`}
      >
        <View style={tw`flex-row justify-start items-center gap-4`}>
          <View
            style={tw`w-12 h-12 justify-center items-center bg-white dark:bg-deepGrey50 rounded-full`}
          >
            <SvgXml xml={item.icon} />
          </View>
          <View>
            <Text
              style={tw`font-DegularDisplayMedium text-lg text-black dark:text-white`}
            >
              {item?.title}
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
    );
  };

  return (
    <FlatList
      contentContainerStyle={tw`bg-base-light dark:bg-base-dark flex-1 px-4`}
      data={BookingData ?? []}
      keyExtractor={(item) => item.id.toString()}
      renderItem={RenderItem}
      ListHeaderComponent={RenderHeaderItem}
      //   ListHeaderComponentStyle={}
    />
  );
};

export default MyBooking;
