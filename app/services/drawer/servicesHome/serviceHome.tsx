import { ImgLogo } from "@/assets/image";
import ServiceCarousel from "@/components/ServiceCarousel";
import {
  IconSearch,
  IconSMassage,
  IconSMenu,
  IconSNotification,
} from "@/icons/icon";
import tw from "@/lib/tailwind";
import { Formik } from "formik";
import React from "react";
import {
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SvgXml } from "react-native-svg";

const ServiceHome = () => {
  return (
    <ScrollView style={tw`flex-1 bg-primaryFF`}>
      <View style={tw`px-5`}>
        {/* ================= header -================= */}
        <View style={tw`flex-row justify-between items-center my-5`}>
          <TouchableOpacity
            style={tw`w-14 h-14 rounded-full bg-lowGreen justify-center items-center`}
          >
            <SvgXml xml={IconSMenu} />
          </TouchableOpacity>

          <Image style={tw`w-20 h-20 ml-8`} source={ImgLogo} />

          <View style={tw`flex-row gap-2`}>
            <TouchableOpacity
              style={tw`w-14 h-14 rounded-full bg-lowGreen justify-center items-center`}
            >
              <SvgXml xml={IconSMassage} />
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`w-14 h-14 rounded-full bg-lowGreen justify-center items-center`}
            >
              <SvgXml xml={IconSNotification} />
            </TouchableOpacity>
          </View>
        </View>

        {/* =======================  search bar ===================== */}
        <Formik
          initialValues={{ searchText: "" }}
          onSubmit={(values) => console.log("Submitted:", values)}
        >
          {({ handleChange, handleBlur, values }) => {
            if (values.searchText.length > 0) {
              console.log("Searching for:", values.searchText);
            }
            return (
              <View
                style={tw`bg-primary my-2 rounded-full flex-row items-center pl-6`}
              >
                <SvgXml xml={IconSearch} />
                <TextInput
                  style={tw`h-[60px] flex-1 pl-3`}
                  placeholder="Search items"
                  onChangeText={handleChange("searchText")}
                  onBlur={handleBlur("searchText")}
                  value={values.searchText}
                />
              </View>
            );
          }}
        </Formik>

        {/* ============ carousel ============== */}

        <ServiceCarousel />
      </View>
    </ScrollView>
  );
};

export default ServiceHome;
