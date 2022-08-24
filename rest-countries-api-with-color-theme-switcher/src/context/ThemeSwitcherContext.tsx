import { createContext, ReactNode, useState } from "react";
import { darkTheme } from "../styles/themes/dark";
import { lightTheme } from "../styles/themes/light";

interface IThemeSwitcherContext {
  theme: typeof lightTheme,
  handleChangeTheme: () => void
}

export const ThemeSwitcherContext = createContext<IThemeSwitcherContext>({} as IThemeSwitcherContext);
    const [ theme, setTheme] = useState(lightTheme);

  function handleChangeTheme() {
    setTheme(theme.title === 'light' ? darkTheme : lightTheme);
  }

interface IThemeSwitcherProvider {
  children: ReactNode
}

export const ThemeSwitcherProvider = ({children}: IThemeSwitcherProvider) => {
    return (
        <ThemeSwitcherContext.Provider value={{handleChangeTheme, theme}}>  
            {children}
        </ThemeSwitcherContext.Provider>
    )
}