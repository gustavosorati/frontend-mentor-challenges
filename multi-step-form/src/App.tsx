import { ThemeProvider } from 'styled-components';
import { Home } from './pages';
import { GlobalStyles } from './styles/global';
import { defaultTheme } from './styles/theme';

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
