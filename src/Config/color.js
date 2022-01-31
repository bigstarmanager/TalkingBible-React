import { extendTheme } from "@chakra-ui/react";
const customColors = {
  common: {
    700: "#000000",
    600: "#1c9d94",
    500: "rgba(47,85,151,255)",
    400: "#5e9dd5",
    300: "#67c9cd",
    200: "#5cb85c",
    100: "white",
  },

  black: {
    100: "black",
  },
  white:{
   100:'#FFFFFF'
  },

  gray: {
    200: "#c1c1c1",
    100: "#969997",
    300: "#EDEDED",
    300: "#e0e0e0",
    400: "#595959",
    500: "#A8A8A8",
    600: "#C0C0C0",
    700: "#707070",
    800: "#6e6e64",
    900:'#f7f7f7',
    1000:'rgb(219,219,219)',
    1001:'rgb(246,246,250)'
    
  },
  errorColor: {
    100: "#ff3333",
  },

  bgColors: {
    200: "#1C8EF9",
    100: "tomato",
    300: "#da1c18",
    400: "#4973de",
    500: "#f6f6fa",
    600: "#6face9",
    700:'#6eb3b0',
    800:'#dbdbdb'
  },
  green: {
    100: "#008000",
  },
  red: {
    100: "#ff0000",
  },
  defaultColors: {
    primary: "#72C6C8",
    secondary: "",
    accent: "#DC1C19",
    backgroundColor: "rgb(244, 244, 247)",
    white: "white",
    iconColor: "grey",
    darkGray: "#595959",
    forgotPassword: "grey",
    boxBackground: "white",
    errorColor: "rgb(255, 81, 96)",
    buttonOne: "rgb(94, 93, 233)",
    danger: "rgb(255, 81, 96)",
    success: "rgb(0, 204, 144)",
  },
  // define theme with colors
  LightMode: {
    // ...defaultColors,
    activityIndicator: "white",
    textColor: "black",
    textInputBackground: "white",
    textInputBorderColor: "lightgrey",
    buttonBorderColor: "lightgrey",
    borderColor: "grey",
  },
  DarkMode: {
    // ...defaultColors,
    activityIndicator: "black",
    textColor: "rgb(166, 174, 208)",
    textInputBackground: "white",
    textInputBorderColor: "lightgrey",
    buttonBorderColor: "lightgrey",
    borderColor: "grey",
    boxBackground: "rgb(42, 47, 67)",
    backgroundColor: "rgb(34, 38, 55)",
  },
  subsciptionsColors:{
    100:"#02c5c1",
    200:"#00afef",
    300:"#f9389d",
    400:"#ff0000",
    500:"#7e7e7e",
    600:"#f1f1f1",
    700:"#818181",
    800:"#ffffff",
  }
};
const theme = extendTheme({ customColors });
export default theme;
