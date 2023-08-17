import { createContext, useEffect, useState } from "react";

export const ContextData = createContext()

const ContextDataProvider = ({children}) => {


    const [data, setData] = useState([])
    const [favorites, setFAvorites] = useState()


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
                    price: coin?.DISPLAY?.USD?.PRICE
                }))
                setData(dataNumberId)
            } catch (err) {
                console.log('error fetching data', err)
            }
        }
       fetchData()
    }, [])


    console.log(data, 'aca data');
    


    const toggleFavs = (coinId) => {
      if(data?.find(item => item?.id === coinId)){
        console.log(`existe papu ${coinId}`);
      }
    }

    return(
        <ContextData.Provider value={{data, favorites, toggleFavs}}>
            {children}
        </ContextData.Provider>
    )
}

export default ContextDataProvider