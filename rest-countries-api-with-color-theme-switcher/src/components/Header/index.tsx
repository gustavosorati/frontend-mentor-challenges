import { Moon, Sun } from "phosphor-react";
import { useTheme } from "styled-components";
import { HeaderContainer, ThemeContainer } from "./styles";


interface HeaderProps {
    onSwitch: () => void;
}

export function Header({onSwitch}: HeaderProps) {
    const theme = useTheme();

    return (
        <HeaderContainer>
            <div className="container">
                <h2>Where in the world?</h2>

                <ThemeContainer>
                    <button type="button" onClick={onSwitch}>
                    {theme.title === "light" ? (
                        <>
                            <Moon weight="fill" size={22}/>
                            Dark Mode
                        </>
                    ) : (
                        <>
                            <Sun weight="fill" size={22}/>    
                            Light Mode
                        </>
                    )}

                        
                    </button>
                </ThemeContainer>
            </div>
        </HeaderContainer>
    )
}