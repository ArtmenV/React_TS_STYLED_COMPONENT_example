import React from "react";
import Router from "./Router";
import GlobalStyles from "../Styles/GlobalStyles";
import { ThemeProvider } from "styled-components"
import theme from "../Styles/Theme"
const App = () => {
  return <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </>
};

export default App;
