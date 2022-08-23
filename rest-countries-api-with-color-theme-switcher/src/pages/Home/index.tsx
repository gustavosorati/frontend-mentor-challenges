import { useContext, useEffect, useState } from "react";
import { api } from "../../api";
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

// PAGINAÇÃO
{/* <PageContainer>
               {[...Array(contries.pages)].map((x, i) =>
                    <Page>
                        {i < 9 ? `0${i}` : i}
                    </Page>
                )} 

                <ul>
                    {Array.from({ length: MAX_ITEMS })
                        .map((_, index) => index + contries.first)
                        .map((page) => (
                            <li>
                                <button>{page}</button>

                            </li>
                        ))
                    }
                </ul>   
</PageContainer> */}

// function pagination(limit: number, total: number, offset: number) {
//     const currentPage = offset ? (offset - limit) + 1 : 1;
//     const pages = Math.ceil(total / limit);
//     const first = Math.max(currentPage - MAX_LEFT, 1);        
//     return { pages, currentPage, first}
// }