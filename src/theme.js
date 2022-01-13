import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(2,0,36)",
    },
    secondary: {
      main: "#092079",
    },
    error: {
      main: red.A400,
    },
    info: {
      main: "#FFF",
    },
  },
});

export default theme;
