import AuthHeader from "@/components/AuthHeader";
import tw from "@/lib/tailwind";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Checkbox from "expo-checkbox";
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

const Login = () => {
  const [isChecked, setChecked] = useState(false);
  const validate = (values: any) => {
    const errors: any = {};
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.email.includes("@")) {
      errors.email = "Invalid email";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  return (
    <KeyboardAvoidingView
      style={tw`flex-1 `}
      enabled={true}
      behavior={"padding"}
    >
      <ScrollView
        contentContainerStyle={tw`flex-grow justify-center dark:bg-base-dark  bg-base-light `}
      >
        <View style={tw`flex-1 justify-center items-center `}>
          {/* logo and title reper */}
          <AuthHeader title="Login to your account" />
          {/* logo and title reper end*/}
          <View style={tw` w-full p-4 rounded-t-[2rem] pt-8 pb-5`}>
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={(values) => {
                console.log(values);
              }}
              validate={validate}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                touched,
                errors,
              }) => (
                <View style={tw`dark:bg-base-dark  bg-base-light`}>
                  <View
                    style={tw`flex-row items-center gap-2 border-2 dark:border-primary h-12 rounded-full px-3 mb-6 font-Poppins`}
                  >
                    <MaterialIcons
                      name="email"
                      size={24}
                      color="#777777"
                      style={tw`mr-2`}
                    />
                    <TextInput
                      autoFocus={true}
                      placeholderTextColor="#777777"
                      style={tw`flex-1 text-base font-Poppins dark:text-primary`}
                      placeholder="Enter your email"
                      value={values.email}
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                    />
                  </View>

                  <View
                    style={tw`flex-row items-center gap-2 border-2 dark:border-primary h-12 rounded-full px-3`}
                  >
                    <Entypo
                      name="lock"
                      style={tw`mr-2`}
                      size={24}
                      color="#777777"
                    />
                    <TextInput
                      autoFocus={true}
                      style={tw`flex-1 text-base font-Poppins dark:text-primary`}
                      placeholderTextColor="#777777"
                      placeholder="Enter your password"
                      value={values.password}
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                    />
                  </View>
                  <View style={tw`my-7 flex-row justify-between items-center`}>
                    <View style={tw`flex-row gap-3`}>
                      <Checkbox
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? "#4630EB" : undefined}
                      />
                      <Text
                        style={tw`font-medium text-sm dark:text-primary font-PoppinsSemiBold`}
                      >
                        Remember me
                      </Text>
                    </View>
                    <Link href="/auth/forgot_password">
                      <Text
                        style={tw`text-primaryBlack underline dark:text-primary font-medium text-sm  font-PoppinsSemiBold`}
                      >
                        Forgot password
                      </Text>
                    </Link>
                  </View>

                  <TouchableOpacity
                    style={tw`bg-primaryBlack dark:bg-primary rounded-full`}
                    onPress={() => {
                      handleSubmit();
                      router.replace("/choose_r_s");
                    }}
                  >
                    <Text
                      style={tw`text-primaryFF dark:text-primaryBlack text-center font-semibold text-lg py-[14px] font-PoppinsBold`}
                    >
                      Login
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
          </View>
        </View>
        <View>
          <Text
            style={tw` w-full dark:text-primary font-medium pb-6 text-base text-center  font-PoppinsSemiBold `}
          >
            Don’t have an account ?
            <TouchableOpacity onPress={() => router.push("/auth/register")}>
              <Text
                style={tw`text-primaryBlack underline h-11 text-base p-2 dark:text-darkText`}
              >
                Register
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
