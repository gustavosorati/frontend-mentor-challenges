import { ArrowLeft } from "phosphor-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../../api";

import { BorderCountriesContainer, Button, CountryContainer, CountryContent, CountryInformations } from "./styles";


interface ICountry {
    alpha3Code: string;
    borders: Array<string>
    capital: string[];
    currencies: string[];
    flag: string;
    languages: string[]
    name: string;
    nativeName: string;
    population: number;
    region: string;
    subregion: string
    topLevelDomains: string[];
}


export function Country() {
    const {name} = useParams();    
    const [country, setCountry]  = useState<ICountry>({} as ICountry);

    useEffect(()=> {
        async function findByName() {
            let response = await api.get(`alpha/${name}`);
            let data = response.data[0];
            
            let languages = Object.keys(data.languages).map((key : string | any) => {
                return data.languages[key]
            }).sort() as []

            let currencies = Object.keys(data.currencies).map((key : string | any) => {
                return data.currencies[key].name
            }).sort() as []

            const formattedCountry: ICountry = {
                alpha3Code: data.alpha3Code,
                capital: data.capital,
                currencies: currencies,
                flag: data.flags.png,
                name: data.name.common,
                nativeName: data.name.official,
                population: data.population,
                region: data.region,
                subregion: data.subregion,
                
                languages: languages,
                borders: data.borders,
                topLevelDomains: data.tld,
            } ;
            

            setCountry(formattedCountry)
        }

        findByName();
    }, [])
    
    return (
        <CountryContainer className="container">
            <Button>
                <Link to={{
                    pathname: '/',
                }}>
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
                            <p>{country.nativeName}</p>
                        </li>
                        <li>
                            <strong>Top Level Domain: </strong>
                            {country.topLevelDomains && country.topLevelDomains.map(tld => {
                                return (
                                    <span key={tld}>{tld}</span>
                                )
                            })}
                        </li>
                        <li>
                            <strong>Population: </strong>
                            <p>{country.population}</p>
                        </li>
                        <li>
                            <strong>Currencies: </strong>
                            {country.currencies && country.currencies.map(currencie => {
                                return (
                                    <span key={currencie}>{currencie}</span>
                                )
                            })}
                        </li>
                        <li>
                            <strong>Region: </strong>
                            <p>{country.region}</p>
                        </li>
                        <li>
                            <strong>Languages: </strong>
                            {country.languages && country.languages.map(lang => {
                                return (
                                    <span key={lang}>{lang}</span>
                                )
                            })}
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

                    <BorderCountriesContainer>
                        <strong>Border Countries</strong>
                        <div>
                        {country.borders && country.borders.map(border => {
                            return (
                                <span key={border}>{border}</span>
                            )
                        })}
                        </div>
                    </BorderCountriesContainer>
                </div>
            </CountryContent> 
            )}
            
        </CountryContainer>
    )
}