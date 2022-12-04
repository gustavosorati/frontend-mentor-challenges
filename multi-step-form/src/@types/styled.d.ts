import 'styled-components';
import { defaultTheme } from '../styles/theme';

type MyTheme = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends MyTheme {}
}
