import type { PropsWithChildren } from "react"
import { useEffect, useState } from "react"
import type { Car } from "../models/car"
import type { Favorite } from "../models/favorites"
import { FavoritesContext } from "./FavoritesContext"

const STORAGE_KEY = "carpark2026-favorites"

function readStoredFavorites(): Favorite[] {
    try {
        const stored = localStorage.getItem(STORAGE_KEY)

        if (!stored) {
            return []
        }

        const parsed = JSON.parse(stored) as Favorite[]
        return Array.isArray(parsed) ? parsed : []
    } catch {
        return []
    }
}

export function FavoritesProvider({ children }: PropsWithChildren) {
    const [favorites, setFavorites] = useState<Favorite[]>(readStoredFavorites)

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
    }, [favorites])

    const toggleFavorite = (car: Car) => {
        setFavorites((prev) =>
            prev.some((favorite) => favorite.vin === car.vin)
                ? prev.filter((favorite) => favorite.vin !== car.vin)
                : [...prev, { vin: car.vin }]
        )
    }

    const isFavorite = (car: Car) => favorites.some((favorite) => favorite.vin === car.vin)

    const context = {
        favorites,
        toggleFavorite,
        isFavorite,
    }

    return <FavoritesContext.Provider value={context}>{children}</FavoritesContext.Provider>
}