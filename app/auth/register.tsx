import AuthHeader from "@/components/AuthHeader";
import tw from "@/lib/tailwind";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
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

const Register = () => {
  const [value, setValue] = useState(false);
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
      style={tw`flex-1`}
      enabled={true}
      behavior={"padding"}
    >
      <ScrollView contentContainerStyle={tw`flex-grow justify-center`}>
        <View
          style={tw`flex-1 justify-center items-center bg-base-light dark:bg-base-dark`}
        >
          {/* logo and title reper */}
          <AuthHeader title="Register Your Account" />
          {/* logo and title reper end*/}

          <View style={tw` w-full p-4 rounded-t-[2rem] pt-8 pb-5`}>
            <Formik
              initialValues={{
                name: "",
                email: "",
                address: "",
                password: "",
                confirmPassword: "",
              }}
              onSubmit={(values) => {
                console.log(values, "all value");
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
                <View style={tw`bg-base-light dark:bg-base-dark`}>
                  <View
                    style={tw`flex-row items-center gap-2 border-2 dark:border-primary h-12 rounded-full px-3 mb-6`}
                  >
                    <FontAwesome5
                      name="user-alt"
                      style={tw`mr-2`}
                      size={24}
                      color="#777777"
                    />
                    <TextInput
                      placeholder="Enter your name"
                      placeholderTextColor="#777777"
                      style={tw`font-Poppins dark:text-primary`}
                      value={values.name}
                      onChangeText={handleChange("name")}
                      onBlur={handleBlur("name")}
                      touched={touched.name}
                      errorText={errors.name}
                    />
                  </View>
                  <View
                    style={tw`flex-row items-center gap-2 border-2 dark:border-primary h-12 rounded-full px-3 mb-6`}
                  >
                    <MaterialIcons
                      name="email"
                      size={24}
                      color="#777777"
                      style={tw`mr-2`}
                    />
                    <TextInput
                      placeholder="Enter your email"
                      placeholderTextColor="#777777"
                      style={tw`font-Poppins dark:text-primary`}
                      value={values.email}
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      touched={touched.email}
                      errorText={errors.email}
                    />
                  </View>
                  <View
                    style={tw`flex-row items-center gap-2 border-2 dark:border-primary h-12 rounded-full px-3 mb-6`}
                  >
                    <FontAwesome6
                      name="location-dot"
                      size={24}
                      style={tw`mr-2`}
                      color="#777777"
                    />

                    <TextInput
                      placeholder="Enter your Address"
                      placeholderTextColor="#777777"
                      style={tw`font-Poppins dark:text-primary`}
                      value={values.address}
                      onChangeText={handleChange("address")}
                      onBlur={handleBlur("address")}
                      touched={touched.address}
                      errorText={errors.address}
                    />
                  </View>
                  <View
                    style={tw`flex-row items-center gap-2 border-2 dark:border-primary h-12 rounded-full px-3 mb-6`}
                  >
                    <Entypo name="lock" size={24} color="#777777" />
                    <TextInput
                      placeholder="Enter password"
                      placeholderTextColor="#777777"
                      style={tw`font-Poppins dark:text-primary`}
                      value={values.password}
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      touched={touched.password}
                      errorText={errors.password}
                    />
                  </View>
                  <View
                    style={tw`flex-row items-center gap-2 border-2 dark:border-primary h-12 rounded-full px-3 `}
                  >
                    <Entypo name="lock" size={24} color="#777777" />
                    <TextInput
                      placeholder="confirm password"
                      placeholderTextColor="#777777"
                      style={tw`font-Poppins dark:text-primary`}
                      value={values.confirmPassword}
                      onChangeText={handleChange("confirmPassword")}
                      onBlur={handleBlur("confirmPassword")}
                      touched={touched.confirmPassword}
                      errorText={errors.confirmPassword}
                    />
                  </View>

                  <View style={tw`my-7 flex-row justify-between items-center`}>
                    <View style={tw`flex-row gap-3`}>
                      <Checkbox
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? "#777777" : undefined}
                      />
                      <Text
                        style={tw`font-medium text-deepGrey50 text-sm pr-5 dark:text-primary`}
                      >
                        By creating this account, you agree to the
                        <Text
                          style={tw`text-deepGrey50 text-sm pr-5 dark:text-primary`}
                        >
                          terms of use & privacy policy
                        </Text>
                        .
                      </Text>
                    </View>
                    <Link href="/auth/forgot_password">
                      <Text
                        style={tw`text-primaryBlack underline font-medium text-sm`}
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
                      Register
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
          </View>
          <View>
            <Text
              style={tw` w-full dark:text-primary font-medium   text-base text-center  font-PoppinsSemiBold `}
            >
              Already have an account ?
            </Text>
            <TouchableOpacity onPress={() => router.push("/auth/login")}>
              <Text
                style={tw`text-primaryBlack underline text-base pb-3 dark:text-darkText`}
              >
                Login here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;
