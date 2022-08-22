import { useEffect, useState } from "react";
import { api } from "../../api";
import { CountryCard } from "../../components/CountryCard";
import { CountriesContainer } from "../../components/Header/styles";
import { InputElement } from "../../components/Input";
import { FiltersContainer, HomeContainer, Page, PageContainer } from "./styles";

interface ICountries {
    name: string;
    population: number;
    region: string;
    capital: string[];
    flag: string;
}[]

interface Ifetch {
    data: {
        name: string;
        population: number;
        region: string;
        capital: string[];
        flag: string;
    }[]
    pages: number
    length: number
}

interface IFetchCountries {
    name: {
        common: string;
    };
    population: number;
    region: string;
    capital: string[];
    flags: {
        png: string;
    };
}

// paginação
// saber quantos array
// Definir um limite por pagina
// separar

export function Home() {
    const [contries, setContries] = useState<Ifetch>({} as Ifetch);

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await api.get<IFetchCountries[]>('')
            
            const obj  = data.map(country => {
                return {   
                    name: country.name.common,
                    population: country.population,
                    region: country.region,
                    capital: country.capital,
                    flag: country.flags.png
                }
            });

            const pages = Math.round(data.length / 20);
            const length = data.length;

            console.log({
                data: obj, 
                pages, 
                length
            })

            setContries({
                data: obj, 
                pages, 
                length
            })
        }

        fetchData();
    }, [])

    return (
        <HomeContainer className="container">
            
            <FiltersContainer>
                <InputElement />

                <select>
                    <option>Teste</option>
                    <option>Teste1</option>
                    <option>Teste2</option>
                    <option>Teste3</option>
                </select>
            </FiltersContainer>

            <CountriesContainer>
                {contries.data && contries.data.map(country => {
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

            <PageContainer>
                {[...Array(contries.pages)].map((x, i) =>
                    <Page>
                        {i < 9 ? `0${i}` : i}
                    </Page>
                )}
                </PageContainer>
        </HomeContainer>
    )
}