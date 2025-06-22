import Btn from "@/components/Btn";
import { IconBackBlack, IconBackWhite, IconUser } from "@/icons/icon";
import tw from "@/lib/tailwind";
import { router } from "expo-router";
import { Formik } from "formik";
import React from "react";
import {
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SvgXml } from "react-native-svg";
import { useTheme } from "../context/ThemeProvider";

const editProfile = () => {
  const { colorScheme } = useTheme();

  const user = {
    name: "Majsharlaya",
    email: "example@gmail.com",
    phone: "+1235698745",
    location: "Dhaka, bangladesh",
  };

  return (
    <KeyboardAvoidingView style={tw` bg-base-light flex-1 dark:bg-base-dark `}>
      <View style={tw`flex-row justify-between items-center pl-6 my-5`}>
        <Pressable onPress={() => router.back()} style={tw` `}>
          <View style={tw`flex-row gap-6 justify-center items-center`}>
            <SvgXml
              xml={colorScheme === "dark" ? IconBackWhite : IconBackBlack}
            />
            <Text
              style={tw`font-DegularDisplaySemibold text-base text-black dark:text-white`}
            >
              Back
            </Text>
          </View>
        </Pressable>
        <Text> </Text>
      </View>

      <ScrollView
        contentContainerStyle={tw`flex-grow justify-center dark:bg-base-dark  bg-base-light `}
      >
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
              <View
                style={tw`flex-1 justify-between bg-base-light dark:bg-base-dark p-4`}
              >
                <View style={tw`pt-6`}>
                  <View
                    style={tw`flex-row items-center gap-6 border dark:border-primaryFF dark:bg-darkPrimary mb-3 rounded-full px-5 h-14 overflow-hidden`}
                  >
                    <SvgXml xml={IconUser} />
                    <TextInput
                      style={tw`dark:text-primaryFF`}
                      value={values.name}
                      onChangeText={(tex) => setFieldValue("name", tex)}
                    />
                  </View>
                  <View
                    style={tw`flex-row items-center gap-6 border dark:border-primaryFF dark:bg-darkPrimary mb-3 rounded-full px-5 h-14 overflow-hidden`}
                  >
                    <SvgXml xml={IconUser} />
                    <TextInput
                      style={tw`dark:text-primaryFF`}
                      value={values.email}
                      onChangeText={(tex) => setFieldValue("email", tex)}
                    />
                  </View>
                  <View
                    style={tw`flex-row items-center gap-6 border dark:border-primaryFF dark:bg-darkPrimary mb-3 rounded-full px-5 h-14 overflow-hidden`}
                  >
                    <SvgXml xml={IconUser} />
                    <TextInput
                      style={tw`dark:text-primaryFF`}
                      value={values.phone}
                      onChangeText={(tex) => setFieldValue("phone", tex)}
                    />
                  </View>
                  <View
                    style={tw`flex-row items-center gap-6 border dark:border-primaryFF dark:bg-darkPrimary mb-3 rounded-full px-5 h-14 overflow-hidden`}
                  >
                    <SvgXml xml={IconUser} />
                    <TextInput
                      style={tw`dark:text-primaryFF`}
                      value={values.location}
                      onChangeText={(tex) => setFieldValue("location", tex)}
                    />
                  </View>
                </View>

                <Btn>
                  <TouchableOpacity onPress={() => handleSubmit()}>
                    <View
                      style={tw`flex-row justify-center items-center gap-3`}
                    >
                      <Text
                        style={tw`text-primaryFF dark:text-base-dark text-center font-semibold text-lg  `}
                      >
                        Save changes
                      </Text>
                    </View>
                  </TouchableOpacity>
                </Btn>
              </View>
            );
          }}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default editProfile;
