import { useTheme } from "@/app/context/ThemeProvider";
import {
  IconBackBlack,
  IconBackWhite,
  IconCall,
  IconEmail,
  IconLoction,
  IconUser,
} from "@/icons/icon";
import tw from "@/lib/tailwind";
import { router } from "expo-router";
import { Formik } from "formik";
import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { ALERT_TYPE, Toast } from "react-native-alert-notification";
import { SvgXml } from "react-native-svg";

const editServicesProfile = () => {
  const { colorScheme } = useTheme();
  const user = {
    name: "Majsharlaya",
    email: "example@gmail.com",
    phone: "+1235698745",
    location: "Dhaka, bangladesh",
  };

  return (
    <KeyboardAvoidingView style={tw`bg-base-light dark:bg-base-dark`}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={tw` h-[100%] m-5`}>
          {/*  ------------ bottom header ------------------- */}
          <View style={tw`flex-row justify-between items-center`}>
            <View style={tw`flex-row  justify-center items-center`}>
              <Pressable
                onPress={() => router.back()}
                style={tw`w-14 h-14 flex-row gap-5 justify-center items-center rounded-full `}
              >
                <SvgXml
                  xml={colorScheme === "dark" ? IconBackWhite : IconBackBlack}
                />
                <Text
                  style={tw`font-DegularDisplaySemibold text-base text-black gap-5 dark:text-white`}
                >
                  Back
                </Text>
              </Pressable>
            </View>
            <Text> </Text>
          </View>

          <View>
            <Formik
              initialValues={{
                name: "Majsharlaya",
                email: "example@gmail.com",
                phone: "+1235698745",
                location: "Dhaka, bangladesh",
              }}
              onSubmit={(values) => console.log(values)}
            >
              {({ values, setFieldValue, handleSubmit }) => {
                return (
                  <View style={tw`flex-col justify-between h-[92%]`}>
                    <View style={tw`pt-6`}>
                      <View
                        style={tw`flex-row items-center gap-6 border dark:border-deepGreycc mb-3 rounded-full px-5 h-14 overflow-hidden`}
                      >
                        <SvgXml xml={IconUser} />
                        <TextInput
                          value={values.name}
                          style={tw` dark:text-deepGreycc`}
                          onChangeText={(tex) => setFieldValue("name", tex)}
                        />
                      </View>
                      <View
                        style={tw`flex-row items-center gap-6 border dark:border-deepGreycc mb-3 rounded-full px-5 h-14 overflow-hidden`}
                      >
                        <SvgXml xml={IconEmail} />
                        <TextInput
                          value={values.email}
                          style={tw` dark:text-deepGreycc`}
                          onChangeText={(tex) => setFieldValue("email", tex)}
                        />
                      </View>
                      <View
                        style={tw`flex-row items-center gap-6 border dark:border-deepGreycc mb-3 rounded-full px-5 h-14 overflow-hidden`}
                      >
                        <SvgXml xml={IconCall} />
                        <TextInput
                          value={values.phone}
                          style={tw` dark:text-deepGreycc`}
                          onChangeText={(tex) => setFieldValue("phone", tex)}
                        />
                      </View>
                      <View
                        style={tw`flex-row items-center gap-6 border dark:border-deepGreycc mb-3 rounded-full px-5 h-14 overflow-hidden`}
                      >
                        <SvgXml xml={IconLoction} />
                        <TextInput
                          value={values.location}
                          style={tw` dark:text-deepGreycc`}
                          onChangeText={(tex) => setFieldValue("location", tex)}
                        />
                      </View>
                    </View>

                    <TouchableOpacity
                      onPress={() => {
                        router.back();
                        Toast.show({
                          type: ALERT_TYPE.SUCCESS,
                          title: "Success",
                          textBody: "Congrats! Update your profile success",
                        });
                      }}
                      style={tw`bg-SPrimary py-3 rounded-full`}
                    >
                      <Text
                        style={tw`text-primaryFF text-center font-semibold text-lg  `}
                      >
                        Edit Profile
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
            </Formik>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default editServicesProfile;
