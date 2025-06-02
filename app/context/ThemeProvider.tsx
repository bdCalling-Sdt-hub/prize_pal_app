import tw from "@/lib/tailwind";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useCallback, useContext } from "react";
import { useColorScheme } from "react-native";
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

  return <ThemeContext value={value as any}>{children}</ThemeContext>;
};

export default ThemeProvider;
