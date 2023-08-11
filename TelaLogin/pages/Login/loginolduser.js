import { View, Text, TextInput, Handle} from "react-native";
import styles from "./stylesUser";
import {BsArrowRight} from "react-icons/bs"
import { TouchableOpacity } from "react-native";

export default function Login_user({navigation}){
    return(
        
        <View style={styles.container}>
            
        <View style={styles.nameSlogan}>
            <View style={styles.title}>
                <Text style={styles.txt}>Ke</Text>
                <Text style={styles.secondPartName}>Bank</Text>
            </View>
        </View>
        <View style={styles.inputs}>
          
            <TextInput  style={styles.input} placeholder="Digite seu CPF: "/>
            <TextInput  style={styles.input} placeholder="Digite sua senha: "/>
        </View>
       <View>
            <TouchableOpacity onPress={()=>{navigation.navigate('first')}} style={styles.button}>
                <Text style={styles.Arrowbutton}><BsArrowRight/></Text>
            </TouchableOpacity>
       </View>
       <View style={styles.polign}></View>
        </View>
    )
}
