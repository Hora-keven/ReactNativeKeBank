import { View, Text, TextInput, Alert } from "react-native";
import styles from "./styles";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { useContext, useState } from 'react';
import api from './../../Api/Api'
import { ApiContext } from "../../context/APicontext";

export default function Physical({ navigation }) {
    const {user} = useContext(ApiContext)
    const [bornDate, setBornDate] = useState("")
    const [cpf, setCpf] = useState("")
    const [rg, setRg] = useState("")


    
        const createUser = async () =>{
            try{

                api.post('physicalperson/',{
                    physical_person:user.name,
                    born_date:bornDate,
                    cpf:cpf,
                    rg:rg,
                
    
                }).then(function (response) {
                console.log(response.data);
                navigation.navigate('Login')

              })
              .catch(function (error) {
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
                    <Text style={styles.txt}>Ke</Text>
                    <Text style={styles.secondPartName}>Bank</Text>
                </View>
            </View>

            <View style={styles.inputs}>
           
                <TextInput style={styles.input} value={bornDate} onChangeText={setBornDate} placeholder="Put your born date: " placeholderTextColor={'white'} />
                <TextInput style={styles.input} value={cpf} onChangeText={setCpf} inputMode="numeric" placeholder="Put your CPF: " placeholderTextColor={'white'} />
                <TextInput style={styles.input} value={rg} onChangeText={setRg} placeholder="Put your Rg: " placeholderTextColor={'white'} />
             
            </View>
            <View>
                <TouchableOpacity onPress={createUser} style={styles.Arrowbutton}>
                    <Ionicons  name="ios-arrow-forward" color={"white"} size={35}/>
                </TouchableOpacity>

            </View>

            <View style={styles.polign}></View>

        </View>
    )
    }