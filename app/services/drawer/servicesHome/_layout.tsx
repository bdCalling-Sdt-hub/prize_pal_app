import { IconHome, IconSearch } from "@/icons/icon";
import tw from "@/lib/tailwind";
import { BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs";
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from "@react-navigation/native";
import { Tabs } from "expo-router";
import React from "react";
import { Keyboard, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";

// Props type for MyTabBar
type MyTabBarProps = {
  state: TabNavigationState<ParamListBase>;
  descriptors: any;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
};

function MyTabBar({ state, descriptors, navigation }: MyTabBarProps) {
  const [isKeyboardVisible, setKeyboardVisible] = React.useState(false);

  React.useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardVisible(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardVisible(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  // console.log(isKeyboardVisible);

  return (
    <>
      {!isKeyboardVisible && (
        <View
          style={[
            tw`absolute bottom-4 justify-center items-center w-full flex-1  `,
          ]}
        >
          <View
            style={tw` bg-white justify-between overflow-hidden h-[70px] w-[90%] rounded-full flex-row items-center  shadow-xl flex-1`}
          >
            {state.routes.map((route, index) => {
              const { options } = descriptors[route.key];

              const isFocused = state.index === index;
              // console.log(state);

              const onPress = () => {
                const event = navigation.emit({
                  type: "tabPress",
                  target: route.key,
                  canPreventDefault: true,
                });

                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name);
                }
              };

              const onLongPress = () => {
                navigation.emit({
                  type: "tabLongPress",
                  target: route.key,
                });
              };

              // Get the icon based on route name
              const getIcon = () => {
                switch (route.name) {
                  case "serviceHome":
                    return isFocused ? IconHome : IconHome;
                  case "search":
                    return isFocused ? IconSearch : IconSearch;
                }
              };

              return (
                <TouchableOpacity
                  key={route.key}
                  accessibilityRole="button"
                  accessibilityState={isFocused ? { selected: true } : {}}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  testID={options.tabBarTestID}
                  onPress={onPress}
                  onLongPress={onLongPress}
                  style={tw`flex-1 w-full items-center justify-between`}
                >
                  <View
                    style={[
                      tw`items-center justify-center px-4 py-3 rounded-full `,
                      tw`${
                        isFocused
                          ? "bg-SPrimary border-0 border-white shadow-lg"
                          : "bg-transparent"
                      }`,
                    ]}
                  >
                    <SvgXml
                      xml={getIcon() || ``}
                      width={24}
                      height={24}
                      style={[
                        tw`mb-1`,
                        isFocused ? tw`text-white` : tw`text-[#8E8E93]`,
                      ]}
                    />
                    {/* <Text
                  style={[
                    tw`text-xs`,
                    isFocused ? tw`text-white font-bold` : tw`text-[#8E8E93]`,
                  ]}
                >
                  {label}
                </Text> */}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      )}
    </>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        // tabBarHideOnKeyboard: true,
      }}
      tabBar={(props: any) => <MyTabBar {...props} />}
    >
      <Tabs.Screen name="serviceHome" />
    </Tabs>
  );
}
