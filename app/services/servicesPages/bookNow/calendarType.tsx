import { useTheme } from "@/app/context/ThemeProvider";
import {
  IconBackBlack,
  IconBackWhite,
  IconDate,
  IconDateDark,
  IconNext,
  IconTime,
  IconTimeDark,
} from "@/icons/icon";
import tw from "@/lib/tailwind";
import DateTimePicker from "@react-native-community/datetimepicker";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Modal,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Calendar } from "react-native-calendars";
import { SvgXml } from "react-native-svg";

type TimeSlot = {
  id: number;
  label: string;
  defaultTime: string;
};

const AppointmentScheduler: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<{
    slotId: number;
    time: string;
  } | null>(null);
  const [showTimePicker, setShowTimePicker] = useState<boolean>(false);
  const [activeTimeSlot, setActiveTimeSlot] = useState<number | null>(null);
  const [markedDates, setMarkedDates] = useState<{ [key: string]: any }>({});

  const timeSlots: TimeSlot[] = [
    { id: 1, label: "Select time -", defaultTime: "09:00 AM" },
  ];
  const { colorScheme } = useTheme();
  const handleDateSelect = (date: any) => {
    setSelectedDate(date.dateString);
    setMarkedDates({
      [date.dateString]: {
        selected: true,
        selectedColor: "#6DA40A",
        selectedTextColor: "#FFFFFF",
      },
    });
  };

  const handleTimeSelect = (slotId: number) => {
    setActiveTimeSlot(slotId);
    setShowTimePicker(true);
  };

  const handleTimeChange = (event: any, selected?: Date) => {
    if (Platform.OS === "android") {
      setShowTimePicker(false);
    }

    if (selected && activeTimeSlot !== null) {
      const hours = selected.getHours();
      const minutes = selected.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12;
      const formattedTime = `${formattedHours}:${minutes
        .toString()
        .padStart(2, "0")} ${ampm}`;

      setSelectedTime({
        slotId: activeTimeSlot,
        time: formattedTime,
      });
    }
  };

  const formatSelectedDate = (): string => {
    if (!selectedDate) return "";

    const date = new Date(selectedDate);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  };

  const getTimeForSlot = (slotId: number): string => {
    if (selectedTime && selectedTime.slotId === slotId) {
      return selectedTime.time;
    }
    return timeSlots.find((slot) => slot.id === slotId)?.defaultTime || "";
  };

  return (
    <View style={tw`flex-1 bg-base-light  dark:bg-base-dark p-4`}>
      <ScrollView
        contentContainerStyle={tw`flex-grow gap-6 justify-center relative `}
        showsVerticalScrollIndicator={false}
      >
        {/* Header section */}
        <TouchableOpacity
          style={tw`py-4 px-7 max-w-40 flex-row items-center gap-3 border rounded-2xl border-black dark:border-primary`}
          onPress={() => router.back()}
        >
          <SvgXml
            style={tw`font-Poppins`}
            xml={colorScheme === "dark" ? IconBackWhite : IconBackBlack}
          />
          <Text style={tw`text-black font-Poppins text-base dark:text-white`}>
            Back
          </Text>
        </TouchableOpacity>

        <View
          style={tw` 
           flex-row items-center justify-center  px-4 py-3 gap-3 border dark:border-white border-black rounded-xl`}
        >
          <SvgXml xml={colorScheme === "dark" ? IconDateDark : IconDate} />
          <Text
            style={tw` text-black font-PoppinsMedium dark:text-primary text-lg`}
          >
            Select date
          </Text>
        </View>

        {/* Calendar section */}
        <View
          style={tw`mb-6 bg-base-light dark:bg-darkSecoundary rounded-lg p-3`}
        >
          <Calendar
            current={"2024-06-01"}
            minDate={"2024-01-01"}
            maxDate={"2024-12-31"}
            onDayPress={handleDateSelect}
            markedDates={markedDates}
            theme={{
              calendarBackground: "transparent",
              textSectionTitleColor: "#505050",
              selectedDayBackgroundColor: "#6DA40A",
              selectedDayTextColor: "#FFFFFF",
              todayTextColor: "#6DA40A",
              dayTextColor: "#2D2D2D",
              textDisabledColor: "#CCCCCC",
              arrowColor: "#6DA40A",
              monthTextColor: "#6DA40A",
              textMonthFontFamily: "DegularDisplaySemibold",
              textMonthFontSize: 16,
            }}
          />
        </View>

        {/* Selected date section */}
        {selectedDate && (
          <View style={tw`py-4 border-b border-deepGreycc mb-4`}>
            <Text
              style={tw`text-center text-primaryBlack dark:text-primaryFF text-xl font-PoppinsSemiBold `}
            >
              {formatSelectedDate()}
            </Text>
            <Text
              style={tw`text-center text-deepGrey80 dark:text-darkText mt-2 font-PoppinsLight text-base`}
            >
              Please select time from below
            </Text>
          </View>
        )}
        <View
          style={tw` 
           flex-row items-center justify-center  px-4 py-3 gap-3 border dark:border-white border-black rounded-xl`}
        >
          <SvgXml xml={colorScheme === "dark" ? IconTimeDark : IconTime} />
          <Text
            style={tw` text-black font-PoppinsMedium dark:text-primary text-xl`}
          >
            Select Time
          </Text>
        </View>
        {/* Time slots section */}
        <ScrollView
          contentContainerStyle={tw` border dark:border-white border-black rounded-xl`}
        >
          {timeSlots.map((slot) => (
            <TouchableOpacity
              key={slot.id}
              style={tw`flex-row justify-between items-center p-4  border-deepGreycc`}
              onPress={() => handleTimeSelect(slot.id)}
            >
              <Text
                style={tw`text-primaryBlack dark:text-primaryFF text-base font-PoppinsMedium`}
              >
                {slot.label}
              </Text>
              <View style={tw`flex-row items-center`}>
                <Text
                  style={tw`text-SPrimary text-base font-DegularDisplayMedium mr-3`}
                >
                  {getTimeForSlot(slot.id)}
                </Text>
                <Text
                  style={tw`text-deepGrey80 dark:text-darkText text-sm font-DegularDisplayRegular`}
                >
                  Change
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Next button */}
        <TouchableOpacity
          style={tw`bg-SPrimary  rounded-2xl py-4 flex-row justify-center gap-3 items-center`}
          onPress={() => router.push("/services/servicesPages/bookNow/booking")}
        >
          <Text
            style={tw`text-white font-semibold font-PoppinsMedium text-lg `}
          >
            Next
          </Text>
          <SvgXml xml={IconNext} />
        </TouchableOpacity>

        {/* Time picker for iOS */}
        {showTimePicker && Platform.OS === "ios" && (
          <Modal
            animationType="slide"
            transparent={true}
            visible={showTimePicker}
            onRequestClose={() => setShowTimePicker(false)}
          >
            <View style={tw`flex-1 justify-end bg-black bg-opacity-50`}>
              <View
                style={tw`bg-base-light dark:bg-darkSecoundary rounded-t-3xl p-5`}
              >
                <View
                  style={tw`flex-row justify-between items-center pb-4 border-b border-deepGreycc`}
                >
                  <TouchableOpacity onPress={() => setShowTimePicker(false)}>
                    <Text
                      style={tw`text-deepGrey80 dark:text-darkText text-base font-DegularDisplayRegular`}
                    >
                      Back
                    </Text>
                  </TouchableOpacity>
                  <Text
                    style={tw`text-primaryBlack dark:text-primaryFF text-lg font-DegularDisplaySemibold`}
                  >
                    Enter time
                  </Text>
                  <TouchableOpacity onPress={() => setShowTimePicker(false)}>
                    <Text
                      style={tw`text-SPrimary text-base font-DegularDisplaySemibold`}
                    >
                      OK
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={tw`py-4`}>
                  <DateTimePicker
                    value={new Date()}
                    mode="time"
                    display="spinner"
                    onChange={handleTimeChange}
                  />
                </View>
              </View>
            </View>
          </Modal>
        )}

        {/* Time picker for Android */}
        {showTimePicker && Platform.OS === "android" && (
          <DateTimePicker
            value={new Date()}
            mode="time"
            display="spinner"
            onChange={handleTimeChange}
          />
        )}
      </ScrollView>
    </View>
  );
};

export default AppointmentScheduler;
