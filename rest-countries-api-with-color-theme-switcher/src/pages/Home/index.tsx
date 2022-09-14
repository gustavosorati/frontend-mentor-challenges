import { useContext } from "react";
import { CountryCard } from "./components/CountryCard";
import { CountriesContainer } from "../../components/Header/styles";
import { SearchForm } from "./components/SearchForm";
import { Filter } from "./components/Filter";
import { ContriesContext } from "../../context/CountriesContext";
import { FiltersContainer, HomeContainer } from "./styles";
import { SpinComponent } from "../../components/Skeleton/SpinComponent";

export function Home() {
    const { data, isLoading } = useContext(ContriesContext)
    
    return (
        <HomeContainer className="container">
            
            <FiltersContainer>
                <SearchForm />

                <Filter />
            </FiltersContainer>

            <CountriesContainer>
                {isLoading && ( <SpinComponent /> )}
                {data && data.map(country => {
                    return (
                        <CountryCard 
                            key={country.name}
                            name={country.name}
                            capital={country.capital}
                            population={country.population}
                            flag={country.flag}
                            region={country.region}
                            initials={country.initials}
                        />
                    )
                })}

            </CountriesContainer>
   
        </HomeContainer>
    )
}
