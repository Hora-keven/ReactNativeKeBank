import { createContext, useState } from "react";


export const ApiContext = createContext({})

function ApiProvider({children}){
    const [token, setToken] = useState()
    const [user, setUser] = useState({})
    const [optionAccount, setAccount] = useState()
    const [userAccount, setUserAccount]= useState({})
    const [userJuridic, setUserJuridic] = useState({})
    const [cardUser, setCardUser] = useState({})

    function userLog(id, nameOrCompanyName, email, cpfCnpj){

        setUser({
            id:id,
            nameOrCompanyName:nameOrCompanyName,
            email:email,
            cpfCnpj:cpfCnpj

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
    const cardUserLog = (number, validity) =>{
        setCardUser({
            number:number,
            validity:validity
        })
}  
    return (
    <ApiContext.Provider value={{token ,cardUser, cardUserLog, tokenUser,userJuridicPerson, userJuridic, userAccount, user, informationsAccountUser, userLog, changeOptionAccount, optionAccount}}>{children}</ApiContext.Provider>
    )
}

export default ApiProvider