import { createContext, useState } from "react";


export const ApiContext = createContext({})
UserProps = {

}
function ApiProvider({children}){
    const [token, setToken] = useState("")
    const [user, setUser] = useState({})
    
    function userLog(name, email, surname){
        setUser({
            name:name,
            email:email,
            surname:surname
        })

    }
    function tokenUser(t){
        if(t != ""){
            setToken(t)
        }
       
    }
    return (
    <ApiContext.Provider value={{token, tokenUser, user, userLog}}>{children}</ApiContext.Provider>
    )
}

export default ApiProvider