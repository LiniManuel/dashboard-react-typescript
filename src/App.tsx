import "./App.scss";
import { Button, Input, Text } from "./ui";
import { ThemeProvider } from "styled-components";

const palette = {
  blue: "#3751FF",
  gray: "#4B506D",
  grayDark: "#363740",
  transparent: "transparent",
  black: "#252733",
  white: "#FFFFFF",
  warning: "#B33A3A",
  grayLight: "F0F1F7",
};

const theme = {
  colors: {
    primary: palette.blue,
    secondary: palette.gray,
    tertiary: palette.grayDark,
    border: palette.grayLight,
    white: palette.white,
    black: palette.black,
    trasparent: palette.transparent,
    warning: palette.warning,
  },
};

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <div style={{ width: "100%" }}>
          <Text>Dashboard Title</Text>
        </div>
        <Input placeholder="Inserisci la password" />
        <Button>Submit</Button>
      </ThemeProvider>
    </div>
  );
}

export default App;
