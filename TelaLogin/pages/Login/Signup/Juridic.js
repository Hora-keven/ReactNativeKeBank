import { View, Text, TextInput, Alert } from "react-native";
import styles from "./styles";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { useContext, useState } from 'react';
import apiWithToken from './../../Api/Api'
import { ApiContext } from "../../context/APicontext";

export default function Juridic({ navigation }) {
    const {user} = useContext(ApiContext)
    const [openDate, setOpenDate] = useState("")
    const [cnpj, setCnpj] = useState("")
    const [stateRegistration, setStateRegistration] = useState("")


    
        const createUser = async () =>{
            try{

                apiWithToken.post('juridicperson/',{
                    juridic_person:user.name,
                    state_registration:bornDate,
                    cnpj:cnpj,
                    open_date:openDate,
                
    
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
           
                <TextInput style={styles.input} value={openDate} onChangeText={setOpenDate} placeholder="Put your open date: " placeholderTextColor={'white'} />
                <TextInput style={styles.input} value={cnpj} onChangeText={setCnpj} inputMode="numeric" placeholder="Put your CNPJ: " placeholderTextColor={'white'} />
                <TextInput style={styles.input} value={stateRegistration} onChangeText={setStateRegistration} placeholder="Put your state registration: " placeholderTextColor={'white'} />
             
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