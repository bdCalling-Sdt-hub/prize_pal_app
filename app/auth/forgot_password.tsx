import AuthHeader from "@/components/AuthHeader";
import tw from "@/lib/tailwind";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link, router } from "expo-router";
import { Formik } from "formik";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useTheme } from "../context/ThemeProvider";

const forgotPassword = () => {
  const { colorScheme } = useTheme();

  const validate = (values: any) => {
    const errors: any = {};
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.email.includes("@")) {
      errors.email = "Invalid email";
    }
    return errors;
  };

  return (
    <KeyboardAvoidingView
      style={tw`dark:bg-base-dark flex-1 relative  bg-base-light `}
      enabled={true}
      behavior={"padding"}
    >
      <View
        style={tw`w-[36px] h-[36px] dark:bg-deepGrey bg-primary200 m-4 rounded-md  flex items-center justify-center top-0 z-10 absolute `}
      >
        <Link href="/auth/login">
          <AntDesign
            name="left"
            size={24}
            color={colorScheme === "dark" ? "white" : "black"}
          />
        </Link>
      </View>
      <ScrollView contentContainerStyle={tw`flex-1  justify-center `}>
        <View
          style={tw` justify-center items-center dark:bg-base-dark  bg-base-light`}
        >
          {/* logo and title reper */}
          <AuthHeader title="Forgot your password ?" />
          {/* logo and title reper end*/}

          <View style={tw` w-full p-4 rounded-t-[2rem] pt-8 pb-5`}>
            <Text
              style={tw`font-normal dark:text-primary text-sm mb-8 font-Poppins`}
            >
              Enter your email here. We will send you a 6 digit OTP via your
              email address.
            </Text>
            <Formik
              initialValues={{ email: "" }}
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
                    style={tw`flex-row items-center gap-2 border-2 dark:border-primary h-12 rounded-full px-3 mb-6`}
                  >
                    <MaterialIcons
                      name="email"
                      size={24}
                      color="#777777"
                      style={tw`mr-2`}
                    />
                    <TextInput
                      placeholderTextColor="#777777"
                      placeholder="Enter your email"
                      // right={<MaterialIcons name="email" size={24} color="black" />}
                      value={values.email}
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      style={tw`text-primary font-Poppins `}
                    />
                  </View>
                  <TouchableOpacity
                    style={tw`bg-primaryBlack   dark:bg-base-light rounded-full`}
                    onPress={() => {
                      handleSubmit();
                      router.replace("/auth/otp");
                    }}
                  >
                    <Text
                      style={tw`text-primaryFF dark:text-black text-center font-PoppinsBold text-lg py-[14px] `}
                    >
                      Send
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
          </View>
        </View>
        <View></View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default forgotPassword;
