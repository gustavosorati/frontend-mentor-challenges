import { ThemeProvider } from 'styled-components';
import CartProvider from './context/CartContext';
import { Home } from './pages';
import { GlobalStyles } from './styles/global';
import { defaultTheme } from './styles/theme';

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <Home />
        <GlobalStyles />
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
