import { View, Text, TextInput, Handle} from "react-native";
import styles from "./stylesUser";
import { Ionicons } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native";

export default function LoginUser({navigation}){
    return(
        
        <View style={styles.container}>
            
        <View style={styles.nameSlogan}>
            <View style={styles.title}>
                <Text style={styles.txt}>Ke</Text>
                <Text style={styles.secondPartName}>Bank</Text>
            </View>
        </View>

        <View style={styles.inputs}>
            <TextInput  style={styles.input} placeholderTextColor={'white'} placeholder="Digite seu CPF: "/>
            <TextInput  style={styles.input} placeholderTextColor={'white'} placeholder="Digite sua senha: "/>
        </View>

       <View>
            <TouchableOpacity onPress={()=>{navigation.navigate('First')}} style={styles.button}>
            <Ionicons style={styles.Arrowbutton} name="ios-arrow-forward"/>
            </TouchableOpacity>
       </View>
       
       <View style={styles.polign}></View>
        </View>
    )
}
