import { View, Text, TextInput} from "react-native";
import styles from "./styles";
import { Ionicons } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native";

export default function Login({navigation}){
 
    return(
        <View style={styles.container}>
            
        <View style={styles.nameSlogan}>
            <View style={styles.title}>
                <Text style={styles.txt}>Ke</Text>
                <Text style={styles.secondPartName}>Bank</Text>
            </View>
        </View>
     
        <View style={styles.inputs}>
            <TextInput  style={styles.input} placeholder="Nome" placeholderTextColor={'white'} />
            <TextInput  style={styles.input} placeholder="Data de nascimento: "  placeholderTextColor={'white'}/>
            <TextInput  style={styles.input} inputMode="numeric" placeholder="Digite seu CPF: " placeholderTextColor={'white'}/>
            <TextInput  style={styles.input} placeholder="Digite seu E-mail: "  placeholderTextColor={'white'}/>
            <TextInput  style={styles.input} placeholder="Crie sua senha: "  placeholderTextColor={'white'}/>
            <TextInput  style={styles.input} placeholder="Repita a sua senha: "  placeholderTextColor={'white'}/>

        </View>
       <View>
            <TouchableOpacity onPress={()=>{navigation.navigate('Login_old_user')}} style={styles.button}>
                <Ionicons style={styles.Arrowbutton} name="ios-arrow-forward"/>
            </TouchableOpacity>
            
       </View>
     
        <View style={styles.polign}></View>
   
        </View>
    )
}