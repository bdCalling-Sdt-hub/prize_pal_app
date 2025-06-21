import { servicesSeven } from "@/assets/image";
import { IconAdd, IconBackBlack, IconCloseDark, IconNext } from "@/icons/icon";
import tw from "@/lib/tailwind";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SvgXml } from "react-native-svg";

export default function buttonType() {
  const [visible, setVisible] = useState(false);

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
          source={servicesSeven}
          contentFit="cover"
          style={tw`h-full w-full absolute justify-center items-center z-0 opacity-100`}
        />
        <LinearGradient
          colors={[
            "transparent",
            "transparent",
            "transparent",
            "rgba(0,0,0,0.8)",
            "rgba(0,0,0,0.8)",
          ]}
          style={tw`absolute h-full w-full z-0`}
        />
        <View style={tw` absolute z-10 h-full  w-full`}>
          {/* Remodeling Header */}
          <TouchableOpacity onPress={() => router.back()}>
            <BlurView
              experimentalBlurMethod="dimezisBlurView"
              blurReductionFactor={40}
              intensity={120}
              tint="default"
              style={[
                styles.blurContainer,
                tw`py-4 px-7 max-w-40 flex-row items-center gap-3`,
              ]}
            >
              <SvgXml style={tw`font-Poppins`} xml={IconBackBlack} />
              <Text style={tw`text-black font-Poppins text-base `}>
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
                intensity={120}
                tint="default"
                style={[
                  styles.blurContainer,
                  tw` py-5 px-7 flex-row items-center gap-3 w-full `,
                ]}
              >
                <Text style={tw` text-black font-PoppinsMedium  text-lg`}>
                  Quantity of Rooms
                </Text>
              </BlurView>
            </View>
            <BlurView
              experimentalBlurMethod="dimezisBlurView"
              blurReductionFactor={40}
              intensity={120}
              tint="default"
              style={[styles.blurContainer, tw`py-9 px-7 flex-col gap-5`]}
            >
              {/* Next Button */}
              <TouchableOpacity
                style={tw`bg-primary  rounded-2xl py-4 flex-row justify-center gap-3 items-center`}
                onPress={() => setVisible(true)}
              >
                <SvgXml xml={IconAdd} />
                <Text
                  style={tw`text-SPrimary bg-primary  font-semibold font-PoppinsMedium text-lg `}
                >
                  Add
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`bg-SPrimary  rounded-2xl py-4 flex-row justify-center gap-3 items-center`}
                onPress={() =>
                  router.push("/services/servicesPages/bookNow/calendarType")
                }
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
        <Modal
          transparent={true}
          animationType="slide"
          visible={visible}
          onRequestClose={() => setVisible(false)}
          style={tw`bg-orange-500`}
        >
          <View style={tw`flex-1  justify-end `}>
            <View style={tw` bg-base-light dark:bg-base-dark rounded-t-2xl`}>
              <View
                style={tw`flex-row  justify-between bg-SPrimary p-4 items-center rounded-t-2xl`}
              >
                <Text style={tw`font-PoppinsSemiBold text-xl`}></Text>
                <Text style={tw`font-PoppinsSemiBold text-xl text-primary `}>
                  Add Room
                </Text>
                <View>
                  <TouchableOpacity
                    style={tw`border w-10 flex-row border-white rounded-full  items-center justify-center py-3`}
                    onPress={() => setVisible(false)}
                  >
                    <SvgXml xml={IconCloseDark} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={tw`mx-7 my-9`}>
                <TextInput
                  placeholder="Type name of the room"
                  placeholderTextColor="#777777"
                  style={[
                    tw` border rounded-2xl px-4 dark:border-white py-5 mb-4 text-black font-PoppinsMedium  text-base`,
                  ]}
                />
                <TextInput
                  placeholder="Quantity"
                  placeholderTextColor="#777777"
                  style={[
                    tw` border dark:border-white rounded-2xl px-4 py-5 mb-4 text-black dark:text-primary font-PoppinsMedium  text-base`,
                  ]}
                />

                <TouchableOpacity
                  style={tw`bg-SPrimary mt-9 rounded-2xl py-4 flex-row justify-center gap-3 items-center`}
                >
                  <Text
                    style={tw`text-white font-semibold font-PoppinsMedium text-lg `}
                  >
                    Save
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
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
