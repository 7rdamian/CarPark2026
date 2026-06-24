import { createContext } from "react";
import type { Car } from "../models/car";

type CarListContextType = {
    carsList: Car[];
    isError: boolean;
    isLoading: boolean;
    total?: number;
    totalPages?: number;
}

export const CarListContext = createContext<CarListContextType | undefined>(undefined)
