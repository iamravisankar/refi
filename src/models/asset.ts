type PopularParings = {
    name: string
    imgUrl: string
    backgroundColor: string
}

export type Asset = {
    id: number
    name: string
    symbol: string
    backgroundColor: string
    imgUrl: string
    price: number
    percentageChange: number
    tvl: number
    popularParings: PopularParings[]
}
