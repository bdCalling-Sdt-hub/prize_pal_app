import { useTheme } from "@/app/context/ThemeProvider";
import { IconBackBlack, IconDate, IconDateDark } from "@/icons/icon";
import tw from "@/lib/tailwind";
import { Ionicons } from "@expo/vector-icons";
// import { BlurView } from "expo-blur";
import { router } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Calendar, DateObject, LocaleConfig } from "react-native-calendars";
import { SvgXml } from "react-native-svg";

// Configure locale settings
LocaleConfig.locales["en"] = {
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  monthNamesShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  dayNames: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  dayNamesShort: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
};
LocaleConfig.defaultLocale = "en";

const CalendarType = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [currentMonth, setCurrentMonth] = useState<string>("June 2024");
  const { colorScheme } = useTheme();
  const isDarkMode = colorScheme === "dark";

  // Mark unavailable dates
  const markedDates: { [key: string]: any } = {
    "2024-06-10": { disabled: true, disableTouchEvent: true },
    "2024-06-15": { disabled: true, disableTouchEvent: true },
    "2024-06-22": { disabled: true, disableTouchEvent: true },
  };

  if (selectedDate) {
    markedDates[selectedDate] = {
      selected: true,
      selectedColor: "#6DA40A", // Using your SPrimary color
    };
  }

  const onDayPress = (day: DateObject) => {
    if (!markedDates[day.dateString]?.disabled) {
      setSelectedDate(day.dateString);
    }
  };

  const onMonthChange = (month: DateObject) => {
    try {
      if (month && month.month && month.year) {
        const monthIndex = month.month - 1;
        if (
          monthIndex >= 0 &&
          monthIndex < LocaleConfig.locales.en.monthNames.length
        ) {
          setCurrentMonth(
            `${LocaleConfig.locales.en.monthNames[monthIndex]} ${month.year}`
          );
        }
      }
    } catch (error) {
      console.error("Error changing month:", error);
    }
  };

  const formatSelectedDate = (dateString: string): string => {
    try {
      if (!dateString) return "";
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      });
    } catch (error) {
      console.error("Error formatting date:", error);
      return "";
    }
  };

  // Calendar theme configuration for light and dark modes
  const calendarTheme = {
    backgroundColor: isDarkMode ? "#4B4B4B" : "#F6F6F6",
    calendarBackground: isDarkMode ? "#4B4B4B" : "#F6F6F6",
    textSectionTitleColor: isDarkMode ? "#AFAFAF" : "#888888",
    todayTextColor: "#6DA40A",
    selectedDayBackgroundColor: "#6DA40A",
    selectedDayTextColor: "#FFF",
    arrowColor: isDarkMode ? "#FFF" : "#000",
    monthTextColor: isDarkMode ? "#FFF" : "#000",
    dayTextColor: isDarkMode ? "#FFF" : "#000",
    textDisabledColor: isDarkMode ? "#535353" : "#cccccc",
    textDayFontFamily: "Inter_400Regular",
    textMonthFontFamily: "Inter_600SemiBold",
    textDayHeaderFontFamily: "Inter_500Medium",
    textDayFontSize: 16,
    textMonthFontSize: 18,
    textDayHeaderFontSize: 14,
    "stylesheet.calendar.header": {
      week: {
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "space-between",
      },
    },
  };

  return (
    <View style={tw`flex-1 bg-base-light gap-9 dark:bg-base-dark p-4`}>
      <TouchableOpacity onPress={() => router.back()}>
        <View
          style={tw`py-4 px-7 max-w-40 flex-row border rounded-lg items-center gap-3 border-gray-300 dark:border-gray-700`}
        >
          <SvgXml
            style={tw`font-Poppins`}
            xml={IconBackBlack}
            fill={isDarkMode ? "#FFF" : "#000"}
          />
          <Text
            style={tw`text-black dark:text-primaryFF font-Poppins text-base`}
          >
            Remodeling
          </Text>
        </View>
      </TouchableOpacity>
      {/* Location Input */}
      <View
        style={tw` 
           flex-row items-center justify-center px-4 py-3 gap-3 border dark:border-white border-black rounded-xl`}
      >
        <SvgXml xml={colorScheme === "dark" ? IconDateDark : IconDate} />
        <Text
          style={tw` text-black font-PoppinsMedium dark:text-primary text-lg`}
        >
          Select date
        </Text>
      </View>
      {/* Calendar */}
      <View
        style={tw`mb-6 bg-base-light dark:bg-darkSecoundary  rounded-lg p-3`}
      >
        <Calendar
          style={tw`dark:bg-darkSecoundary bg-base-light`}
          current={"2024-06-01"}
          minDate={"2024-06-01"}
          maxDate={"2024-06-30"}
          onDayPress={onDayPress}
          markedDates={markedDates}
          onMonthChange={onMonthChange}
          hideExtraDays={true}
          disableAllTouchEventsForDisabledDays={true}
          theme={calendarTheme}
        />
      </View>

      {/* Selected Date Section */}
      {selectedDate ? (
        <View style={tw`mb-6  rounded-lg p-4`}>
          <Text
            style={tw`text-lg font-semibold mb-1 text-primaryBlack dark:text-primaryFF`}
          >
            {formatSelectedDate(selectedDate)}
          </Text>
          <Text
            style={tw`text-base font-semibold mb-1 text-primaryBlack dark:text-primaryFF`}
          >
            We are available on this day. You can book
          </Text>
        </View>
      ) : (
        <Text style={tw`text-deepGrey dark:text-darkText mb-6`}>
          Please select a date
        </Text>
      )}

      {/* Next Button */}
      <TouchableOpacity
        style={[
          tw`bg-SPrimary rounded-2xl py-4 flex-row justify-center gap-3 items-center mt-6`,
          !selectedDate || markedDates[selectedDate]?.disabled
            ? tw`bg-deepGreycc`
            : tw`bg-SPrimary`,
        ]}
        disabled={!selectedDate || markedDates[selectedDate]?.disabled}
      >
        <Text style={tw`text-white font-semibold font-PoppinsMedium text-lg`}>
          Next
        </Text>
        <Ionicons name="arrow-forward" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default CalendarType;
