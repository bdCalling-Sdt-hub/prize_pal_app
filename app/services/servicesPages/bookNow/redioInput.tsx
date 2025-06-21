import { servicesSix } from "@/assets/image";
import { IconBackBlack, IconLoctionBlack, IconNext } from "@/icons/icon";
import tw from "@/lib/tailwind";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SvgXml } from "react-native-svg";

const RadioInput = () => {
  const [selectedSize, setSelectedSize] = useState("");

  const sizeOptions = [
    { id: "1", label: "Less than 1000 sq ft", value: "less_1000" },
    { id: "2", label: "1000 - 3000 sq ft", value: "1000_3000" },
    { id: "3", label: "More than 2000 sq ft", value: "more_2000" },
  ];

  return (
    <KeyboardAvoidingView
      style={tw`flex-1`}
      enabled={true}
      behavior={"padding"}
    >
      <ScrollView contentContainerStyle={tw`flex-grow justify-center relative`}>
        <Image
          source={servicesSix}
          contentFit="cover"
          style={tw`h-full w-full absolute justify-center items-center z-0`}
        />
        <LinearGradient
          colors={[
            "transparent",
            "transparent",
            "transparent",
            "transparent",
            "transparent",
            "transparent",
            "rgba(0,0,0,0.8)",
            "rgba(0,0,0,0.8)",
            "rgba(0,0,0,0.8)",
          ]}
          style={tw`absolute h-full w-full z-0`}
        />
        <View style={tw`absolute z-10 h-full w-full`}>
          {/* Remodeling Header */}
          <TouchableOpacity onPress={() => router.back()}>
            <BlurView
              experimentalBlurMethod="dimezisBlurView"
              blurReductionFactor={500}
              intensity={120}
              tint="default"
              style={[
                styles.blurContainer,
                tw`py-4 px-7 max-w-40 flex-row items-center gap-6`,
              ]}
            >
              <SvgXml style={tw`font-Poppins`} xml={IconBackBlack} />
              <Text style={tw`text-black font-Poppins text-base`}>Back</Text>
            </BlurView>
          </TouchableOpacity>

          <View style={tw`flex-1 justify-center`}>
            {/* Location Input */}
            <View
              style={tw`rounded-full flex-row items-center justify-center px-4 py-3`}
            >
              <BlurView
                experimentalBlurMethod="dimezisBlurView"
                blurReductionFactor={500}
                intensity={120}
                tint="default"
                style={[
                  styles.blurContainer,
                  tw`py-5 px-7 flex-row items-center gap-3 w-full`,
                ]}
              >
                <SvgXml xml={IconLoctionBlack} />
                <Text style={tw`text-black font-PoppinsMedium text-lg`}>
                  Size of your home
                </Text>
              </BlurView>
            </View>

            <BlurView
              experimentalBlurMethod="dimezisBlurView"
              blurReductionFactor={500}
              intensity={120}
              tint="default"
              style={[styles.blurContainer, tw`py-9 px-7`]}
            >
              {sizeOptions.map((option) => (
                <TouchableOpacity
                  key={option.id}
                  style={tw`flex-row items-center border p-5 rounded-3xl mb-4`}
                  onPress={() => setSelectedSize(option.value)}
                >
                  <View
                    style={tw`w-6 h-6 rounded-full border-2 border-SPrimary mr-3 
                    justify-center items-center ${
                      selectedSize === option.value
                        ? "bg-SPrimary"
                        : "bg-transparent"
                    }`}
                  >
                    {selectedSize === option.value && (
                      <View style={tw`w-3 h-3 rounded-full bg-white`} />
                    )}
                  </View>
                  <Text style={tw`text-black font-PoppinsMedium  text-base `}>
                    {option.label}
                  </Text>
                </TouchableOpacity>
              ))}

              {/* Next Button */}
              <TouchableOpacity
                style={tw`bg-SPrimary rounded-2xl py-4 flex-row justify-center gap-3 items-center mt-6`}
                onPress={() =>
                  router.push("/services/servicesPages/bookNow/buttonType")
                }
                disabled={!selectedSize}
              >
                <Text
                  style={tw`text-white font-semibold font-PoppinsMedium text-lg`}
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
};

export default RadioInput;

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
