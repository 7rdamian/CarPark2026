import "./Content.css"
import { CarItem } from "../CarItem/CarItem"
import { FiltersPanel } from "../FiltersPanel/FiltersPanel"
import { SortingPanel } from "../SortingPanel/SortingPanel"
import { useCarsList } from "../../hooks/useCarsList"
import { Pagination } from "../Pagination/Pagination"
import { useFilters } from "../../hooks/useFilters"
import { useFavorites } from "../../hooks/useFavorites"

export function Content() {
    const { carsList, isLoading, isError } = useCarsList()
    const { showFavoritesOnly } = useFilters()
    const { isFavorite } = useFavorites()

    const visibleCarsList = showFavoritesOnly
        ? carsList.filter((car) => isFavorite(car))
        : carsList

    return (
        <div className="Content">
            <FiltersPanel />

            <SortingPanel />

            {isLoading && <p>Data is loading...</p>}
            {isError && <p>Something went wrong</p>}

            {!isLoading && !isError && (
                <div className="CarList">

                    <Pagination />

                    {visibleCarsList.map((car) => (
                        <CarItem key={car.vin} car={car} />
                    ))}

                    <Pagination />
                </div>
            )}
        </div>
    )
}