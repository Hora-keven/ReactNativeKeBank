import { createContext, useState } from "react";


export const ApiContext = createContext({})

function ApiProvider({children}){
    const [token, setToken] = useState()
    const [user, setUser] = useState({})
    const [optionAccount, setAccount] = useState()
    const [userAccount, setUserAccount]= useState({})

    function userLog(id, name, email, surname){

        setUser({
            id:id,
            name:name,
            email:email,
            surname:surname
        })

    }
    const informationsAccountUser = (id, agency, numberVerificate, number, limit )=>{
        setUserAccount({
            id:id,
            agency:agency,
            numberVerificate:numberVerificate,
            number:number,
            limit:limit

        })
    }
    const tokenUser = (tk) =>{
    
        if(tk){
            setToken(tk)
        }
    }
    const changeOptionAccount = (account) => {
        setAccount(account)
    }
  
    return (
    <ApiContext.Provider value={{token, tokenUser, userAccount, user, informationsAccountUser, userLog, changeOptionAccount, optionAccount}}>{children}</ApiContext.Provider>
    )
}

export default ApiProvider