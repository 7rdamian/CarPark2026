import './App.css'
import { Content } from './components/Content/Content'
import { FiltersProvider } from './contexts/FiltersProvider'
import { FavoritesProvider } from './contexts/FavoritesProvider'
import { CarListProvider } from './contexts/CarListProvider'

export function App() {
    return (
        <FiltersProvider>
            <FavoritesProvider>
                <CarListProvider>
                    <Content />
                </CarListProvider>
            </FavoritesProvider>
        </FiltersProvider>
    )
}

