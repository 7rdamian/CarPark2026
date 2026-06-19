export type Car = {
    vin: string
    image: string
    manufacturer: string
    model: string
    constructionYear: number
    mileage: number
    engineSize: number
    power: number
    gearbox: string
    fuelType: string
    price: number
    description: string
    equipment: string
}

// export type NewCar = Omit<Car, 'vin'>
