import { createContext, useState } from "react";


export const ApiContext = createContext({})

function ApiProvider({children}){
    const [token, setToken] = useState()
    const [user, setUser] = useState({})
    
    function userLog(id, name, email, surname){

        setUser({
            id:id,
            name:name,
            email:email,
            surname:surname
        })

    }
    const tokenUser = (tk)=>{
    
        if(tk){
            setToken(tk)
        }
    }
  
    return (
    <ApiContext.Provider value={{token, tokenUser, user, userLog}}>{children}</ApiContext.Provider>
    )
}

export default ApiProvider