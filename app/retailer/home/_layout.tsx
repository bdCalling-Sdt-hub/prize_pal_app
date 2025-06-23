import { useTheme } from "@/app/context/ThemeProvider";
import tw from "@/lib/tailwind";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useLinkBuilder } from "@react-navigation/native";
import { Tabs } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";
// import { useTheme } from "../context/ThemeProvider";

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { colorScheme } = useTheme();
  const { buildHref } = useLinkBuilder();
  const icon = {
    index: (props: any) => (
      <AntDesign name="home" size={30} color="black" {...props} />
    ),
    search: (props: any) => (
      <Feather name="search" size={30} color="black" {...props} />
    ),
    profile: (props: any) => (
      <FontAwesome name="user" size={30} color="black" {...props} />
    ),
  };

  return (
    <View
      style={tw`flex-row bottom-5 absolute  mx-6  shadow-black shadow-md rounded-full justify-between items-center bg-primary dark:bg-deepGrey2D `}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={tw`flex-1 justify-center items-center rounded-full`}
          >
            <View
              style={tw`m-2 w-20  items-center justify-center ${
                isFocused
                  ? "bg-[#E4E4E4]  dark:bg-darkSecoundary p-5 rounded-full "
                  : ""
              }`}
            >
              {icon[route.name]({
                color: isFocused
                  ? colorScheme === "dark"
                    ? "#fff"
                    : "#000"
                  : colorScheme === "dark"
                  ? "#ccc"
                  : "#222",
              })}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tablayout = () => {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="search" options={{ title: "Search" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
};

export default Tablayout;
