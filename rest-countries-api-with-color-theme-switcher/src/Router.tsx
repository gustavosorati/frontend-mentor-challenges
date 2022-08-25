import { useContext } from 'react'
import {Route, Routes} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ThemeSwitcherContext } from './context/ThemeSwitcherContext'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Country } from './pages/Country'
import { Home } from './pages/Home'

interface RouterProps {
    themeSwitch: () => void;
}

export function Router({themeSwitch}: RouterProps) {

    return (
        <Routes>
            <Route element={<DefaultLayout themeSwitch={themeSwitch} />}>
                <Route path="/" element={<Home />} />
                <Route path="/:name" element={<Country />} />
            </Route>
        </Routes>

    )
}