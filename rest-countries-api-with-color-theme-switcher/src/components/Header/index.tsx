import { HeaderContainer, ThemeContainer } from "./styles";

export function Header() {
    return (
        <HeaderContainer>
            <div className="container">
                <h2>Where in the world?</h2>

                <ThemeContainer>
                    <p>Dark Mode</p>
                </ThemeContainer>
            </div>
        </HeaderContainer>
    )
}