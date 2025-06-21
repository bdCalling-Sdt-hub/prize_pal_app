import AuthHeader from "@/components/AuthHeader";
import tw from "@/lib/tailwind";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link, router } from "expo-router";
import { Formik } from "formik";
import {
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { OtpInput } from "react-native-otp-entry";
import { useTheme } from "../context/ThemeProvider";

const OTP = () => {
  const { colorScheme } = useTheme();

  return (
    <KeyboardAvoidingView
      style={tw`dark:bg-base-dark  bg-base-light relative`}
      enabled={true}
      behavior={"padding"}
    >
      <View
        style={tw`w-[36px] h-[36px] dark:bg-deepGrey bg-primary200 m-4 rounded-md  flex items-center justify-center absolute z-10 top-0`}
      >
        <Link href="/auth/forgot_password">
          <AntDesign
            name="left"
            size={24}
            color={colorScheme === "dark" ? "white" : "black"}
          />
        </Link>
      </View>
      <ScrollView
        contentContainerStyle={tw` flex-grow items-center h-full justify-center`}
      >
        <View
          style={tw`flex-1 justify-center items-center dark:bg-base-dark  bg-base-light`}
        >
          {/* logo and title reper */}
          <AuthHeader title="Enter OTP" />
          {/* logo and title reper end*/}

          <View style={tw` w-full p-4 rounded-t-[2rem] pt-8 pb-5`}>
            <Text
              style={tw`font-normal text-base mb-8 font-Poppins dark:text-primary`}
            >
              Enter that OTP which we sent you through the email you provided.
            </Text>
            <Formik
              initialValues={{ otp: "" }}
              onSubmit={async (values) => {
                console.log(values);
                await router.replace("/auth/set_new_password");
              }}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                  <OtpInput
                    numberOfDigits={6}
                    // value={values.otp}
                    onTextChange={(text) => {}}
                    onFilled={(text) => {
                      console.log(text);
                    }}
                    // onBlur={handleBlur("otp")}
                    theme={{
                      pinCodeContainerStyle: {
                        width: 50,
                        height: 50,
                        borderWidth: 1,
                        borderRadius: 9999,
                        borderColor: colorScheme === "dark" ? "#fff" : "#000",
                      },
                      pinCodeTextStyle: {
                        color: colorScheme === "dark" ? "#fff" : "#000",
                        fontSize: 20,
                        fontWeight: "bold",
                      },
                    }}
                  />

                  <TouchableOpacity
                    style={tw`bg-primaryBlack dark:bg-primary rounded-full mt-9`}
                    onPress={() => handleSubmit()}
                  >
                    <Text
                      style={tw`text-primaryFF font-PoppinsBold dark:text-black text-center text-lg py-[14px]`}
                    >
                      Verify
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

export default OTP;
