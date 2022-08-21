import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { GlobalStyles } from "./styles/styles";
import { lightTheme } from "./styles/themes/light";

function App() {
  

  return (
    <BrowserRouter> 
      <ThemeProvider theme={lightTheme}>

        <Router />

        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
