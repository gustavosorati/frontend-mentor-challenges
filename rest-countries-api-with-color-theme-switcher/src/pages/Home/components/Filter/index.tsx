import { ArrowCircleDown, ArrowDown, ArrowFatDown, ArrowLineDown, ArrowLineUp } from "phosphor-react";
import { ChangeEvent, useContext, useState } from "react";
import { ContriesContext } from "../../../../context/CountriesContext";
import { FilterButton } from "./styles";

export function Filter() {
    const { findByRegion } = useContext(ContriesContext)
    const [openFilter, setOpenFilter] = useState(false);

    async function handleOnSelect(filter: string) {
        await findByRegion(filter)
    }

    return (
        <FilterButton onClick={() => setOpenFilter(!openFilter)} placeholder="Filter By Value">
            {openFilter === false ? (
                <>
                    <span>
                        Filter by Region
                        <ArrowLineDown size={16} />    
                    </span>  
                </>
            ) : (
                <>
                    <span>
                        Filter by Region
                        <ArrowLineUp size={16} />    
                    </span>
                    
                    <ul>
                        <li value="africa" onClick={() => handleOnSelect('africa')}>Africa</li>
                        <li value="america" onClick={() => handleOnSelect('america')}>America</li>
                        <li value="asia" onClick={() => handleOnSelect('asia')}>Asia</li>
                        <li value="europe" onClick={() => handleOnSelect('europe')}>Europe</li>
                        <li value="oceania" onClick={() => handleOnSelect('oceania')}>Oceania</li>
                    </ul>
                </>
            )}
            
        </FilterButton>
    )
}