import { useEffect, useState } from "react";
import { api } from "../../api";
import { CountryCard } from "../../components/CountryCard";
import { CountriesContainer } from "../../components/Header/styles";
import { InputElement } from "../../components/Input";
import { FiltersContainer, HomeContainer } from "./styles";

interface ICountries {
    name: string;
    population: number;
    region: string;
    capital: string[];
    flag: string;
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


export function Home() {
    const [coutries, setCountries] = useState<ICountries[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await api.get<IFetchCountries[]>('')
            
            const formatedObject  = data.map(country => {
                return {
                    name: country.name.common,
                    population: country.population,
                    region: country.region,
                    capital: country.capital,
                    flag: country.flags.png
                }
            })

            console.log(formatedObject)
            setCountries(formatedObject)
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
                {coutries.map(country => {
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