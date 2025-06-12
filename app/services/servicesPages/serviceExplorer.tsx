import { useTheme } from "@/app/context/ThemeProvider";
import {
  IconBackBlack,
  IconBackWhite,
  IconLoction,
  IconSearch,
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
import { SvgXml } from "react-native-svg";

const ServiceExplorer = () => {
  const { colorScheme } = useTheme();

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={tw`flex-1 px-5 bg-base-light dark:bg-base-dark`}>
          {/* ================== head bar ================  */}
          <View style={tw`flex-row justify-between items-center my-3`}>
            <View style={tw`flex-row gap-8 justify-center items-center`}>
              <Pressable onPress={() => router.back()} style={tw` `}>
                <SvgXml
                  xml={colorScheme === "dark" ? IconBackWhite : IconBackBlack}
                />
              </Pressable>
              <Text
                style={tw`font-DegularDisplaySemibold text-base text-black dark:text-white`}
              >
                Search for a cleaner
              </Text>
            </View>
            <Text></Text>
          </View>

          <View style={tw`flex-1 justify-between `}>
            <View style={tw`border border-deepGrey rounded-2xl p-3 my-5`}>
              {/* =======================  search bar ===================== */}
              <Formik
                initialValues={{ searchText: "" }}
                onSubmit={(values) => console.log("Submitted:", values)}
              >
                {({ handleChange, handleBlur, values }) => {
                  if (values.searchText.length > 0) {
                    console.log("Searching for:", values.searchText);
                  }
                  return (
                    <View
                      style={tw`bg-primary dark:bg-[#3D3D3D]  my-2 rounded-full flex-row items-center pl-6`}
                    >
                      <SvgXml xml={IconSearch} />
                      <TextInput
                        style={tw`h-[60px] flex-1 pl-3 `}
                        placeholder="New York"
                        placeholderTextColor="#888888"
                        onChangeText={handleChange("searchText")}
                        onBlur={handleBlur("searchText")}
                        value={values.searchText}
                      />
                    </View>
                  );
                }}
              </Formik>
              <Formik
                initialValues={{ searchText: "" }}
                onSubmit={(values) => console.log("Submitted:", values)}
              >
                {({ handleChange, handleBlur, values }) => {
                  if (values.searchText.length > 0) {
                    console.log("Searching for:", values.searchText);
                  }
                  return (
                    <View
                      style={tw`bg-primary dark:bg-[#3D3D3D]  my-2 rounded-full flex-row items-center pl-6`}
                    >
                      <SvgXml xml={IconLoction} />
                      <TextInput
                        style={tw`h-[60px] flex-1 pl-3 `}
                        placeholder="Your state"
                        placeholderTextColor="#888888"
                        onChangeText={handleChange("searchText")}
                        onBlur={handleBlur("searchText")}
                        value={values.searchText}
                      />
                    </View>
                  );
                }}
              </Formik>
            </View>

            <TouchableOpacity
              onPress={() =>
                router.push("/services/servicesPages/serviceProvider")
              }
              style={tw`bg-SPrimary py-3 mb-3 rounded-full`}
            >
              <Text
                style={tw`text-primaryFF text-center font-semibold text-lg  `}
              >
                Search
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ServiceExplorer;
