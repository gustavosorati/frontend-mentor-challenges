import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { LayoutContainer } from "./styles";

interface DefaultLayout {
    themeSwitch: () => void;
}

export function DefaultLayout({themeSwitch}: DefaultLayout) {
    return (
        <LayoutContainer>
            <Header onSwitch={themeSwitch} />
            
            <Outlet />
        </LayoutContainer>
    )
}