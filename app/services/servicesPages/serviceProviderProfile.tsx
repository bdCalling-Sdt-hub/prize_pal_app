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
  IconSBookWhite,
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
import StarRating, { StarRatingDisplay } from "react-native-star-rating-widget";
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

  const CategoryData = ["Cleaning", "Plumbing", "Carpentry"];

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
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={tw`flex-1 bg-base-light dark:bg-base-dark px-5`}
    >
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
          style={tw`  flex justify-center items-center border border-deepGreycc dark:border-deepGrey80 py-3 rounded-xl my-2 dark:bg-deepGrey50 gap-1`}
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
            <View>
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

        <FlatList
          data={CategoryData}
          horizontal
          contentContainerStyle={tw`my-3 gap-2`}
          keyExtractor={(_, index) => index.toLocaleString()}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }: any): JSX.Element => (
            <TouchableOpacity
              style={tw`bg-SPrimary w-24 py-1.5 justify-center  items-center rounded-full`}
            >
              <Text style={tw`font-DegularDisplayMedium text-base text-white`}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />

        {/* <View style={tw` flex-row justify-start items-center my-3 gap-2`}>
         
        </View> */}

        <FlatList
          horizontal
          data={Images}
          contentContainerStyle={tw`my-2`}
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
                  Starting price:
                </Text>
                <Text
                  style={tw`font-DegularDisplayMedium text-lg text-black dark:text-white`}
                >
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
                  Starting price:
                </Text>
                <Text
                  style={tw`font-DegularDisplayMedium text-lg text-black dark:text-white`}
                >
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

        <View style={tw`border border-deepGrey80 rounded-xl p-5 my-2 gap-3`}>
          <Text
            style={tw`font-DegularDisplayMedium text-2xl text-black dark:text-white`}
          >
            Reviews
          </Text>
          <View style={tw`gap-3`}>
            {reviewsData.map(
              (item): JSX.Element => (
                <View style={tw`my-5`} key={item.id}>
                  <View style={tw`flex-row justify-start items-center gap-4`}>
                    <Image
                      style={tw`w-16 h-16 rounded-full`}
                      source={item.image}
                    />
                    <View>
                      <Text
                        style={tw`font-DegularDisplayMedium text-lg text-black dark:text-white`}
                      >
                        {item.name}
                      </Text>
                      <Text
                        style={tw`font-DegularDisplayRegular text-base text-deepGrey`}
                      >
                        {item.date.toLocaleDateString()}
                      </Text>
                      <View style={tw`flex-row  gap-2`}>
                        <View>
                          <StarRatingDisplay
                            style={tw`-ml-1`}
                            starSize={26}
                            rating={item.ratting}
                          />
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
                  </View>

                  <Text
                    style={tw`mt-4 font-normal text-base text-black dark:text-white`}
                  >
                    {item.description}
                  </Text>
                </View>
              )
            )}
          </View>
        </View>

        <TouchableOpacity
          style={tw` flex-row justify-center items-center bg-SPrimary rounded-full py-3 w-full my-4 gap-2`}
        >
          <SvgXml xml={IconSBookWhite} />
          <Text style={tw`font-DegularDisplayMedium text-lg text-white`}>
            Book
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ServiceProviderProfile;
