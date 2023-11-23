import {Dropdown} from "react-native-element-dropdown";
import { ApiContext } from "./../TelaLogin/context/APicontext";
import { useContext } from "react";

function DropdownFees(){
    const {loan, changeLoan} = useContext(ApiContext)
    
    const options = [
        {label:'12x', value:12},
        {label:'24x', value:24},
        {label:'36x', value:36},
        
    ]
    return(
    <Dropdown data={options} placeholder="Parcelas" placeholderStyle={{color:"white"}} value={loan} style={{width:100, color:"white"}} onChange={item=>{changeLoan(item.value)
    console.log(item.value)}} labelField="label" 
    valueField="value"/>
    )
}

export default DropdownFees