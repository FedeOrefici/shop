import { createContext, useEffect, useState } from "react";

export const ContextData = createContext()

const ContextDataProvider = ({children}) => {


    const [data, setData] = useState([])
    const [favorites, setFavorites] = useState([])
    const [search, setSearch] = useState('')
    const [isFav, setIsFav] = useState(false)
    const [pages, setPages] = useState(1)
    const [perPage, setPerpage] = useState(4)

    const numLast = pages * perPage
    const numFirst = numLast - perPage
    console.log(numFirst);
    const currentData = data.slice(numFirst, numLast)
    const max = Math.ceil(data.length / perPage)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=40&tsym=USD')
                const info = await response.json()
                console.log(info);
                const dataNumberId = info.Data.map(coin => ({
                    id: Number(coin.CoinInfo.Id),
                    name: coin.CoinInfo.Name,
                    fullName: coin.CoinInfo.FullName,
                    price: coin?.RAW?.USD?.PRICE,
                    volume24h: coin?.RAW?.USD?.VOLUME24HOUR,
                    circulationSupply: coin?.RAW?.USD?.CIRCULATINGSUPPLY
                }))
                setData(dataNumberId)
            } catch (err) {
                console.log('error fetching data', err)
            }
        }
       fetchData()
    }, [])

    const toggleFavs = (coinId) => {
        setIsFav(false)
        if(favorites.some(coin => coin.id === coinId)){
            setFavorites(prevFavorites => prevFavorites.filter(item => item.id !== coinId))
        } else {
            setIsFav(true)
            const coinToAdd = data.find(coin => coin.id === coinId)
            if(coinToAdd){
                setFavorites(prevFavorites => [...prevFavorites, coinToAdd])
            }
        }
      }

      const filtered = currentData.filter(coin => coin.fullName.toLowerCase().includes(search.toLowerCase()))




    return(
        <ContextData.Provider value={{
            filtered, 
            search, 
            setSearch, 
            favorites, 
            toggleFavs, 
            currentData, 
            setPages, 
            pages, 
            max, 
            isFav}}>
            {children}
        </ContextData.Provider>
    )
}

export default ContextDataProvider