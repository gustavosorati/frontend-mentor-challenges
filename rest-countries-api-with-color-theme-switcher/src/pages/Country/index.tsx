import { ArrowLeft } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { api } from "../../api";

import { ContriesContext } from "../../context/CountriesContext";
import { BorderCountries, Button, CountryContainer, CountryContent, CountryInformations } from "./styles";

interface IFetchData {
    name: {
        common: string;
    };
    population: number;
    region: string;
    subregion: string;
    capital: string[];
    flags: {
        png: string;
    };
    currencies: {};
}

interface ICountrie {
    name: string;
    population: number;
    region: string;
    subregion: string;
    capital: string[];
    flag: string;
    currencies: {};
}

export function Country() {
    const {pathname} = useLocation();
    const [country, setCountry]  = useState<ICountrie>({} as ICountrie);

    useEffect(()=> {
        async function findByName() {
            let response = await api.get<IFetchData[]>(`name/${pathname}`);
            let data = response.data[0];
            
            console.log(data)
            const formattedCountry: ICountrie = {
                name: data.name.common,
                population: data.population,
                region: data.region,
                capital: data.capital,
                subregion: data.subregion,
                flag: data.flags.png,
                // currencies: Object.keys(data.currencies).map(currencie => data.currencies[currencie])
            };
            
            // console.log(formattedCountry)
            setCountry(formattedCountry)
        }

        findByName();
    }, [])
    
    return (
        <CountryContainer className="container">
            <Button>
                <Link to="/">
                    <ArrowLeft weight="regular" size={20} />
                    Back
                </Link>
            </Button>

            {country && (
                <CountryContent>
                <img src={country.flag} alt={country.name} />

                <div>
                    <h1>{country.name}</h1>

                    <CountryInformations>
                        <li>
                            <strong>Native Name: </strong>
                            <p>{country.name}</p>
                        </li>
                        <li>
                            <strong>Top Level Domain: </strong>
                            <p>{country.name}</p>
                        </li>
                        <li>
                            <strong>Population: </strong>
                            <p>{country.population}</p>
                        </li>
                        <li>
                            <strong>Currencies: </strong>

                        </li>
                        <li>
                            <strong>Region: </strong>
                            <p>{country.region}</p>
                        </li>
                        <li>
                            <strong>Languages: </strong>
                            <p>{country.name}</p>
                        </li>

                        <li>
                            <strong>Sub Region: </strong>
                            <p>{country.subregion}</p>
                        </li>

                        <li>
                            <strong>Capital: </strong>
                            <p>{country.capital}</p>
                        </li>
                    </CountryInformations>

                    <BorderCountries>
                        <strong>Border Countries</strong>
                    </BorderCountries>
                </div>
            </CountryContent> 
            )}
            
        </CountryContainer>
    )
}