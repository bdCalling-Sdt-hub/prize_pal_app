import {
  IconAboutUS,
  IconAboutUSDark,
  IconBack,
  IconBackDark,
  IconClose,
  IconCloseDark,
  IconLogout,
  IconPrivacy,
  IconPrivacyDark,
  IconService,
  IconServiceDark,
  IconSetting,
  IconSettingDark,
  IconTerms,
  IconTermsDark,
  IconUserProfile,
  IconUserProfileDark,
} from "@/icons/icon";
import tw from "@/lib/tailwind";
import { _HIGHT } from "@/utils/utils";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { router } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SvgXml } from "react-native-svg";
import { useTheme } from "../context/ThemeProvider";

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const { colorScheme } = useTheme();

  const user = {
    // email: "samyaroy@gmail.com",
    password: 231421,
  };

  return (
    <DrawerContentScrollView
      showsVerticalScrollIndicator={false}
      {...props}
      style={tw`bg-base-light dark:bg-base-dark`}
    >
      <View style={tw`flex-row items-center justify-between pb-5`}>
        <Text style={tw`dark:text-primary text-2xl font-normal `}>
          Retail Section
        </Text>
        <TouchableOpacity
          onPress={() => {
            props?.navigation?.closeDrawer();
          }}
          style={tw`bg-primary dark:bg-darkPrimary  p-6 rounded-full`}
        >
          <SvgXml xml={colorScheme === "dark" ? IconCloseDark : IconClose} />
        </TouchableOpacity>
      </View>

      <View style={tw`bg-primary dark:bg-darkPrimary rounded-xl `}>
        {/* add page */}
        {user?.email ? (
          <TouchableOpacity
            onPress={() => {
              props?.navigation?.closeDrawer();
              router.push("/retailer/home/profile");
            }}
            style={tw`flex-row justify-between items-center px-3  py-4  `}
          >
            <View style={tw`flex-row gap-4 items-center `}>
              <View
                style={tw`bg-deepGreycc dark:bg-deepGrey80 p-3 rounded-full`}
              >
                <SvgXml
                  xml={
                    colorScheme === "dark"
                      ? IconUserProfileDark
                      : IconUserProfile
                  }
                />
              </View>
              <Text style={tw`dark:text-primary font-medium text-lg `}>
                My profile
              </Text>
            </View>
            <SvgXml xml={colorScheme === "dark" ? IconBackDark : IconBack} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              props?.navigation?.closeDrawer();
              router.push("/editProfile/loginSignUp");
            }}
            style={tw`flex-row justify-between items-center px-3  py-4  `}
          >
            <View style={tw`flex-row gap-4 items-center `}>
              <View
                style={tw`bg-deepGreycc dark:bg-deepGrey80 p-3 rounded-full`}
              >
                <SvgXml
                  xml={
                    colorScheme === "dark"
                      ? IconUserProfileDark
                      : IconUserProfile
                  }
                />
              </View>
              <Text style={tw`dark:text-primary font-medium text-lg `}>
                Login / Sign Up
              </Text>
            </View>
            <SvgXml xml={colorScheme === "dark" ? IconBackDark : IconBack} />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={() => {
            props?.navigation?.closeDrawer();
            router.push("/services/drawer/servicesHome/serviceHome");
          }}
          style={tw`flex-row justify-between items-center px-3 dark:bg-darkPrimary py-4 rounded-b-xl`}
        >
          <View style={tw`flex-row gap-4 items-center `}>
            <View style={tw`bg-deepGreycc dark:bg-deepGrey80 p-3 rounded-full`}>
              <SvgXml
                xml={colorScheme === "dark" ? IconServiceDark : IconService}
              />
            </View>
            {/* <SvgXml xml={IconService} /> */}
            <Text style={tw`dark:text-primary font-medium text-lg`}>
              Switch to Service
            </Text>
          </View>
          <SvgXml xml={colorScheme === "dark" ? IconBackDark : IconBack} />
        </TouchableOpacity>
      </View>
      <View style={[tw`flex-col justify-between  `, { height: _HIGHT * 0.6 }]}>
        <View style={tw`bg-primary dark:bg-base-dark rounded-2xl mt-4`}>
          {/* add page */}
          <TouchableOpacity
            onPress={() => {
              props?.navigation?.closeDrawer();
              router.push("/Settings/Settings");
            }}
            style={tw`flex-row justify-between items-center px-3 dark:bg-darkPrimary bg-primary py-4  rounded-t-xl`}
          >
            <View style={tw`flex-row gap-4 items-center `}>
              <View
                style={tw`bg-deepGreycc dark:bg-deepGrey80 p-3 rounded-full`}
              >
                <SvgXml
                  xml={colorScheme === "dark" ? IconSettingDark : IconSetting}
                />
              </View>
              <Text style={tw`dark:text-primary font-medium text-lg`}>
                Settings
              </Text>
            </View>
            <SvgXml xml={colorScheme === "dark" ? IconBackDark : IconBack} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              props?.navigation?.closeDrawer();
              router.push("/aboutUs/about_us");
            }}
            style={tw`flex-row justify-between items-center px-3 dark:bg-darkPrimary bg-primary py-4 `}
          >
            <View style={tw`flex-row gap-4 items-center `}>
              <View
                style={tw`bg-deepGreycc dark:bg-deepGrey80 p-3 rounded-full`}
              >
                <SvgXml
                  xml={colorScheme === "dark" ? IconAboutUSDark : IconAboutUS}
                />
              </View>
              <Text style={tw`dark:text-primary font-medium text-lg`}>
                About us
              </Text>
            </View>
            <SvgXml xml={colorScheme === "dark" ? IconBackDark : IconBack} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              props?.navigation?.closeDrawer();
              router.push("/privacy/privacy");
            }}
            style={tw`flex-row justify-between items-center px-3 dark:bg-darkPrimary bg-primary py-4 `}
          >
            <View style={tw`flex-row gap-4 items-center `}>
              <View
                style={tw`bg-deepGreycc dark:bg-deepGrey80 p-3 rounded-full`}
              >
                <SvgXml
                  xml={colorScheme === "dark" ? IconPrivacyDark : IconPrivacy}
                />
              </View>
              <Text style={tw`dark:text-primary font-medium text-lg`}>
                Privacy Policy
              </Text>
            </View>
            <SvgXml xml={colorScheme === "dark" ? IconBackDark : IconBack} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props?.navigation?.closeDrawer();
              router.push("/terms/terms");
            }}
            style={tw`flex-row justify-between items-center px-3 dark:bg-darkPrimary bg-primary py-4  rounded-b-xl`}
          >
            <View style={tw`flex-row gap-4 items-center `}>
              <View
                style={tw`bg-deepGreycc dark:bg-deepGrey80 p-3 rounded-full`}
              >
                <SvgXml
                  xml={colorScheme === "dark" ? IconTermsDark : IconTerms}
                />
              </View>
              <Text style={tw`dark:text-primary font-medium text-lg`}>
                Terms & Conditions
              </Text>
            </View>
            <SvgXml xml={colorScheme === "dark" ? IconBackDark : IconBack} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            props?.navigation?.closeDrawer();
            router.push("/auth/login");
          }}
          style={tw`flex-row justify-between items-center px-3 dark:bg-darkPrimary bg-primary py-4  rounded-xl`}
        >
          <View style={tw`flex-row gap-4 items-center `}>
            <View style={tw`bg-[#FFDDDD]  p-3 rounded-full`}>
              <SvgXml xml={IconLogout} />
            </View>
            <Text style={tw`text-[#FF3737] font-medium text-lg`}>Logout</Text>
          </View>
          <SvgXml xml={colorScheme === "dark" ? IconBackDark : IconBack} />
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

const Drawerlayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen
          name="home"
          options={{
            drawerLabel: "Home",
            title: "overview",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default Drawerlayout;
