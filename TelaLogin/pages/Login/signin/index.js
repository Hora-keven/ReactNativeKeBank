import { View, Text, TextInput, Handle } from "react-native";
import styles from "./stylesUser";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import api from "../../Api/Api";
import { useContext, useState } from "react";
import * as Animatable from 'react-native-animatable';
import { ApiContext } from "../../context/APicontext";


export default function LoginUser({ navigation }) {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const {tokenUser, userLog, informationsAccountUser} = useContext(ApiContext)

    async function logar (){
        try{
            api.post('auth/token/login/',{
                username:user,
                password:password
    
          }).then(function(response){
            tokenUser(response.data.auth_token)
            
            try {
                api.defaults.headers.Authorization = `Token ${response.data.auth_token}`
                api.get("users/me/").then(function(response){
                    console.log(response.data.id)
                    userLog(response.data.id, response.data.first_name, response.data.email, response.data.surname )
                  
                })
                try {
                    api.get("account/"+user).then(function(response){
                        console.log(response.data[0].id)
                        informationsAccountUser(
                            response.data[0].id,
                            response.data[0].agency,
                            response.data[0].number,
                            response.data[0].number_verificate,
                            response.data[0].limit
                        
                        )
                        navigation.navigate("First")
                    }).catch(function(error){
                        console.error(error)
                    })
                      
                } catch (error) {
                    console.error(error)
                }
            } catch (error) {
                console.error(error)
            }
          
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
                <TextInput value={user} onChangeText={(text)=>setUser(text)} style={styles.input} placeholderTextColor={'white'} placeholder="Digite seu CPF: " />
                <TextInput value={password}  onChangeText={(text)=>setPassword(text)}  style={styles.input} placeholderTextColor={'white'} placeholder="Digite sua senha: " />
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
