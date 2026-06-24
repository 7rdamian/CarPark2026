
import { useEffect, useState } from "react";
import type { PropsWithChildren } from "react";
import { getCars, type GetCarsParams } from "../data/car";
import type { Car } from "../models/car";
import { CarListContext } from "./CarListContext";
import { useFilters } from "../hooks/useFilters";


export function CarListProvider({ children }: PropsWithChildren) {

    const [carsList, setCarsList] = useState<Car[]>([])
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [total, setTotal] = useState<number | undefined>(undefined)
    const [totalPages, setTotalPages] = useState<number | undefined>(undefined)
    const { filters, page, limit } = useFilters()

    const getCarList = async () => {
        setIsLoading(true)
        setIsError(false)
        try {
            const params: GetCarsParams = {
                filters: filters,
                page: page,
                limit: limit
            }

            const result = await getCars(params)
            setCarsList(result.items)
            setTotal(result.total)
            setTotalPages(result.totalPages)
        } catch {
            setIsError(true)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getCarList()
    }, [filters.manufacturer, page, limit])

    const context = {
        carsList,
        isError,
        isLoading,
        total,
        totalPages,
    }

    return (
        <CarListContext.Provider value={context}>
            {children}
        </CarListContext.Provider>
    )
}