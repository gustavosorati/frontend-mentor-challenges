import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { api } from "../api";

interface ICountry {
    initials: string,
    name: string;
    population: number;
    region: string;
    capital: string[];
    flag: string;
}


interface IFetchData {
    cca3: string;
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

interface IContriesContext {
    data: ICountry[];
    isLoading: boolean;
    findByName: (name: string) => Promise<void>
    findByRegion: (region: string) => Promise<void>
}


export const ContriesContext = createContext({} as IContriesContext);

interface CountriesProviderProps {
    children: ReactNode;
}

export const CountriesProvider = ({children}: CountriesProviderProps) => {
    const [data, setData] = useState<ICountry[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    function sortByName(countries: ICountry[]) {
        let result = countries.sort((a, b) => {
            return a.name < b.name ? -1 : (a.name > b.name) ? 1 : 0;
        });

        return result
    }

    const fetchCountries = async () => {
        setIsLoading(true);
        try {
            const response = await api.get<IFetchData[]>('/all')
            
            let countries  = response.data.map(country => {
                return {
                    initials: country.cca3,
                    name: country.name.common,
                    population: country.population,
                    region: country.region,
                    capital: country.capital,
                    flag: country.flags.png
                }
            });

            countries = sortByName(countries);
       
            setData(countries);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }

    async function findByName(query?: string) {
        setIsLoading(true);
        try {
            if(query && query.length > 1){
                let response = await api.get<IFetchData[]>(`name/${query}`);
                
                let countries = response.data.map(country => {
                    return {   
                        initials: country.cca3,
                        name: country.name.common,
                        population: country.population,
                        region: country.region,
                        capital: country.capital,
                        flag: country.flags.png
                    }
                });

                countries = sortByName(countries);


                setData(countries)
            } else {
                await fetchCountries();
            }
        }catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }

    async function findByRegion(query: string) {
        setIsLoading(true)
        try{
            let response = await api.get<IFetchData[]>(`region/${query}`);

            let countries = response.data.map(country => {
                return {   
                    initials: country.cca3,
                    name: country.name.common,
                    population: country.population,
                    region: country.region,
                    capital: country.capital,
                    flag: country.flags.png
                }
            })
            
            countries = sortByName(countries);

            setData(countries)
            setIsLoading(true);
                
        }catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }

    }

    useEffect(() => {
        fetchCountries();
    }, [])

    return (
        <ContriesContext.Provider value={{ data, isLoading, findByName, findByRegion }}>
            {children}
        </ContriesContext.Provider>
    )
}