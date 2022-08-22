import { MagnifyingGlass } from "phosphor-react";
import { InputElementContainer } from "./styles";

export function InputElement() {
    return (
        <InputElementContainer>
            <MagnifyingGlass weight="regular" size={20} />
            <input type="text" placeholder="Search for a country..."/>
        </InputElementContainer>
    )
}