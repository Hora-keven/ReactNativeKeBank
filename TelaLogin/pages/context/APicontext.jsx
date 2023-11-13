import { createContext, useState } from "react";


export const ApiContext = createContext({})

function ApiProvider({children}){
    const [token, setToken] = useState()
    const [user, setUser] = useState({})
    const [optionAccount, setAccount] = useState()
    const [userAccount, setUserAccount]= useState({})
    const [userJuridic, setUserJuridic] = useState({})


    function userLog(id, name, email, surname){

        setUser({
            id:id,
            name:name,
            email:email,
            surname:surname
        })

    }
    const userJuridicPerson = (id, companyName, cnpj)=>{

        setUserJuridic({
            id:id,
            companyName:companyName,
            cnpj:cnpj
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
    const tokenUser = (tokenE) =>{
        setToken(tokenE)
    }

    const changeOptionAccount = (account) => {
        setAccount(account)
    }
  
    return (
    <ApiContext.Provider value={{token, tokenUser,userJuridicPerson, userJuridic, userAccount, user, informationsAccountUser, userLog, changeOptionAccount, optionAccount}}>{children}</ApiContext.Provider>
    )
}

export default ApiProvider