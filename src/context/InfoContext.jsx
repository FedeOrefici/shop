import { createContext, useEffect, useState } from "react";

export const ContextData = createContext()

const ContextDataProvider = ({children}) => {


    const [data, setData] = useState([])
    const [dataCoin, setDataCoin] = useState([])
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
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
                setDataCoin(dataNumberId)
            } catch (err) {
                console.log('error fetching data', err)
            }
        }
       fetchData()
    }, [])


     console.log(data);

    const toggleFavs = (coinId) => {
        if(favorites.some(coin => coin.id === coinId)){
            setFavorites(prevFavorites => prevFavorites.filter(item => item.id !== coinId))
        } else {
            const coinToAdd = data.find(coin => coin.id === coinId)
            if(coinToAdd){
                setFavorites(prevFavorites => [...prevFavorites, coinToAdd])
            }
        }
      }



    return(
        <ContextData.Provider value={{data, setData, favorites, toggleFavs, dataCoin}}>
            {children}
        </ContextData.Provider>
    )
}

export default ContextDataProvider