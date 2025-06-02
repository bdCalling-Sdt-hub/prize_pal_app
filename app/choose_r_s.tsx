import { IconErow, IconFillHome } from "@/icons/icon";
import tw from "@/lib/tailwind";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";

const Page = () => {
  return (
    <>
      <View style={tw`flex-1 justify-center  items-center bg-primaryFF`}>
        <SvgXml xml={IconFillHome} />
        <Image
          style={tw`w-[292px] h-[292px] mt-11 mb-8`}
          source={require("@/assets/images/choseRorS1.png")}
        />
        <Text style={tw`font-semibold text-lg mb-8`}>
          What are you searching for ?
        </Text>
        {/* Retail navigation */}
        <View style={tw`mb-5 relative`}>
          <Image
            style={tw` max-w-[370px] h-[130px] rounded-lg`}
            source={require("@/assets/images/choseRorS2.jpg")}
          />
          <TouchableOpacity
            style={tw`bg-primaryFF flex-row  justify-center items-center w-[121px] rounded-lg py-1 absolute bottom-4 left-4`}
          >
            <Link href="/retailer/home">
              <Text style={tw`font-medium text-lg `}>Retail</Text>
              <View style={tw`pl-5`}>
                <SvgXml xml={IconErow} />
              </View>
            </Link>
          </TouchableOpacity>
        </View>
        {/* Service navigation */}
        <View style={tw`mb-5 relative`}>
          <Image
            style={tw` max-w-[370px] h-[130px] rounded-lg `}
            source={require("@/assets/images/choseRorS3.png")}
          />
          <TouchableOpacity
            style={tw`bg-primaryFF flex-row gap-3 justify-center items-center w-[121px] rounded-lg py-1 absolute bottom-4 left-4`}
          >
            {/* ================ services route ==================== */}
            <Link href="/services/drawer/servicesHome/serviceHome">
              <Text style={tw`font-medium text-lg`}>Service</Text>
              <View style={tw`pl-5`}>
                <SvgXml xml={IconErow} />
              </View>
            </Link>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Page;
