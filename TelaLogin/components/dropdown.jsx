import {Dropdown} from "react-native-element-dropdown";
import { ApiContext } from "../pages/context/APicontext";
import { useContext } from "react";

export default function DropdownChoice(width, color, top){
    const {optionAccount, changeOptionAccount} = useContext(ApiContext)
    const options = [
        {label:'Current', value:"Current"},
        {label:'Poupation', value:"Poupation"}
    ]
    return(
    <Dropdown data={options} placeholder="Tipo da conta" placeholderStyle={{color:"white"}} value={optionAccount} style={{width:width, backgroundColor:color, top:top, position:"relative"}} onChange={item=>{changeOptionAccount(item.value)}} labelField="label"
    valueField="value"/>
    )
}