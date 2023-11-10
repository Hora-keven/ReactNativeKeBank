import {Dropdown} from "react-native-element-dropdown";
import { ApiContext } from "../pages/context/APicontext";
import { useContext } from "react";

export default function DropdownChoice( ){
    const {optionAccount, changeOptionAccount} = useContext(ApiContext)
    const options = [
        {label:'Current', value:"Current"},
        {label:'Poupation', value:"Poupation"}
    ]
    return(
    <Dropdown data={options} placeholder="Tipo conta" placeholderStyle={{color:"white"}} value={optionAccount} style={{width:100, color:"white"}} onChange={item=>{changeOptionAccount(item.value)}} labelField="label"
    valueField="value"/>
    )
}