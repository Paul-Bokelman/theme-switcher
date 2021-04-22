import React from "react";
import { useStore } from "./components";
import { light, dark } from "./themes";
import { Toggle } from "./components";
import { ThemeProvider, createGlobalStyle } from "styled-components";
function App() {
  const GlobalStyle = createGlobalStyle`
  body {
    transition-duration: 0.3s;
    background-color: ${(props) => props.theme.colors.background};
  }
`;
  const Dark = useStore((state) => state.dark);

  return (
    <ThemeProvider theme={Dark ? dark : light}>
      <GlobalStyle />
      <Toggle />
    </ThemeProvider>
  );
}

export default App;
