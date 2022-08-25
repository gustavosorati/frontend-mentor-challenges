import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../api";

interface ICountries {
    name: string;
    population: number;
    region: string;
    capital: string[];
    flag: string;
}


interface IFetchData {
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
    data: {
        name: string;
        population: number;
        region: string;
        capital: string[];
        flag: string;
    }[]
    findByName: (name: string) => Promise<void>
    findByRegion: (region: string) => Promise<void>
    onLoad: () => Promise<void>
}


export const ContriesContext = createContext({} as IContriesContext);

interface CountriesProviderProps {
    children: ReactNode;
}

export const CountriesProvider = ({children}: CountriesProviderProps) => {
    const [data, setData] = useState<ICountries[]>([]);

    // useEffect(() => {
    //     console.log('entrou 1')
    //     const fetchData = async () => {
    //         const {data: d} = await api.get<IFetchData[]>('/all')
            
    //         const obj  = d.map(country => {
    //             return {   
    //                 name: country.name.common,
    //                 population: country.population,
    //                 region: country.region,
    //                 capital: country.capital,
    //                 flag: country.flags.png
    //             }
    //         });
    
    //         setData(obj)
    //     }

    //     fetchData();
    // }, []);

    async function onLoad(){
        console.log('entrou 1')
        const {data: d} = await api.get<IFetchData[]>('/all')
            
            const obj  = d.map(country => {
                return {   
                    name: country.name.common,
                    population: country.population,
                    region: country.region,
                    capital: country.capital,
                    flag: country.flags.png
                }
            });
    
            setData(obj)
    }


    async function findByName(name: string) {
        let response = await api.get<IFetchData[]>(`name/${name}`);

        const obj  = response.data.map(country => {
            return {   
                name: country.name.common,
                population: country.population,
                region: country.region,
                capital: country.capital,
                flag: country.flags.png
            }
        });

        setData(obj)
    }

    async function findByRegion(region: string) {
        let response = await api.get<IFetchData[]>(`region/${region}`);

        const obj  = response.data.map(country => {
            return {   
                name: country.name.common,
                population: country.population,
                region: country.region,
                capital: country.capital,
                flag: country.flags.png
            }
        });

        setData(obj)
    }


    return (
        <ContriesContext.Provider value={{ data, findByName, findByRegion, onLoad }}>
            {children}
        </ContriesContext.Provider>
    )
}