import { createContext, useEffect, useState } from "react";

export const ContextData = createContext()

const ContextDataProvider = ({children}) => {


    const [data, setData] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
                const info = await response.json()
                setData(info)
            } catch (err) {
                console.log('error fetching data', err)
            }
        }
       fetchData()
    }, [])


    
    
    return(
        <ContextData.Provider value={{data}}>
            {children}
        </ContextData.Provider>
    )
}

export default ContextDataProvider