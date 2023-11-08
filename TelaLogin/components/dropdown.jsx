import {Dropdown} from "react-native-element-dropdown";
import { ApiContext } from "../pages/context/APicontext";
import { useContext } from "react";

export default function DropdownChoice(width, color, top){
    const {optionAccount, changeOptionAccount} = useContext(ApiContext)
    const options = [
        {label:'Current', value:"current"},
        {label:'Poupation', value:"Poupation"}
    ]
    return(
    <Dropdown data={options}  value={optionAccount} style={{width:width, backgroundColor:color, top:top}} onChange={item=>{changeOptionAccount(item.value)}} labelField="label"
    valueField="value"/>
    )
}