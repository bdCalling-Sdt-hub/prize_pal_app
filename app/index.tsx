import tw from "@/lib/tailwind";
import * as Font from "expo-font";
import { router, SplashScreen } from "expo-router";
import React from "react";
import { ActivityIndicator, Image, View } from "react-native";

SplashScreen.preventAutoHideAsync();

const App = () => {
  React.useEffect(() => {
    Font.loadAsync({
      DegularDisplayBlack: require("@/assets/fonts/DegularDisplay-Black.otf"),
      DegularDisplayBlackItalic: require("@/assets/fonts/DegularDisplay-BlackItalic.otf"),
      DegularDisplayBold: require("@/assets/fonts/DegularDisplay-Bold.otf"),
      DegularDisplayBoldItalic: require("@/assets/fonts/DegularDisplay-BoldItalic.otf"),
      DegularDisplayLight: require("@/assets/fonts/DegularDisplay-Light.otf"),
      DegularDisplayLightItalic: require("@/assets/fonts/DegularDisplay-LightItalic.otf"),
      DegularDisplayMedium: require("@/assets/fonts/DegularDisplay-Medium.otf"),
      DegularDisplayMediumItalic: require("@/assets/fonts/DegularDisplay-MediumItalic.otf"),
      DegularDisplayRegular: require("@/assets/fonts/DegularDisplay-Regular.otf"),
      DegularDisplayRegularItalic: require("@/assets/fonts/DegularDisplay-RegularItalic.otf"),
      DegularDisplaySemibold: require("@/assets/fonts/DegularDisplay-Semibold.otf"),
      DegularDisplaySemiboldItalic: require("@/assets/fonts/DegularDisplay-SemiboldItalic.otf"),
      DegularDisplayThin: require("@/assets/fonts/DegularDisplay-Thin.otf"),
      DegularDisplayThinItalic: require("@/assets/fonts/DegularDisplay-ThinItalic.otf"),
    });

    SplashScreen.hideAsync();

    setTimeout(() => {
      // router.replace("/services/servicesPages/messeges/chatList");
      router.replace("/auth/login");
    }, 1000);
  }, []);

  return (
    <View style={tw`flex-1 bg-white justify-center items-center`}>
      <View style={tw`mb-12 gap-4`}>
        <Image
          style={tw`h-80 aspect-square`}
          source={require("@/assets/images/logo.png")}
        />
        <ActivityIndicator color={"red"} size={"large"} />
      </View>
    </View>
  );
};

export default App;
