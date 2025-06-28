import { useTheme } from "@/app/context/ThemeProvider";
import {
  IconAboutAsBlack,
  IconAboutAsWhite,
  IconBack,
  IconBackDark,
  IconCrossBlack,
  IconCrossWhite,
  IconLogout,
  IconMyBookingBlack,
  IconMyBookingWhite,
  IconPrivacyBlack,
  IconPrivacyWhite,
  IconProfileWhite,
  IconSettingsBlack,
  IconSettingsWhite,
  IconSProfileBlack,
  IconsRightArrowBlack,
  IconsRightArrowWhite,
  IconSwitchBlack,
  IconSwitchWhite,
  IconTermsCondictionBlack,
  IconTermsCondictionWhite,
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

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const { colorScheme } = useTheme();

  return (
    <DrawerContentScrollView
      showsVerticalScrollIndicator={false}
      {...props}
      style={tw`bg-base-light dark:bg-base-dark`}
    >
      <View style={tw`flex-row items-center justify-between pb-5`}>
        <Text style={tw`text-2xl font-normal dark:text-white`}>
          Service Section
        </Text>
        <TouchableOpacity
          style={tw`w-14 h-14 flex justify-center items-center rounded-full dark:bg-deepGrey50 bg-deepGreycc`}
          onPress={() => {
            props?.navigation?.closeDrawer();
          }}
        >
          <SvgXml
            style={tw`w-14 h-14 flex justify-center items-center rounded-full dark:bg-deepGrey50 bg-deepGreycc`}
            xml={colorScheme === "dark" ? IconCrossWhite : IconCrossBlack}
          />
        </TouchableOpacity>
      </View>
      {/*  */}

      <View style={tw`bg-primary dark:bg-deepGrey80 rounded-2xl`}>
        {/* add page */}
        <TouchableOpacity
          onPress={() => {
            props?.navigation?.closeDrawer();
            router.push("/services/drawer/servicesHome/profile");
          }}
          style={tw`flex-row justify-between items-center px-3 bg-primary dark:bg-deepGrey80 py-4 rounded-xl`}
        >
          <View style={tw`flex-row gap-4 items-center `}>
            <View
              style={tw`w-14 h-14 flex justify-center items-center rounded-full dark:bg-deepGrey50 bg-deepGreycc`}
            >
              <SvgXml
                xml={
                  colorScheme === "dark" ? IconProfileWhite : IconSProfileBlack
                }
              />
            </View>
            <Text style={tw`font-medium dark:text-white text-lg`}>
              My profile
            </Text>
          </View>
          <SvgXml
            xml={
              colorScheme === "dark"
                ? IconsRightArrowWhite
                : IconsRightArrowBlack
            }
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props?.navigation?.closeDrawer();
            router.push("/services/drawer/MyBokkings/myBooking");
          }}
          style={tw`flex-row justify-between items-center px-3 bg-primary dark:bg-deepGrey80 py-4 rounded-xl`}
        >
          <View style={tw`flex-row gap-4 items-center `}>
            <View
              style={tw`w-14 h-14 flex justify-center items-center rounded-full dark:bg-deepGrey50 bg-deepGreycc`}
            >
              <SvgXml
                xml={
                  colorScheme === "dark"
                    ? IconMyBookingWhite
                    : IconMyBookingBlack
                }
              />
            </View>
            <Text style={tw`font-medium dark:text-white text-lg`}>
              My Bookings
            </Text>
          </View>
          <SvgXml
            xml={
              colorScheme === "dark"
                ? IconsRightArrowWhite
                : IconsRightArrowBlack
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props?.navigation?.closeDrawer();
            router.push("/retailer/home");
          }}
          style={tw`flex-row justify-between items-center px-3 bg-primary dark:bg-deepGrey80 py-4 rounded-xl`}
        >
          <View style={tw`flex-row gap-4 items-center `}>
            <View
              style={tw`w-14 h-14 flex justify-center items-center rounded-full dark:bg-deepGrey50 bg-deepGreycc`}
            >
              <SvgXml
                xml={colorScheme === "dark" ? IconSwitchWhite : IconSwitchBlack}
              />
            </View>
            <Text style={tw`font-medium dark:text-white text-lg`}>
              Switch to Retail
            </Text>
          </View>
          <SvgXml
            xml={
              colorScheme === "dark"
                ? IconsRightArrowWhite
                : IconsRightArrowBlack
            }
          />
        </TouchableOpacity>
      </View>

      <View style={[tw`flex-col justify-between `, { height: _HIGHT * 0.6 }]}>
        <View style={tw`bg-primary dark:bg-deepGrey80 rounded-2xl mt-4`}>
          {/* add page */}
          <TouchableOpacity
            onPress={() => {
              props?.navigation?.closeDrawer();
              router.push("/services/drawer/Settings/setting");
            }}
            style={tw`flex-row justify-between items-center px-3 bg-primary dark:bg-deepGrey80 py-4 rounded-xl`}
          >
            <View style={tw`flex-row gap-4 items-center `}>
              <View
                style={tw`w-14 h-14 flex justify-center items-center rounded-full dark:bg-deepGrey50 bg-deepGreycc`}
              >
                <SvgXml
                  xml={
                    colorScheme === "dark"
                      ? IconSettingsWhite
                      : IconSettingsBlack
                  }
                />
              </View>
              <Text style={tw`font-medium dark:text-white text-lg`}>
                Settings
              </Text>
            </View>
            <SvgXml
              xml={
                colorScheme === "dark"
                  ? IconsRightArrowWhite
                  : IconsRightArrowBlack
              }
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              props?.navigation?.closeDrawer();
              router.push("/aboutUs/about_us");
            }}
            style={tw`flex-row justify-between items-center px-3 bg-primary dark:bg-deepGrey80 py-4 rounded-xl`}
          >
            <View style={tw`flex-row gap-4 items-center `}>
              <View
                style={tw`w-14 h-14 flex justify-center items-center rounded-full dark:bg-deepGrey50 bg-deepGreycc`}
              >
                <SvgXml
                  xml={
                    colorScheme === "dark" ? IconAboutAsWhite : IconAboutAsBlack
                  }
                />
              </View>
              <Text style={tw`font-medium dark:text-white text-lg`}>
                About us
              </Text>
            </View>
            <SvgXml
              xml={
                colorScheme === "dark"
                  ? IconsRightArrowWhite
                  : IconsRightArrowBlack
              }
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              props?.navigation?.closeDrawer();
              router.push("/privacys/privacy");
            }}
            style={tw`flex-row justify-between items-center px-3 bg-primary dark:bg-deepGrey80 py-4 rounded-xl`}
          >
            <View style={tw`flex-row gap-4 items-center `}>
              <View
                style={tw`w-14 h-14 flex justify-center items-center rounded-full dark:bg-deepGrey50 bg-deepGreycc`}
              >
                <SvgXml
                  xml={
                    colorScheme === "dark" ? IconPrivacyWhite : IconPrivacyBlack
                  }
                />
              </View>
              <Text style={tw`font-medium dark:text-white text-lg`}>
                Privacy Policy
              </Text>
            </View>
            <SvgXml
              xml={
                colorScheme === "dark"
                  ? IconsRightArrowWhite
                  : IconsRightArrowBlack
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props?.navigation?.closeDrawer();
              router.push("/terms/term");
            }}
            style={tw`flex-row justify-between items-center px-3 bg-primary dark:bg-deepGrey80 py-4 rounded-xl`}
          >
            <View style={tw`flex-row gap-4 items-center `}>
              <View
                style={tw`w-14 h-14 flex justify-center items-center rounded-full dark:bg-deepGrey50 bg-deepGreycc`}
              >
                <SvgXml
                  xml={
                    colorScheme === "dark"
                      ? IconTermsCondictionWhite
                      : IconTermsCondictionBlack
                  }
                />
              </View>
              <Text style={tw`font-medium dark:text-white text-lg`}>
                Terms & Conditions
              </Text>
            </View>
            <SvgXml
              xml={
                colorScheme === "dark"
                  ? IconsRightArrowWhite
                  : IconsRightArrowBlack
              }
            />
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
        <Drawer.Screen name="servicesHome" />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default Drawerlayout;
