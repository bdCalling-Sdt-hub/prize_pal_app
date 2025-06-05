import tw from "@/lib/tailwind";
import React from "react";
import { TouchableOpacity, View } from "react-native";

const Btn = ({ children }: any) => {
  return (
    <TouchableOpacity
      style={tw`bg-primaryBlack dark:bg-primaryFF rounded-full  my-7`}
    >
      <View style={tw`text-primaryFF text-center font-semibold text-lg py-3`}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

export default Btn;
