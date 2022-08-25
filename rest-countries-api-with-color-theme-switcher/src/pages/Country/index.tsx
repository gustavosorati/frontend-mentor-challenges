import { ArrowLeft } from "phosphor-react";
import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { ContriesContext } from "../../context/CountriesContext";
import { BorderCountries, Button, CountryContainer, CountryContent, CountryInformations } from "./styles";

export function Country({ }) {
    const {pathname} = useLocation()
    const { data, findByName } = useContext(ContriesContext)
    
    const country = data[0];

    useEffect(()=> {
        const load = async () => {
            console.log('entrou 2')

            await findByName(pathname);
        }

        load();
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
                            <p>{country.name}</p>
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
                            <p>{country.name}</p>
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