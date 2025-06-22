import { useTheme } from "@/app/context/ThemeProvider";
import {
  IconAddBlack,
  IconAddWhite,
  IconBackBlack,
  IconBackWhite,
  IconEdit,
  IconEditDark,
  IconHome,
  IconHomeBlack,
  IconNext,
  IconTime,
  IconTimeDark,
} from "@/icons/icon";
import tw from "@/lib/tailwind";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SvgXml } from "react-native-svg";

const booking = () => {
  const { colorScheme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={tw`bg-base-light dark:bg-base-dark flex-1`}>
      <ScrollView contentContainerStyle={tw`flex-grow justify-center relative`}>
        <View style={tw`bg-base-light dark:bg-base-dark flex-1 p-4`}>
          <View style={tw`flex-row justify-between pb-3`}>
            <TouchableOpacity
              style={tw`py-4 px-7 dark:bg-darkPrimary flex-row items-center gap-3 border rounded-2xl border-black dark:border-deepGrey20`}
              onPress={() => router.back()}
            >
              <SvgXml
                style={tw`font-Poppins`}
                xml={colorScheme === "dark" ? IconBackWhite : IconBackBlack}
              />
              <Text
                style={tw`text-black font-Poppins text-base dark:text-white`}
              >
                Back
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`py-2 px-3 dark:bg-darkPrimary flex-row  items-center gap-3 border rounded-2xl border-black dark:border-deepGrey20`}
              onPress={() =>
                router.push("/services/servicesPages/serviceProviderProfile")
              }
            >
              <SvgXml
                style={tw`font-Poppins`}
                xml={colorScheme === "dark" ? IconAddBlack : IconAddWhite}
              />
              <Text
                style={tw`text-black font-Poppins text-base dark:text-white `}
              >
                Add another service
              </Text>
            </TouchableOpacity>
          </View>

          <View style={tw`bg-primary dark:bg-darkPrimary rounded-2xl p-5 mt-4`}>
            <View style={tw`flex-row gap-4  items-center pb-5`}>
              <SvgXml
                style={tw`font-Poppins`}
                xml={colorScheme === "dark" ? IconHome : IconHomeBlack}
              />
              <Text style={tw`font-PoppinsMedium text-lg dark:text-primary`}>
                Remodeling details
              </Text>
            </View>
            {/* zip code */}
            <View style={tw`flex-row gap-3 w-full mb-3`}>
              <View
                style={tw`border py-3 px-7 flex-row justify-between w-4/5  rounded-2xl dark:border-deepGrey20 dark:text-primary `}
              >
                <Text
                  style={tw`text-base font-PoppinsMedium dark:text-primary`}
                >
                  Zip Code
                </Text>
                <Text style={tw`font-PoppinsLight text-base dark:text-primary`}>
                  19801
                </Text>
              </View>
              <View
                style={tw`border w-1/6 flex-row items-center justify-center dark:border-deepGrey20 rounded-2xl dark:text-primary `}
              >
                <SvgXml
                  style={tw`font-Poppins`}
                  xml={colorScheme === "dark" ? IconEdit : IconEditDark}
                />
              </View>
            </View>
            {/* zip code end*/}
            {/* zip code */}
            <View
              style={tw`flex-row gap-3 w-full mb-3 border p-2 rounded-2xl dark:border-deepGrey20`}
            >
              <View
                style={tw` py-2 px-3  w-4/5   dark:border-deepGrey20 dark:text-primary `}
              >
                <Text
                  style={tw`text-base font-PoppinsMedium dark:text-primary`}
                >
                  Issue
                </Text>
                <Text
                  style={tw`font-PoppinsLight text-base dark:text-[#AFAFAF]`}
                >
                  Water leaking
                </Text>
              </View>
              <View
                style={tw`border w-1/6 flex-row items-center justify-center dark:border-deepGrey20 rounded-2xl dark:text-primary `}
              >
                <SvgXml
                  style={tw`font-Poppins`}
                  xml={colorScheme === "dark" ? IconEdit : IconEditDark}
                />
              </View>
            </View>
            <View
              style={tw`flex-row gap-3 w-full mb-3 border p-2 rounded-2xl dark:border-deepGrey20`}
            >
              <View
                style={tw` py-2 px-3  w-4/5   dark:border-deepGrey20 dark:text-primary `}
              >
                <Text
                  style={tw`text-base font-PoppinsMedium dark:text-primary`}
                >
                  Issue
                </Text>
                <Text
                  style={tw`font-PoppinsLight text-base dark:text-[#AFAFAF]`}
                >
                  Water leaking
                </Text>
              </View>
              <View
                style={tw`border w-1/6 flex-row items-center justify-center dark:border-deepGrey20 rounded-2xl dark:text-primary `}
              >
                <SvgXml
                  style={tw`font-Poppins`}
                  xml={colorScheme === "dark" ? IconEdit : IconEditDark}
                />
              </View>
            </View>
            <View
              style={tw`flex-row gap-3 w-full mb-3 border p-2 rounded-2xl dark:border-deepGrey20`}
            >
              <View
                style={tw` py-2 px-3  w-4/5   dark:border-deepGrey20 dark:text-primary `}
              >
                <Text
                  style={tw`text-base font-PoppinsMedium dark:text-primary`}
                >
                  Issue
                </Text>
                <Text
                  style={tw`font-PoppinsLight text-base dark:text-[#AFAFAF]`}
                >
                  Water leaking
                </Text>
              </View>
              <View
                style={tw`border w-1/6 flex-row items-center justify-center dark:border-deepGrey20 rounded-2xl dark:text-primary `}
              >
                <SvgXml
                  style={tw`font-Poppins`}
                  xml={colorScheme === "dark" ? IconEdit : IconEditDark}
                />
              </View>
            </View>

            {/* zip code end*/}
          </View>
          {/* booking details*/}
          <View style={tw`bg-primary dark:bg-darkPrimary rounded-2xl p-5 mt-4`}>
            <View style={tw`flex-row gap-4  items-center pb-5`}>
              <SvgXml
                style={tw`font-Poppins`}
                xml={colorScheme === "dark" ? IconTimeDark : IconTime}
              />
              <Text style={tw`font-PoppinsMedium text-lg dark:text-primary`}>
                Booking details
              </Text>
            </View>
            {/* zip code */}
            <View style={tw`flex-row gap-3 w-full mb-3`}>
              <View
                style={tw`border py-3 px-7 flex-row justify-between w-4/5  rounded-2xl dark:border-deepGrey20 dark:text-primary `}
              >
                <Text
                  style={tw`text-base font-PoppinsMedium dark:text-primary`}
                >
                  Date
                </Text>
                <Text style={tw`font-PoppinsLight text-base dark:text-primary`}>
                  11-06-2025
                </Text>
              </View>
              <View
                style={tw`border w-1/6 flex-row items-center justify-center dark:border-deepGrey20 rounded-2xl dark:text-primary `}
              >
                <SvgXml
                  style={tw`font-Poppins`}
                  xml={colorScheme === "dark" ? IconEdit : IconEditDark}
                />
              </View>
            </View>
            {/* zip code */}
            <View style={tw`flex-row gap-3 w-full mb-3`}>
              <View
                style={tw`border py-3 px-7 flex-row justify-between w-4/5  rounded-2xl dark:border-deepGrey20 dark:text-primary `}
              >
                <Text
                  style={tw`text-base font-PoppinsMedium dark:text-primary`}
                >
                  Time
                </Text>
                <Text style={tw`font-PoppinsLight text-base dark:text-primary`}>
                  02:00 PM
                </Text>
              </View>
              <View
                style={tw`border w-1/6 flex-row items-center justify-center dark:border-deepGrey20 rounded-2xl dark:text-primary `}
              >
                <SvgXml
                  style={tw`font-Poppins`}
                  xml={colorScheme === "dark" ? IconEdit : IconEditDark}
                />
              </View>
            </View>
          </View>
          {/* Book button */}
          <TouchableOpacity
            style={tw`bg-SPrimary mt-7  rounded-2xl py-4 flex-row justify-center gap-3 items-center`}
            onPress={() => setIsVisible(true)}
          >
            <Text
              style={tw`text-white font-semibold font-PoppinsMedium text-lg `}
            >
              Book
            </Text>
            <SvgXml xml={IconNext} />
          </TouchableOpacity>
        </View>
        <Modal
          visible={isVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setIsVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View
              style={tw`bg-base-light dark:bg-darkSecoundary rounded-xl p-6 w-11/12 max-w-md`}
            >
              <ActivityIndicator
                size="large"
                color="#007AFF"
                style={tw`mb-4 self-center`}
              />

              {/* Header */}
              <Text
                style={tw`text-center text-[#007AFF] text-3xl font-DegularDisplayBold  mb-4`}
              >
                Thanks for using our service.
              </Text>

              {/* Confirmation Number */}
              <View style={tw`items-center my-6`}>
                <Text
                  style={tw`text-center text-deepGrey80 dark:text-primary text-xl font-DegularDisplayLight `}
                >
                  Your confirmation number is #45223661. A confirmation email
                  will be sent to you shortly.
                </Text>
                <Text
                  style={tw`text-center text-SPrimary text-2xl font-DegularDisplayBold`}
                >
                  {/* {confirmationNumber}   */}
                </Text>
              </View>

              {/* Got it Button */}
              <TouchableOpacity
                style={tw`bg-SPrimary py-3 rounded-lg mb-6`}
                onPress={() => setIsVisible(false)}
              >
                <Text
                  style={tw`text-center text-white text-base font-DegularDisplaySemibold`}
                >
                  Got it
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

export default booking;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});
