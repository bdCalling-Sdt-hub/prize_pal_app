/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        // Nunito fonts
        DegularDisplayBlack: "DegularDisplayBlack",
        DegularDisplayBlackItalic: "DegularDisplayBlackItalic",
        DegularDisplayBold: "DegularDisplayBold",
        DegularDisplayBoldItalic: "DegularDisplayBoldItalic",
        DegularDisplayLight: "DegularDisplayLight",
        DegularDisplayLightItalic: "DegularDisplayLightItalic",
        DegularDisplayMedium: "DegularDisplayMedium",
        DegularDisplayMediumItalic: "DegularDisplayMediumItalic",
        DegularDisplayRegular: "DegularDisplayRegular",
        DegularDisplayRegularItalic: "DegularDisplayRegularItalic",
        DegularDisplaySemibold: "DegularDisplaySemibold",
        DegularDisplaySemiboldItalic: "DegularDisplaySemiboldItalic",
        DegularDisplayThin: "DegularDisplayThin",
        DegularDisplayThinItalic: "DegularDisplayThinItalic",

        // Poppins fonts
        Poppins: "PoppinsRegular",
        PoppinsBold: "PoppinsBold",
        PoppinsSemiBold: "PoppinsSemiBold",
        PoppinsLight: "PoppinsLight",
        PoppinsMedium: "PoppinsMedium",
      },

      colors: {
        primary: "#F6F6F6",
        base: {
          dark: "#1E1E1E",
          light: "#FFF",
        },
        primaryFF: "#ffffff",
        primary200: "#fff1ec",
        offWhite: "#D9D9D9",
        deepGrey: "#888888",
        deepGrey50: "#505050",
        deepGrey80: "#535353",
        deepGrey2D: "#2D2D2D",
        deepGreycc: "#cccccc",
        primaryBlack: "#121212",
        deepGreen: "#00B047",
        lowGreen: "#F0FFD7",
        SPrimary: "#6DA40A",
        darkPrimary: "#3D3D3D",
        darkSecoundary: "#4B4B4B",
        darkText: "#AFAFAF",
        Sblue: "#007AFF",
        Sred: "#FF5050",
      },
    },
  },
  plugins: [],
};
