import { useTheme } from "@/app/context/ThemeProvider";
import {
  ImgReviewProfile,
  ImgServiceFour,
  ImgServiceOne,
  ImgServiceThree,
  ImgServiceTwo,
} from "@/assets/image";
import {
  IconBackBlack,
  IconBackWhite,
  IconLoction,
  IconMessageBlack,
  IconMessageWhite,
  IconSBusinessBlack,
  IconSBusinessWhite,
  IconSEmployeeBlack,
  IconSEmployeeWhite,
  IconSLocationBlack,
  IconSLocationWhite,
  IconSTeliPhoneBlack,
  IconSTeliPhoneWhite,
  IconSTimerWhite,
} from "@/icons/icon";
import tw from "@/lib/tailwind";
import { router } from "expo-router";
import React, { JSX, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import StarRating from "react-native-star-rating-widget";
import { SvgXml } from "react-native-svg";

const ServiceProviderProfile = () => {
  const { colorScheme } = useTheme();
  const [rating, setRating] = useState(4);

  const Images = [
    ImgServiceOne,
    ImgServiceTwo,
    ImgServiceThree,
    ImgServiceFour,
  ];

  interface IReviewProps {
    id: number;
    name: string;
    date: Date;
    ratting: number;
    description: string;
    image: any;
  }

  const reviewsData = [
    {
      id: 1,
      name: "Maria Jones",
      image: ImgReviewProfile,
      date: new Date(),
      ratting: 4,
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi eu consequat non ornare viverra scelerisque imperdiet. Nisi tortor amet nunc magnis at morbi. Odio risus suspendisse tempus tempus quisque. ",
    },
    {
      id: 5,
      name: "Maria Jones",
      image: ImgReviewProfile,
      date: new Date(),
      ratting: 4,
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi eu consequat non ornare viverra scelerisque imperdiet. Nisi tortor amet nunc magnis at morbi. Odio risus suspendisse tempus tempus quisque. ",
    },
    {
      id: 2,
      name: "Maria Jones",
      image: ImgReviewProfile,
      date: new Date(),
      ratting: 3,
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi eu consequat non ornare viverra scelerisque imperdiet. Nisi tortor amet nunc magnis at morbi. Odio risus suspendisse tempus tempus quisque. ",
    },
    {
      id: 3,
      name: "Maria Jones",
      image: ImgReviewProfile,
      date: new Date(),
      ratting: 5,
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi eu consequat non ornare viverra scelerisque imperdiet. Nisi tortor amet nunc magnis at morbi. Odio risus suspendisse tempus tempus quisque. ",
    },
    {
      id: 4,
      name: "Maria Jones",
      image: ImgReviewProfile,
      date: new Date(),
      ratting: 4,
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi eu consequat non ornare viverra scelerisque imperdiet. Nisi tortor amet nunc magnis at morbi. Odio risus suspendisse tempus tempus quisque. ",
    },
  ];

  return (
    <ScrollView style={tw`flex-1 bg-base-light dark:bg-base-dark px-5`}>
      {/* ================ head back bar ============== */}
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
            Back
          </Text>
        </View>
        <Text></Text>
      </View>

      {/* ===================== service provider profile content ============= */}
      <View>
        <View
          style={tw` relative flex justify-center items-center border border-deepGreycc dark:border-deepGrey80 py-3 rounded-xl my-2 dark:bg-deepGrey50 gap-1`}
        >
          <Image style={tw`w-24 h-24 rounded-full`} source={ImgServiceOne} />
          <Text
            style={tw`font-DegularDisplayMedium text-xl text-black dark:text-white`}
          >
            ABC
          </Text>
          <View style={tw`flex-row justify-center items-center gap-2`}>
            <SvgXml xml={IconLoction} />
            <Text
              style={tw`font-DegularDisplayRegular text-base text-deepGrey50 dark:text-deepGreycc`}
            >
              Dhaka, bangladesh
            </Text>
          </View>
          <View style={tw`flex-row justify-start items-center gap-2`}>
            <View style={tw``}>
              <StarRating starSize={26} rating={rating} onChange={setRating} />
            </View>
            <Text
              style={tw`font-DegularDisplaySemibold text-lg text-black dark:text-white `}
            >
              4
              <Text
                style={tw`font-DegularDisplayRegular text-base text-black dark:text-white`}
              >
                (100)
              </Text>
            </Text>
          </View>
        </View>

        <View style={tw`absolute right-3 top-4 gap-2`}>
          <TouchableOpacity
            style={tw`bg-SPrimary justify-center items-center w-24 py-1.5 rounded-full`}
          >
            <Text style={tw`font-DegularDisplayMedium text-base text-white`}>
              Cleaner
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`bg-SPrimary w-24 py-1.5 justify-center items-center rounded-full`}
          >
            <Text style={tw`font-DegularDisplayMedium text-base text-white`}>
              Plumber
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          horizontal
          data={Images}
          keyExtractor={(_, index) => index.toLocaleString()}
          renderItem={({ item }: any) => (
            <View style={tw`mr-3`}>
              <Image style={tw`w-36 h-32 rounded-xl`} source={item} />
            </View>
          )}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />

        <View style={tw`flex-row justify-between items-center gap-2 my-3`}>
          <TouchableOpacity
            style={tw`border border-black flex-row justify-center items-center rounded-full py-3 w-44 gap-2`}
          >
            <SvgXml
              xml={colorScheme === "dark" ? IconMessageWhite : IconMessageBlack}
            />
            <Text
              style={tw`font-DegularDisplayMedium text-lg text-black dark:text-white`}
            >
              Message
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw` flex-row justify-center items-center bg-SPrimary rounded-full py-3 w-44 gap-2`}
          >
            <SvgXml xml={IconSTimerWhite} />
            <Text style={tw`font-DegularDisplayMedium text-lg text-white`}>
              Book
            </Text>
          </TouchableOpacity>
        </View>

        <View style={tw`border border-deepGrey80 rounded-xl p-5 my-2`}>
          <Text
            style={tw`font-DegularDisplayMedium text-2xl text-black dark:text-white mb-2`}
          >
            About
          </Text>
          <Text
            style={tw`font-DegularDisplayRegular text-base text-black  dark:text-white`}
          >
            Lorem ipsum dolor sit amet consectetur. Morbi eu consequat non
            ornare viverra scelerisque imperdiet. Nisi tortor amet nunc magnis
            at morbi. Odio risus suspendisse tempus tempus quisque. Pellentesque
            tincidunt arcu porttitor diam. Gravida arcu eu pellentesque
            penatibus morbi. Feugiat ac eu non in. At pulvinar vulputate eu
            consectetur eu orci. Aliquet nisi eu ridiculus eleifend praesent
            iaculis. Ut arcu amet sodales.
          </Text>
        </View>

        <View style={tw`border border-deepGrey80 rounded-xl p-5 my-2 gap-4`}>
          <Text
            style={tw`font-DegularDisplayMedium text-2xl text-black dark:text-white`}
          >
            Services
          </Text>

          <View style={tw`flex-row justify-between items-center`}>
            <View>
              <Text
                style={tw`font-DegularDisplayMedium text-lg text-black dark:text-white`}
              >
                Cleaning
              </Text>
              <View style={tw`flex-row justify-start items-center gap-1`}>
                <Text
                  style={tw`font-DegularDisplayRegular text-base text-black dark:text-white`}
                >
                  Starting price:{" "}
                </Text>
                <Text
                  style={tw`font-DegularDisplayMedium text-lg text-black dark:text-white`}
                >
                  {" "}
                  $50
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={tw` flex-row justify-center items-center bg-SPrimary rounded-full py-3 w-36 gap-2`}
            >
              <Text style={tw`font-DegularDisplayMedium text-white text-lg`}>
                Book Now
              </Text>
            </TouchableOpacity>
          </View>

          <View style={tw`flex-row justify-between items-center`}>
            <View>
              <Text
                style={tw`font-DegularDisplayMedium text-lg text-black dark:text-white`}
              >
                Plumbing
              </Text>
              <View style={tw`flex-row justify-start items-center gap-1`}>
                <Text
                  style={tw`font-DegularDisplayRegular text-base text-black dark:text-white`}
                >
                  Starting price:{" "}
                </Text>
                <Text
                  style={tw`font-DegularDisplayMedium text-lg text-black dark:text-white`}
                >
                  {" "}
                  $50
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={tw` flex-row justify-center items-center bg-SPrimary rounded-full py-3 w-36 gap-2`}
            >
              <Text style={tw`font-DegularDisplayMedium text-white text-lg`}>
                Book Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ================ contract info ============== */}
        <View style={tw`border border-deepGrey80 rounded-xl p-5 my-2 gap-3`}>
          <Text
            style={tw`font-DegularDisplayMedium text-2xl text-black dark:text-white`}
          >
            Overview
          </Text>

          <View style={tw`flex-row justify-start items-center gap-3`}>
            <SvgXml
              xml={
                colorScheme === "dark"
                  ? IconSTeliPhoneWhite
                  : IconSTeliPhoneBlack
              }
            />
            <Text
              style={tw`font-DegularDisplayRegular text-xl text-black dark:text-white`}
            >
              +01245698745
            </Text>
          </View>
          <View style={tw`flex-row justify-start items-center gap-3`}>
            <SvgXml
              xml={
                colorScheme === "dark" ? IconSLocationWhite : IconSLocationBlack
              }
            />
            <Text
              style={tw`font-DegularDisplayRegular text-xl text-black dark:text-white`}
            >
              Dhaka, Bangladesh
            </Text>
          </View>
          <View style={tw`flex-row justify-start items-center gap-3`}>
            <SvgXml
              xml={
                colorScheme === "dark" ? IconSEmployeeWhite : IconSEmployeeBlack
              }
            />
            <Text
              style={tw`font-DegularDisplayRegular text-xl text-black dark:text-white`}
            >
              10 employees
            </Text>
          </View>
          <View style={tw`flex-row justify-start items-center gap-3`}>
            <SvgXml
              xml={
                colorScheme === "dark" ? IconSBusinessWhite : IconSBusinessBlack
              }
            />
            <Text
              style={tw`font-DegularDisplayRegular text-xl text-black dark:text-white`}
            >
              10 employees
            </Text>
          </View>
        </View>

        {/* ======================= Review profile ====================== */}

        <View>
          <Text
            style={tw`font-DegularDisplayMedium text-2xl text-black dark:text-white`}
          >
            {" "}
            Reviews
          </Text>
          <View>
            {reviewsData.map(
              (item): JSX.Element => (
                <View key={item.id}>
                  <View>
                    <Image style={tw`w-16 h-16`} source={item.image} />
                    <View>
                      <Text>{item.name}</Text>
                      <Text>{item.date.toLocaleDateString()}</Text>
                    </View>
                  </View>
                </View>
              )
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ServiceProviderProfile;
