import { View, Text, TextInput, Handle } from "react-native";
import styles from "./stylesUser";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import api from "../../Api/Api";
import { useContext, useState } from "react";
import * as Animatable from 'react-native-animatable';
import { ApiContext } from "../../context/APicontext";
export default function LoginUser({ navigation }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {tokenUser} = useContext(ApiContext)

    async function logar (){
        try{
            api.post('auth/token/login/',{
                username:email,
                password:password
    
          }).then(function(response){
     
            tokenUser(response.data.auth_token)
            navigation.navigate("PhysicalOrJuridic")
          }).catch(function (error) {
            console.error(error);
          });

        }catch(error){
            console.log(error)
        }
      
    }
    return (

        <View style={styles.container}>

            <View style={styles.nameSlogan}>
                <View style={styles.title}>
                <Animatable.Text animation='pulse'  duration={2000} style={styles.txt}>Ke</Animatable.Text>
                    <Text style={styles.secondPartName}>Bank</Text>
                </View>
            </View>

            <View style={styles.inputs}>
                <TextInput value={email} onChangeText={setEmail} style={styles.input} placeholderTextColor={'white'} placeholder="Digite seu CPF: " />
                <TextInput value={password}  onChangeText={setPassword}  style={styles.input} placeholderTextColor={'white'} placeholder="Digite sua senha: " />
            </View>

            <View>
                <TouchableOpacity onPress={logar} style={styles.button}>
                    <Ionicons style={styles.Arrowbutton} name="ios-arrow-forward" />
                </TouchableOpacity>
            </View>

            <View style={styles.polign}></View>
        </View>
    )
}
