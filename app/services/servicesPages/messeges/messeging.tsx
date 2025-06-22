import {
  FlatList,
  Keyboard,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { IconBackBlack, IconBackWhite, IconSend } from "@/icons/icon";
import tw from "@/lib/tailwind";

import { useTheme } from "@/app/context/ThemeProvider";
import { useRouter } from "expo-router";
import React from "react";
import { SvgXml } from "react-native-svg";
import { Avatar } from "react-native-ui-lib";

const message = () => {
  const router = useRouter();
  const [message, setMessage] = React.useState("");
  const { colorScheme } = useTheme();
  const [allMessages, setAllMessages] = React.useState([
    {
      id: 1,
      user: true,
      name: "Emma Johnson",
      time: "09:15",
      message:
        "Hey, how's the project coming along? Need any help with the design?",
    },
    {
      id: 2,
      user: false,
      name: "Michael Chen",
      time: "09:22",
      message:
        "Almost done! Just finishing up the last section. Should be ready by EOD.",
    },
    {
      id: 3,
      user: true,
      name: "Emma Johnson",
      time: "09:25",
      message: "Great! Let me know if you want me to review anything.",
    },
    {
      id: 4,
      user: false,
      name: "Sarah Williams",
      time: "11:40",
      message:
        "Team meeting moved to 2pm. Don't forget to bring your progress reports!",
    },
    {
      id: 5,
      user: true,
      name: "David Kim",
      time: "12:05",
      message: "Lunch today? I'm craving some sushi.",
    },
    {
      id: 6,
      user: false,
      name: "Alex Rodriguez",
      time: "12:10",
      message: "Can't today - got a deadline. Maybe tomorrow?",
    },
    {
      id: 7,
      user: true,
      name: "Olivia Martin",
      time: "14:30",
      message:
        "Has anyone seen the client feedback from last week's presentation?",
    },
    {
      id: 8,
      user: false,
      name: "James Wilson",
      time: "14:35",
      message: "It's in the shared drive under Client > Feedback > June",
    },
    {
      id: 9,
      user: true,
      name: "Sophia Lee",
      time: "16:45",
      message:
        "Reminder: Office closes early tomorrow for the holiday weekend.",
    },
    {
      id: 10,
      user: false,
      name: "Daniel Brown",
      time: "16:50",
      message: "Thanks for the reminder! Almost forgot about that.",
    },
  ]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={tw`bg-base-light dark:bg-base-dark flex-1`}>
        <View style={tw`px-4 py-3 flex-row items-center gap-2`}>
          <View style={tw`flex-row items-center gap-2`}>
            {/* ========== button with header ============ */}
            <View style={tw`flex-row justify-between items-center`}>
              <View style={tw`flex-row gap-5 justify-center items-center`}>
                <Pressable
                  onPress={() => router.back()}
                  style={tw`w-10 h-10 flex justify-center items-center rounded-full `}
                >
                  <SvgXml
                    xml={colorScheme === "dark" ? IconBackWhite : IconBackBlack}
                  />
                </Pressable>
              </View>
            </View>
            <Avatar
              size={32}
              source={{
                uri: "https://randomuser.me/api/portraits/women/55.jpg",
              }}
            />
          </View>
          <Text
            style={tw`text-xl text-black dark:text-white font-DegularDisplayBold`}
          >
            Larry Smith
          </Text>
        </View>

        <FlatList
          keyboardShouldPersistTaps="always"
          invertStickyHeaders
          inverted
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={tw`gap-5  py-10`}
          data={allMessages?.sort((a, b) => b.id - a.id)}
          renderItem={({ item }) => (
            <>
              {item.user && (
                <View style={tw` flex-row items-start gap-2 px-4`}>
                  <View style={tw`flex-1 flex-row items-end gap-2`}>
                    <Text
                      style={tw`text-xs  text-deepGrey80 dark:text-deepGreycc  font-DegularDisplayMedium`}
                    >
                      {item.time}
                    </Text>
                    <View
                      style={tw`flex-1 bg-deepGreen  p-3 rounded-l-2xl rounded-b-2xl`}
                    >
                      <Text
                        style={tw`text-base  text-base-light dark:text-base-dark font-DegularDisplayMedium`}
                      >
                        {item.message}
                      </Text>
                    </View>
                  </View>
                  <Avatar
                    size={32}
                    source={{
                      uri: "https://randomuser.me/api/portraits/women/55.jpg",
                    }}
                  />
                </View>
              )}
              {item.user || (
                <View style={tw` flex-row items-start gap-2 px-4`}>
                  <Avatar
                    size={32}
                    source={{
                      uri: "https://randomuser.me/api/portraits/women/65.jpg",
                    }}
                  />
                  <View style={tw`flex-1 flex-row items-end gap-2`}>
                    <View
                      style={tw`flex-1 border  border-[#0000001A] bg-white  dark:bg-deepGrey  p-3 rounded-r-2xl rounded-b-2xl`}
                    >
                      <Text
                        style={tw`text-base text-deepGrey  dark:text-white font-DegularDisplayMedium`}
                      >
                        {item.message}
                      </Text>
                    </View>
                    <Text
                      style={tw`text-xs text-deepGrey80 dark:text-deepGrey80 font-DegularDisplayMedium`}
                    >
                      {item.time}
                    </Text>
                  </View>
                </View>
              )}
            </>
          )}
        />
        <View
          style={tw`flex-row items-center  border-gray-200 mx-3 m-3 rounded-full  gap-2`}
        >
          <TextInput
            style={tw`flex-1 bg-primaryFF dark:bg-darkPrimary px-4 rounded-md`}
            placeholder="Type a message"
            placeholderTextColor="#777777"
            value={message}
            onChangeText={(text) => setMessage(text)}
          />
          <TouchableOpacity
            style={tw`bg-deepGreen p-3 rounded-lg flex-row items-center justify-center`}
          >
            <SvgXml xml={colorScheme === "dark" ? IconSend : IconBackWhite} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default message;
