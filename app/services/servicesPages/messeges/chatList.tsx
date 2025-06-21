import { useTheme } from "@/app/context/ThemeProvider";
import { ImgChatOne } from "@/assets/image";
import { IconBackBlack, IconBackWhite } from "@/icons/icon";
import tw from "@/lib/tailwind";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";

const chatList = () => {
  const { colorScheme } = useTheme();
  return (
    <View style={tw`flex-1 px-4 bg-base-light dark:bg-base-dark`}>
      <View style={tw`flex-row justify-between items-center`}>
        <View style={tw`flex-row gap-5 justify-center items-center`}>
          <Pressable
            onPress={() => router.back()}
            style={tw` flex-row items-center justify-center rounded-full `}
          >
            <SvgXml
              xml={colorScheme === "dark" ? IconBackWhite : IconBackBlack}
            />
            <Text
              style={tw`font-DegularDisplaySemibold text-base text-black dark:text-white`}
            >
              Chat with providers
            </Text>
          </Pressable>
        </View>
        <Text> </Text>
      </View>

      <Pressable
        onPress={() =>
          router.push("/services/servicesPages/messeges/messeging")
        }
        style={tw`flex-row justify-between p-3 border  border-[#0000001A]  bg-[#F5FFE4] dark:bg-[#3D3D3D] rounded-3xl items-center my-3`}
      >
        <View style={tw`flex-row justify-start items-center gap-3`}>
          <Image style={tw`w-16 h-16 rounded-full `} source={ImgChatOne} />
          <View>
            <Text
              style={tw`font-DegularDisplayMedium text-lg text-black dark:text-white`}
            >
              Maria jone
            </Text>
            <Text
              style={tw`font-DegularDisplayRegular text-sm text-black dark:text-white`}
            >
              You: Lorem ipsum dolor sit amet.
            </Text>
          </View>
        </View>
        <Text
          style={tw`font-DegularDisplayRegular text-sm text-deepGrey80 dark:text-deepGreycc mr-1`}
        >
          10: 20 PM
        </Text>
      </Pressable>

      <Pressable
        onPress={() =>
          router.push("/services/servicesPages/messeges/messeging")
        }
        style={tw`flex-row justify-between p-3 border  border-[#0000001A]  bg-[#DBDBDB] dark:bg-[#3D3D3D] rounded-3xl items-center my-3`}
      >
        <View style={tw`flex-row justify-start items-center gap-3`}>
          <Image style={tw`w-16 h-16 rounded-full `} source={ImgChatOne} />
          <View>
            <Text
              style={tw`font-DegularDisplayMedium text-lg text-black dark:text-white`}
            >
              Maria jone
            </Text>
            <Text
              style={tw`font-DegularDisplayRegular text-sm text-black dark:text-white`}
            >
              You: Lorem ipsum dolor sit amet.
            </Text>
          </View>
        </View>
        <Text
          style={tw`font-DegularDisplayRegular text-sm text-deepGrey80 dark:text-deepGreycc mr-1`}
        >
          10: 20 PM
        </Text>
      </Pressable>
      <Pressable
        onPress={() =>
          router.push("/services/servicesPages/messeges/messeging")
        }
        style={tw`flex-row justify-between p-3 border  border-[#0000001A]  bg-[#DBDBDB] dark:bg-[#3D3D3D] rounded-3xl items-center my-3`}
      >
        <View style={tw`flex-row justify-start items-center gap-3`}>
          <Image style={tw`w-16 h-16 rounded-full `} source={ImgChatOne} />
          <View>
            <Text
              style={tw`font-DegularDisplayMedium text-lg text-black dark:text-white`}
            >
              Maria jone
            </Text>
            <Text
              style={tw`font-DegularDisplayRegular text-sm text-black dark:text-white`}
            >
              You: Lorem ipsum dolor sit amet.
            </Text>
          </View>
        </View>
        <Text
          style={tw`font-DegularDisplayRegular text-sm text-deepGrey80 dark:text-deepGreycc mr-1`}
        >
          10: 20 PM
        </Text>
      </Pressable>
    </View>
  );
};

export default chatList;
