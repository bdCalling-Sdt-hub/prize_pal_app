import { zipcode } from "@/assets/image";
import { IconBackBlack, IconLoctionBlack, IconNext } from "@/icons/icon";
import tw from "@/lib/tailwind";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SvgXml } from "react-native-svg";

export default function Zepcode() {
  return (
    <KeyboardAvoidingView
      style={tw`flex-1 `}
      enabled={true}
      behavior={"padding"}
    >
      <ScrollView
        contentContainerStyle={tw`flex-grow justify-center relative `}
      >
        <Image
          source={zipcode}
          contentFit="cover"
          style={tw`h-full w-full absolute justify-center items-center z-0 opacity-100`}
        />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          style={tw`absolute h-full w-full z-0`}
        />
        <View style={tw` absolute z-10 h-full  w-full`}>
          {/* Remodeling Header */}
          <TouchableOpacity onPress={() => router.back()}>
            <BlurView
              experimentalBlurMethod="dimezisBlurView"
              blurReductionFactor={100}
              intensity={40}
              tint="default"
              style={[
                styles.blurContainer,
                tw`py-4 px-7 max-w-40 flex-row items-center gap-3`,
              ]}
            >
              <SvgXml xml={IconBackBlack} />
              <Text style={tw`text-black text-base font-semibold`}>
                Remodeling
              </Text>
            </BlurView>
          </TouchableOpacity>

          <View style={tw`flex-1 justify-center`}>
            {/* Location Input */}
            <View
              style={tw` rounded-full flex-row items-center justify-center px-4 py-3 `}
            >
              <BlurView
                experimentalBlurMethod="dimezisBlurView"
                blurReductionFactor={100}
                intensity={40}
                tint="default"
                style={[
                  styles.blurContainer,
                  tw` py-5 px-7 flex-row items-center gap-3 w-full `,
                ]}
              >
                <SvgXml xml={IconLoctionBlack} />
                <Text style={tw` text-black font-PoppinsMedium  text-lg`}>
                  Enter the location of your home
                </Text>
              </BlurView>
            </View>
            <BlurView
              experimentalBlurMethod="dimezisBlurView"
              blurReductionFactor={100}
              intensity={40}
              tint="default"
              style={[styles.blurContainer, tw`py-9 px-7 `]}
            >
              {/* Zip Code Input */}
              <TextInput
                placeholder="Zip Code"
                placeholderTextColor="black"
                style={[
                  tw` border  rounded-2xl px-4 py-5 mb-4 text-black font-PoppinsLight text-base`,
                ]}
              />
              {/* Next Button */}
              <TouchableOpacity
                style={tw`bg-SPrimary  rounded-2xl py-4 flex-row justify-center gap-3 items-center`}
              >
                <Text
                  style={tw`text-white font-semibold font-PoppinsMedium text-lg `}
                >
                  Next
                </Text>
                <SvgXml xml={IconNext} />
              </TouchableOpacity>
            </BlurView>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  blurContainer: {
    padding: 20,
    margin: 16,
    textAlign: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "white",
  },
});
