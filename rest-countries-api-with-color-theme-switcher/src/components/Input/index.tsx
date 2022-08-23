import { MagnifyingGlass } from "phosphor-react";
import { ChangeEvent, useContext } from "react";
import { api } from "../../api";
import { ContriesContext } from "../../context/CountriesContext";
import { InputElementContainer } from "./styles";

export function InputElement() {
    const { findByName } = useContext(ContriesContext)

    async function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
        findByName(e.target.value)
    }

    return (
        <InputElementContainer>
            <MagnifyingGlass weight="regular" size={20} />
            <input type="text" placeholder="Search for a country..." onChange={handleOnChange} />
        </InputElementContainer>
    )
}