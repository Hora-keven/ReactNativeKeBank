import { createContext, useState } from "react";


export const ApiContext = createContext({})

function ApiProvider({children}){
    const [token, setToken] = useState("")

    
    return (
    <ApiContext.Provider value={{token, setToken}}>{children}</ApiContext.Provider>
    )
}

export default ApiProvider