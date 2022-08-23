import { MagnifyingGlass } from "phosphor-react";
import { ChangeEvent, useContext, useState } from "react";
import { api } from "../../api";
import { ContriesContext } from "../../context/CountriesContext";
import { InputElementContainer } from "./styles";

export function InputElement() {
    const { findByName } = useContext(ContriesContext)
    const [text, setText] = useState('')


    async function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
        setText(e.target.value)
        findByName(e.target.value)
    }

    return (
        <InputElementContainer>
            <MagnifyingGlass weight="regular" size={20} />
            <input type="text" placeholder="Search for a country..." onChange={handleOnChange} value={text} />
        </InputElementContainer>
    )
}