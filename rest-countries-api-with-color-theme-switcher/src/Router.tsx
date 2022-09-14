import {Route, Routes} from 'react-router-dom'
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