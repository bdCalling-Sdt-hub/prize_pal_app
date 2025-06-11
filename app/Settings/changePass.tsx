import tw from "@/lib/tailwind";
import { Formik } from "formik";
import React from "react";
import { KeyboardAvoidingView, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const changePass = () => {
  return (
    <View style={tw`bg-base-light p-5 dark:bg-base-dark h-full`}>
      <KeyboardAvoidingView>
        <Formik
          initialValues={{ current_password: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={tw`border border-black`}>
              <TextInput onChangeText={handleChange("current_password")} />
            </View>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </View>
  );
};

export default changePass;
