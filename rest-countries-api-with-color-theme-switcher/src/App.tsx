import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ContriesContext, CountriesProvider } from "./context/CountriesContext";
import { Router } from "./Router";
import { GlobalStyles } from "./styles/styles";
import { lightTheme } from "./styles/themes/light";

function App() {
  

  return (
    <BrowserRouter> 
        <CountriesProvider>
          <ThemeProvider theme={lightTheme}>

            <Router />
            <GlobalStyles />
            
          </ThemeProvider>
        </CountriesProvider>
    </BrowserRouter>
  )
}

export default App
