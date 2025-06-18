import AuthHeader from "@/components/AuthHeader";
import tw from "@/lib/tailwind";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { Link, router } from "expo-router";
import { Formik } from "formik";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useTheme } from "../context/ThemeProvider";

const SetNewPassword = () => {
  const [isChecked, setChecked] = useState(false);

  const { colorScheme } = useTheme();

  const validate = (values: any) => {
    const errors: any = {};

    // if (values.password !== values.confirmPassword) {
    //   errors.email = "Password is not match";
    //   alert("Password is not match");
    // }

    return errors;
  };

  return (
    <KeyboardAvoidingView
      style={tw`bg-base-light dark:bg-base-dark relative`}
      enabled={true}
      behavior={"padding"}
    >
      <View
        style={tw`w-[36px] h-[36px] dark:bg-deepGrey bg-primary200 m-4 rounded-md  flex items-center justify-center absolute z-10 top-0`}
      >
        <Link href="/auth/otp">
          <AntDesign
            name="left"
            size={24}
            color={colorScheme === "dark" ? "white" : "black"}
          />
        </Link>
      </View>
      <ScrollView
        contentContainerStyle={tw` flex-grow items-center  h-full justify-center`}
      >
        <View
          style={tw`flex-1 justify-center items-center w-full bg-base-light dark:bg-base-dark`}
        >
          {/* logo and title reper */}
          <AuthHeader title="Set your new password" />
          {/* logo and title reper end*/}
          <View style={tw` w-full p-4 rounded-t-[2rem] pt-8 pb-5`}>
            <Text
              style={tw`font-normal  mb-8 font-Poppins text-base dark:text-primaryFF `}
            >
              It must be different from your previous password.
            </Text>
            <Formik
              initialValues={{ password: "", confirmPassword: "" }}
              onSubmit={(values) => {
                console.log(values);
              }}
              validate={validate}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <View style={tw` bg-base-light dark:bg-base-dark`}>
                  <View
                    style={tw`flex-row items-center gap-2 dark:border-primary font-Poppins border-2 h-12 rounded-full px-3 mb-6`}
                  >
                    <Entypo name="lock" size={24} color="#777777" />
                    <TextInput
                      style={tw`font-Poppins text-primary`}
                      placeholderTextColor="#777777"
                      placeholder="Enter password"
                      value={values.password}
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                    />
                  </View>

                  <View
                    style={tw`flex-row items-center gap-2 dark:border-primary font-Poppins border-2 h-12 rounded-full px-3 `}
                  >
                    <Entypo name="lock" size={24} color="#777777" />
                    <TextInput
                      style={tw`font-Poppins text-primary`}
                      placeholderTextColor="#777777"
                      placeholder="Confirm password"
                      value={values.confirmPassword}
                      onChangeText={handleChange("confirmPassword")}
                      onBlur={handleBlur("confirmPassword")}
                    />
                  </View>
                  <TouchableOpacity
                    style={tw`bg-primaryBlack dark:bg-primaryFF rounded-full mt-9`}
                    onPress={() => {
                      handleSubmit();
                      router.replace("/auth/successfullMassge");
                    }}
                  >
                    <Text
                      style={tw`text-primaryFF dark:text-primaryBlack text-center  font-PoppinsBold text-lg py-[14px] `}
                    >
                      Change password
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SetNewPassword;
