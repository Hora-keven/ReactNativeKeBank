import { View, Text, TextInput} from "react-native";
import styles from "./styles";
import {BsArrowRight} from "react-icons/bs"
import { TouchableOpacity } from "react-native-web";

export default function Login(){
    return(
        <View style={styles.container}>
            
        <View style={styles.nameSlogan}>
            <View style={styles.title}>
                <Text style={styles.txt}>Ke</Text>
                <Text style={styles.secondPartName}>Bank</Text>
            </View>
        </View>
        <View style={styles.inputs}>
            <TextInput  style={styles.input} placeholder="Nome" />
            <TextInput  style={styles.input} placeholder="Data de nascimento: "/>
            <TextInput  style={styles.input} placeholder="Digite seu CPF: "/>
            <TextInput  style={styles.input} placeholder="Digite seu email: "/>
            <TextInput  style={styles.input} placeholder="Crie sua senha: "/>
            <TextInput  style={styles.input} placeholder="Repita a senha: "/>
        </View>
       <View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.Arrowbutton}><BsArrowRight/></Text>
            </TouchableOpacity>
       </View>
        </View>
    )
}