import { createContext, useState } from "react";


export const ApiContext = createContext({})

function ApiProvider({children}){
    const [token, setToken] = useState()
    const [user, setUser] = useState({})
    const [optionAccount, setAccount] = useState()
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
    const changeOptionAccount = (account)=> {
        setAccount(account)
    }
  
    return (
    <ApiContext.Provider value={{token, tokenUser, user, userLog, changeOptionAccount, optionAccount}}>{children}</ApiContext.Provider>
    )
}

export default ApiProvider