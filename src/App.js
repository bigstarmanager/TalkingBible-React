import logo from "./logo.svg";
import "./App.css";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import {
  Center,
  ChakraProvider,
  CircularProgress,
  extendTheme,
  CircularProgressLabel,
} from "@chakra-ui/react";
import MainApp from "../src/Navigation/App";
import Store from "../src/Pages/Store";

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
});

const theme = extendTheme({
  fonts: {
    heading: "Open Sans",
    body: "Raleway",
  },
  breakpoints,
});

const App = () => {
  return (
    <ChakraProvider theme={theme} >
      <MainApp />
    </ChakraProvider>
  );
};

export default App;
