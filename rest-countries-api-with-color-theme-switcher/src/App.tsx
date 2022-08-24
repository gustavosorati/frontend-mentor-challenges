import { useContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CountriesProvider } from "./context/CountriesContext";
import { Router } from "./Router";
import { GlobalStyles } from "./styles/styles";
import { darkTheme } from "./styles/themes/dark";
import { lightTheme } from "./styles/themes/light";

function App() {
  const [ theme, setTheme] = useState(lightTheme);

  function changeTheme() {
    console.log(theme)
    setTheme(theme.title === 'light' ? darkTheme : lightTheme);
  }

  return (
    <BrowserRouter> 
        <CountriesProvider>
          <ThemeProvider theme={theme}>

            <Router themeSwitch={changeTheme}/>
            <GlobalStyles />
            
          </ThemeProvider>
        </CountriesProvider>
    </BrowserRouter>
  )
}

export default App
