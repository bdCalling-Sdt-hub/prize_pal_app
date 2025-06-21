import { IconBackBlack, IconBackWhite } from "@/icons/icon";
import tw from "@/lib/tailwind";
import Entypo from "@expo/vector-icons/Entypo";
import { router } from "expo-router";
import { Formik } from "formik";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Pressable, TextInput } from "react-native-gesture-handler";
import { SvgXml } from "react-native-svg";
import { useTheme } from "../context/ThemeProvider";

const changePass = () => {
  const [showCurrentPassword, setShowCurrentPassword] = React.useState(false);
  const [showNewPassword, setShowNewPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const { colorScheme } = useTheme();
  return (
    <KeyboardAvoidingView
      style={tw`bg-base-light dark:bg-base-dark h-full`}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={tw`flex-grow justify-between `}
        keyboardShouldPersistTaps="handled"
      >
        <View style={tw`flex-row justify-between items-center pl-6 my-5`}>
          <Pressable onPress={() => router.back()}>
            <View style={tw`flex-row gap-6 justify-center items-center`}>
              <SvgXml
                xml={colorScheme === "dark" ? IconBackWhite : IconBackBlack}
              />
              <Text
                style={tw`font-DegularDisplaySemibold text-base text-black dark:text-white`}
              >
                Change Password
              </Text>
            </View>
          </Pressable>
          <Text> </Text>
        </View>
        <View style={tw`flex-grow justify-between  p-5 `}>
          <Formik
            initialValues={{
              current_password: "",
              new_password: "",
              confirm_password: "",
            }}
            onSubmit={(values) => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
              <View style={tw`flex-grow gap-5`}>
                {/* current_password */}
                <View
                  style={tw`relative  border-2 dark:border-primary h-12 rounded-full px-3 `}
                >
                  <View style={tw`flex-row items-center gap-3 `}>
                    <Entypo name="lock" size={24} color="#777777" />
                    <TextInput
                      autoFocus={true}
                      style={tw`flex-1 text-base font-Poppins dark:text-primary`}
                      placeholderTextColor="#777777"
                      placeholder="Enter your current password"
                      value={values.current_password}
                      onChangeText={handleChange("current_password")}
                      onBlur={handleBlur("current_password")}
                      secureTextEntry={!showCurrentPassword}
                    />
                  </View>
                  <Entypo
                    style={tw`absolute right-2 top-3 `}
                    name={showCurrentPassword ? "eye" : "eye-with-line"}
                    size={20}
                    color="#777"
                    onPress={() => setShowCurrentPassword(!showCurrentPassword)}
                  />
                </View>
                {/*New Password */}
                <View
                  style={tw`relative dark:border-primary  border-2 h-12 rounded-full px-3 `}
                >
                  <View style={tw`flex-row items-center gap-3`}>
                    <Entypo name="lock" size={24} color="#777777" />
                    <TextInput
                      placeholderTextColor="#777777"
                      style={tw`flex-1 text-base font-Poppins dark:text-primary`}
                      placeholder="Enter New Password"
                      value={values.new_password}
                      onChangeText={handleChange("new_password")}
                      secureTextEntry={!showNewPassword}
                      onBlur={handleBlur("new_password")}
                    />
                  </View>
                  <Entypo
                    name={showNewPassword ? "eye" : "eye-with-line"}
                    style={tw`absolute right-2 top-3 `}
                    size={20}
                    color="#777"
                    onPress={() => setShowNewPassword(!showNewPassword)}
                  />
                </View>
                {/* Confirm New Password */}
                <View
                  style={tw`relative dark:border-primary  border-2 h-12 rounded-full px-3 `}
                >
                  <View style={tw`flex-row items-center gap-3`}>
                    <Entypo name="lock" size={24} color="#777777" />
                    <TextInput
                      placeholderTextColor="#777777"
                      style={tw`flex-1 text-base font-Poppins dark:text-primary`}
                      placeholder="Confirm New Password"
                      value={values.confirm_password}
                      onChangeText={handleChange("confirm_password")}
                      onBlur={handleBlur("confirm_password")}
                      secureTextEntry={!showConfirmPassword}
                    />
                  </View>
                  <Entypo
                    style={tw`absolute right-2 top-3 `}
                    name={showConfirmPassword ? "eye" : "eye-with-line"}
                    size={20}
                    color="#777"
                    onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                </View>
              </View>
            )}
          </Formik>
          <TouchableOpacity
            style={tw`bg-primaryBlack dark:bg-primary rounded-full mb-6`}
          >
            <Text
              style={tw`text-primaryFF dark:text-primaryBlack text-center font-semibold text-lg py-[14px] font-PoppinsBold`}
            >
              Update Password
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default changePass;
