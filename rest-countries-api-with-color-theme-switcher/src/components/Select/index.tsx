import { ChangeEvent, useContext, useState } from "react";
import { ContriesContext } from "../../context/CountriesContext";
import { SelectElementContainer } from "./styles";

export function SelectElement() {
    const { findByRegion } = useContext(ContriesContext)
    const [region, setRegion] = useState('')

    async function handleOnSelect(e: ChangeEvent<HTMLSelectElement>) {
        setRegion(e.target.value)
        findByRegion(e.target.value)
    }

    return (
        <SelectElementContainer onChange={handleOnSelect} value={region} placeholder="Filter By Value">
            <option>Filter By Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </SelectElementContainer>
    )
}