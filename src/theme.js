// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// 2. Add your color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: false
};

// 3. extend the theme
const theme = extendTheme({
  config,
  fonts: {
    heading: "Lato , sans-serif",
    body: "Lato , sans-serif"
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode("gray.50", "gray.800")(props)
      }
    })
  }
});

export default theme;
