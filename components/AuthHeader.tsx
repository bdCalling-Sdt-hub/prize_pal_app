import { useTheme } from "@/app/context/ThemeProvider";
import { ImgLogo, ImgLogoLight } from "@/assets/image";
import tw from "@/lib/tailwind";
import React from "react";
import { Image, Text, View } from "react-native";

const AuthHeader = ({ title }: any) => {
  const { colorScheme } = useTheme();

  return (
    <View style={tw` w-full justify-center flex-col items-center`}>
      <Image
        style={tw`w-40 h-40 ml-8`}
        source={colorScheme === "dark" ? ImgLogo : ImgLogoLight}
      />

      <Text style={tw`font-PoppinsSemiBold dark:text-primary  text-2xl`}>
        {title}
      </Text>
    </View>
  );
};

export default AuthHeader;
