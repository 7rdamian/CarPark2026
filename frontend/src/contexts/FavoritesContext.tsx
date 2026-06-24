import { createContext } from "react"
import type { Car } from "../models/car"
import type { Favorite } from "../models/favorites"

type FavoritesContextType = {
    favorites: Favorite[]
    toggleFavorite: (car: Car) => void
    isFavorite: (car: Car) => boolean
}

export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)