import {
  IconCall,
  IconEdit,
  IconEmail,
  IconLoction,
  IconSelectImg,
  IconUser,
} from "@/icons/icon";
import tw from "@/lib/tailwind";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";

const Page = () => {
  return (
    <View style={tw`flex-1 bg-primaryFF `}>
      <View style={tw`p-5`}>
        {/* profile section */}
        <View
          style={tw`flex-row items-center justify-center border rounded-3xl border-deepGreycc py-8`}
        >
          <View style={tw`mx-auto`}>
            <View style={tw`relative `}>
              <Image
                style={tw`h-32 aspect-square rounded-full`}
                source={require("@/assets/images/profile.jpg")}
              />
              <TouchableOpacity style={tw`absolute bottom-0 right-5`}>
                <SvgXml xml={IconSelectImg} />
              </TouchableOpacity>
            </View>
            {/* name and loction */}
            <View style={tw`text-center items-center pt-3`}>
              <Text style={tw`font-medium text-xl text-deepGrey50 `}>
                Majsharlaya
              </Text>
              <View style={tw`flex-row items-center gap-3 pt-1`}>
                <SvgXml xml={IconLoction} />
                <Text style={tw`font-normal text-base`}>Dhaka, bangladesh</Text>
              </View>
            </View>
          </View>
        </View>
        {/*   profile details */}
        <View style={tw`flex-col justify-between h-[61%]`}>
          <View>
            <View
              style={tw`flex-row items-center gap-4 py-4 px-6 mt-4  rounded-full border border-deepGreycc`}
            >
              <SvgXml xml={IconUser} />
              <Text style={tw`font-normal text-base text-deepGrey50`}>
                Majsharlaya
              </Text>
            </View>
            <View
              style={tw`flex-row items-center gap-4 py-4 px-6 mt-4  rounded-full border border-deepGreycc`}
            >
              <SvgXml xml={IconEmail} />
              <Text style={tw`font-normal text-base text-deepGrey50`}>
                example@gmail.com
              </Text>
            </View>
            <View
              style={tw`flex-row items-center gap-4 py-4 px-6 mt-4  rounded-full border border-deepGreycc`}
            >
              <SvgXml xml={IconCall} />
              <Text style={tw`font-normal text-base text-deepGrey50`}>
                +1235698745
              </Text>
            </View>
            <View
              style={tw`flex-row items-center gap-4 py-4 px-6 mt-4  rounded-full border border-deepGreycc`}
            >
              <SvgXml xml={IconLoction} />
              <Text style={tw`font-normal text-base text-deepGrey50`}>
                Dhaka, bangladesh
              </Text>
            </View>
          </View>

          <TouchableOpacity
            // onPress={() => {
            //   router.push("/editProfile/editProfile");
            // }}
            style={tw`bg-SPrimary py-3 rounded-full`}
          >
            <View style={tw`flex-row justify-center items-center gap-3`}>
              <SvgXml xml={IconEdit} />
              <Text
                style={tw`text-primaryFF text-center font-semibold text-lg  `}
              >
                Edit Profile
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Page;
