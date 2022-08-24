import { Moon } from "phosphor-react";
import { HeaderContainer, ThemeContainer } from "./styles";


interface HeaderProps {
    onSwitch: () => void;
}

export function Header({onSwitch}: HeaderProps) {

    return (
        <HeaderContainer>
            <div className="container">
                <h2>Where in the world?</h2>

                <ThemeContainer>
                    <button type="button" onClick={onSwitch}>
                        <Moon weight="fill" size={22}/>
                        Dark Mode
                    </button>
                </ThemeContainer>
            </div>
        </HeaderContainer>
    )
}