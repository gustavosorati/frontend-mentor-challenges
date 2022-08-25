import { Link } from "react-router-dom";
import { CardContainer, BasicInformationContainer} from "./styles";

interface ICountryCard {
    name: string;
    population: number;
    region: string;
    capital: string[];
    flag: string;
}

export function CountryCard(country: ICountryCard) {
    return (
        <CardContainer>
            <Link to={`${country.name}`}>
                <img src={country.flag} alt={country.name} />

                <BasicInformationContainer>
                    <h3>{country.name}</h3>
                    <p>
                        <strong>Population: </strong>
                        {country.population}
                    </p>
                    <p>
                        <strong>Region: </strong>
                        {country.region}
                    </p>
                    <p>
                        <strong>Capital: </strong>
                        {country.capital}
                    </p>
                </BasicInformationContainer>
            </Link>
        </CardContainer>
    )
}