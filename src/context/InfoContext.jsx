import { createContext } from "react";

export const ContextData = createContext()

const ContextDataProvider = ({children}) => {
    
    const data = () => {
        console.log('data context')
    }
    
    return(
        <ContextData.Provider value={{data}}>
            {children}
        </ContextData.Provider>
    )
}

export default ContextDataProvider