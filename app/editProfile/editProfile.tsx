import Btn from "@/components/Btn";
import { IconUser } from "@/icons/icon";
import BackWithComponent from "@/lib/backHeader/BackWithCoponent";
import tw from "@/lib/tailwind";
import { router } from "expo-router";
import { Formik } from "formik";
import React from "react";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SvgXml } from "react-native-svg";

const editProfile = () => {
  const user = {
    name: "Majsharlaya",
    email: "example@gmail.com",
    phone: "+1235698745",
    location: "Dhaka, bangladesh",
  };

  return (
    <KeyboardAvoidingView style={tw` bg-base-light dark:bg-base-dark `}>
      <View style={tw` h-[100%] m-5`}>
        <BackWithComponent
          onPress={() => {
            router.back();
          }}
          togather
          title={"Back"}
        />

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
                          style={tw`text-primaryFF text-center font-semibold text-lg  `}
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
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default editProfile;
