import { useContext, useEffect, useState } from "react";
import { CountryCard } from "../../components/CountryCard";
import { CountriesContainer } from "../../components/Header/styles";
import { InputElement } from "../../components/Input";
import { SelectElement } from "../../components/Select";
import { ContriesContext } from "../../context/CountriesContext";
import { FiltersContainer, HomeContainer, Page, PageContainer } from "./styles";

export function Home() {
    const { data } = useContext(ContriesContext)
    
    return (
        <HomeContainer className="container">
            
            <FiltersContainer>
                <InputElement />

                <SelectElement />
            </FiltersContainer>

            <CountriesContainer>
                {data && data.map(country => {
                    return (
                        <CountryCard 
                            key={country.name}
                            name={country.name}
                            capital={country.capital}
                            population={country.population}
                            flag={country.flag}
                            region={country.region}
                        />
                    )
                })}

            </CountriesContainer>
   
        </HomeContainer>
    )
}
