import { useTheme } from "@/app/context/ThemeProvider";
import {
  IconBackBlack,
  IconBackWhite,
  IconSCancledWhite,
  IconSModalCross,
  IconSModalCrossWhite,
  IconSpenddingWhite,
  IconSSuccessWhite,
} from "@/icons/icon";
import tw from "@/lib/tailwind";
import { router } from "expo-router";
import { Formik } from "formik";
import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import StarRating from "react-native-star-rating-widget";
import { SvgXml } from "react-native-svg";
import { Dialog, PanningProvider } from "react-native-ui-lib";

const NotificationServices = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [rating, setRating] = useState(2);
  const colorScheme = useTheme();

  return (
    <ScrollView style={tw`flex-1 bg-base-light dark:bg-base-dark px-4`}>
      <View style={tw``}>
        {/*  ------------ bottom header ------------------- */}
        <View style={tw`flex-row justify-between items-center my-5`}>
          <View style={tw`flex-row gap-8 justify-center items-center`}>
            <Pressable onPress={() => router.back()} style={tw` `}>
              <SvgXml
                xml={colorScheme === "dark" ? IconBackWhite : IconBackBlack}
              />
            </Pressable>
            <Text
              style={tw`font-DegularDisplaySemibold text-base text-black dark:text-white`}
            >
              Notifications
            </Text>
          </View>
          <Text> </Text>
        </View>

        <Pressable
          // onPress={() =>
          //   router.push("/services/servicesPages/messeges/messeging")
          // }
          style={tw`flex-row justify-between p-4   bg-[#D9EBFF] dark:bg-darkPrimary rounded-3xl items-center my-1.5`}
        >
          <View style={tw`flex-row justify-start items-center gap-4`}>
            <View
              style={tw`w-12 h-12 justify-center items-center bg-white dark:bg-deepGrey50 rounded-full`}
            >
              <SvgXml xml={IconSpenddingWhite} />
            </View>
            <View>
              <Text
                style={tw`font-DegularDisplayMedium text-lg text-[#007AFF] dark:text-[#007AFF]`}
              >
                Booking Pending
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
        <Pressable
          // onPress={() =>
          //   router.push("/services/servicesPages/messeges/messeging")
          // }
          style={tw`flex-row justify-between p-4   bg-[#FFDBDB] dark:bg-darkPrimary rounded-3xl items-center my-1.5`}
        >
          <View style={tw`flex-row justify-start items-center gap-4`}>
            <View
              style={tw`w-12 h-12 justify-center items-center bg-white dark:bg-deepGrey50 rounded-full`}
            >
              <SvgXml xml={IconSCancledWhite} />
            </View>
            <View>
              <Text
                style={tw`font-DegularDisplayMedium text-lg text-[#FF3737] dark:text-[#FF3737]`}
              >
                Booking Canceled
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
        <Pressable
          onPress={() => setIsModalVisible(true)}
          style={tw`flex-row justify-between p-4   bg-[#D3FFE5] dark:bg-darkPrimary rounded-3xl items-center my-1.5`}
        >
          <View style={tw`flex-row justify-start items-center gap-4`}>
            <View
              style={tw`w-12 h-12 justify-center items-center bg-white dark:bg-deepGrey50 rounded-full`}
            >
              <SvgXml xml={IconSSuccessWhite} />
            </View>
            <View>
              <Text
                style={tw`font-DegularDisplayMedium text-lg text-[#00B047] dark:text-[#00B047]`}
              >
                Booking successful
              </Text>
              <Text
                style={tw`font-DegularDisplayRegular text-sm text-deepGrey50 dark:text-white`}
              >
                Tap to review
              </Text>
            </View>
          </View>
          <Text></Text>
        </Pressable>
      </View>
      {/* ================== modal ====================== */}
      <Dialog
        width={"100%"}
        height={"45%"}
        visible={isModalVisible}
        containerStyle={tw`flex-1 bg-white dark:bg-base-dark rounded-3xl mx-5`}
        onDismiss={() => setIsModalVisible(false)}
        panDirection={PanningProvider.Directions.DOWN}
      >
        <View style={tw``}>
          <View style={tw`flex-row justify-between items-center px-4 my-3`}>
            <Text></Text>
            <Text
              style={tw`font-DegularDisplayMedium text-2xl text-black dark:text-white`}
            >
              Add review
            </Text>
            <SvgXml
              onPress={() => setIsModalVisible(false)}
              xml={
                colorScheme === "dark" ? IconSModalCrossWhite : IconSModalCross
              }
            />
          </View>

          <View style={tw`w-full justify-center items-center`}>
            {/* ==================== stare rating =================== */}
            <StarRating rating={rating} onChange={setRating} />
            <Text
              style={tw`font-DegularDisplayRegular text-xl text-black dark:text-white my-2 text-center`}
            >
              Tap to add your rating
            </Text>
          </View>

          <View style={tw`px-4 `}>
            <Formik
              initialValues={{ review: "" }}
              onSubmit={(values) => console.log(values)}
            >
              {({ handleChange, handleBlur, values }) => (
                <View>
                  <Text
                    style={tw`my-2 font-DegularDisplayRegular text-sm text-black dark:text-white`}
                  >
                    Review
                  </Text>
                  <TextInput
                    multiline
                    numberOfLines={6}
                    style={{
                      height: 120,
                      textAlignVertical: "top",
                      borderColor: "#ccc",
                      borderWidth: 1,
                      padding: 10,
                      borderRadius: 8,
                    }}
                    onChangeText={handleChange("review")}
                    onBlur={handleBlur("review")}
                    value={values.review}
                  />
                  <TouchableOpacity
                    onPress={() => setIsModalVisible(false)}
                    style={tw`w-full bg-SPrimary rounded-lg my-4 py-3`}
                  >
                    <Text
                      style={tw`font-DegularDisplayMedium text-lg text-white text-center`}
                    >
                      Submit
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
          </View>
        </View>
      </Dialog>
    </ScrollView>
  );
};

export default NotificationServices;
