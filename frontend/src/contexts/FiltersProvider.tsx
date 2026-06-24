
import { useState } from "react";
import type { PropsWithChildren } from "react";
import type { Filters } from "./FiltersContext";
import { FiltersContext } from "./FiltersContext";

const defaultFilters: Filters = {
    manufacturer: "",
}

export function FiltersProvider({ children }: PropsWithChildren) {
    const [filters, setFilters] = useState<Filters>(defaultFilters)

    const [page, setPage] = useState<number>(1)
    const [limit, setLimit] = useState<number>(25)
    const [showFavoritesOnly, setShowFavoritesOnly] = useState<boolean>(false)

    const updateFilter = (field: keyof Filters, value: string) => {
        setFilters(prev => ({ ...prev, [field]: value }))
    }

    const resetFilters = () => {
        setFilters(defaultFilters)
        setShowFavoritesOnly(false)
        setPage(1)
    }
    
    const context = {
        filters,
        setFilters,
        updateFilter,
        resetFilters,
        page,
        setPage,
        limit,
        setLimit,
        // sort,
        // setSort,
        // order,
        // setOrder,
        showFavoritesOnly,
        handleFavoritesToggle: (checked: boolean) => setShowFavoritesOnly(checked)
    }

    return (
        <FiltersContext.Provider value={context}>
            {children}
        </FiltersContext.Provider>
    )
}