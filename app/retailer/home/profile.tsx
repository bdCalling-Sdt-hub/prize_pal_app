import { useTheme } from "@/app/context/ThemeProvider";
import Btn from "@/components/Btn";
import {
  IconCall,
  IconEdit,
  IconEditDark,
  IconEmail,
  IconLoction,
  IconSelectImg,
  IconUser,
} from "@/icons/icon";
import tw from "@/lib/tailwind";
import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SvgXml } from "react-native-svg";

const Page = () => {
  const { colorScheme } = useTheme();

  return (
    <View style={tw`flex-1 bg-base-light dark:bg-base-dark`}>
      <ScrollView>
        <View style={tw`p-5`}>
          {/* profile section */}
          <View
            style={tw`flex-row items-center dark:bg-darkPrimary justify-center border rounded-3xl border-deepGreycc py-8`}
          >
            <View style={tw`mx-auto`}>
              <View style={tw`relative `}>
                <Image
                  style={tw`h-32 aspect-square rounded-full`}
                  source={require("@/assets/images/profile.jpg")}
                />
                <TouchableOpacity style={tw`absolute bottom-0 right-5`}>
                  <SvgXml xml={IconSelectImg} />
                </TouchableOpacity>
              </View>
              {/* name and loction */}
              <View style={tw`text-center items-center pt-3`}>
                <Text
                  style={tw`font-medium text-xl text-deepGrey50   dark:text-primaryFF`}
                >
                  Majsharlaya
                </Text>
                <View style={tw`flex-row items-center gap-3 pt-1`}>
                  <SvgXml xml={IconLoction} />
                  <Text style={tw`font-normal text-base dark:text-deepGrey`}>
                    Dhaka, bangladesh
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/*   profile details */}
          <View style={tw`flex-col justify-between h-[61%]`}>
            <View>
              <View
                style={tw`flex-row items-center gap-4 py-4 px-6 dark:bg-darkPrimary  mt-4  rounded-full border border-deepGreycc`}
              >
                <SvgXml xml={IconUser} />
                <Text
                  style={tw`font-normal text-base dark:bg-darkPrimary    dark:text-darkText`}
                >
                  Majsharlaya
                </Text>
              </View>
              <View
                style={tw`flex-row items-center dark:bg-darkPrimary  gap-4 py-4 px-6 mt-4  rounded-full border border-deepGreycc`}
              >
                <SvgXml xml={IconEmail} />
                <Text
                  style={tw`font-normal text-base  text-deepGrey50 dark:text-darkText`}
                >
                  example@gmail.com
                </Text>
              </View>
              <View
                style={tw`flex-row items-center dark:bg-darkPrimary  gap-4 py-4 px-6 mt-4  rounded-full border border-deepGreycc`}
              >
                <SvgXml xml={IconCall} />
                <Text
                  style={tw`font-normal text-base  text-deepGrey50 dark:text-darkText`}
                >
                  +1235698745
                </Text>
              </View>
              <View
                style={tw`flex-row items-center dark:bg-darkPrimary  gap-4 py-4 px-6 mt-4  rounded-full border border-deepGreycc`}
              >
                <SvgXml xml={IconLoction} />
                <Text
                  style={tw`font-normal text-base  text-deepGrey50 dark:text-darkText`}
                >
                  Dhaka, bangladesh
                </Text>
              </View>
            </View>
            <View>
              <Btn>
                <TouchableOpacity
                  onPress={() => {
                    router.push("/editProfile/editProfile");
                  }}
                >
                  <View style={tw`flex-row justify-center items-center gap-3`}>
                    {colorScheme === "dark" ? (
                      <SvgXml xml={IconEditDark} />
                    ) : (
                      <SvgXml xml={IconEdit} />
                    )}
                    <Text
                      style={tw`text-primaryFF dark:text-darkPrimary text-center font-semibold text-lg  `}
                    >
                      Edit Profile
                    </Text>
                  </View>
                </TouchableOpacity>
              </Btn>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Page;
