import tw from "@/lib/tailwind";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useCallback, useContext } from "react";
import { SafeAreaView, StatusBar, useColorScheme } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RnColorScheme, useAppColorScheme } from "twrnc";
interface IThemeProviderProps {
  colorScheme: "light" | "dark";
  toggleColorScheme: () => void;
  setColorScheme: (colorScheme: RnColorScheme) => void;
}

const ThemeContext = React.createContext<IThemeProviderProps>({
  colorScheme: "light",
  toggleColorScheme: () => {},
  setColorScheme: () => {},
});

export const useTheme = () => {
  const context = useContext<IThemeProviderProps>(ThemeContext);
  return context;
};

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const DeviceTheme = useColorScheme();

  const [colorScheme, toggleColorScheme, setColorScheme] =
    useAppColorScheme(tw);

  const initialThemeColor = useCallback(async () => {
    const mode = await AsyncStorage.getItem("mode");
    setColorScheme(
      mode === "dark" ? "dark" : DeviceTheme === "dark" ? "dark" : "light"
    );
  }, []);

  React.useEffect(() => {
    initialThemeColor();
  }, [DeviceTheme, initialThemeColor]);

  const value = {
    colorScheme,
    toggleColorScheme,
    setColorScheme,
  };
  const HI = useSafeAreaInsets();

  return (
    <ThemeContext value={value as any}>
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: HI.top,
          paddingBottom: HI.bottom,
          backgroundColor:
            colorScheme === "dark"
              ? tw.color("base-dark")
              : tw.color("base-light"),
        }}
      >
        {children}
        <StatusBar
          animated
          backgroundColor={"black"}
          barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
        />
      </SafeAreaView>
    </ThemeContext>
  );
};

export default ThemeProvider;
