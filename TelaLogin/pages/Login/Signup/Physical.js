import { View, Text, TextInput, Alert } from "react-native";
import styles from "./styles";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { useContext, useState } from 'react';

import { ApiContext } from "../../context/APicontext";

import api from "../../Api/Api";
import DropdownChoice from "../../../components/dropdown.jsx";

export default function Physical({ navigation }) {
    const {user, token, userLog} = useContext(ApiContext)
    const [bornDate, setBornDate] = useState("")
    const [cpf, setCpf] = useState("")
    const [rg, setRg] = useState("")
    const [city, setCity] = useState("")
    const [neighborhood, setNeghborhood] = useState("")
    const [federative_unit, setFederative_unit] = useState("")
    const [pac, setPac] = useState("")
    const [public_place, setPublic_space] = useState("")
   
        const createUser = async () =>{
            console.log(token)
            try{
                api.defaults.headers.Authorization = `Token ${token}`
                api.post('physicalperson/',{
                    physical_person:user.id,
                    born_date:bornDate,
                    cpf:cpf,
                    rg:rg,
                
    
                }).then(function (response) {
                 
                try{
                    api.post("address/",{
                        city:city,
                        neighborhood:neighborhood,
                        federative_unit:federative_unit,
                        pac:pac,
                        public_place:public_place,
                        physical_person:response.data.id
                    })
                }catch(error){
                    console.error(error);
                }
                try {
                    api.post('account/',{

                    })
                } catch (error) {
                    console.error(error)
                }
                navigation.navigate('FirstScreen')

              })
              .catch(function (error) {
                console.error(error);
              });

            }catch(error){
                console.log(error)
            }
            }
            console.log(user.id)
    return (
        <View style={styles.container}>

            <View style={styles.nameSlogan}>
                <View style={styles.title}>
                    <Text style={styles.txt}>Ke</Text>
                    <Text style={styles.secondPartName}>Bank</Text>
                </View>
            </View>

            <View style={styles.inputs}>
           
                <TextInput style={styles.input} value={bornDate} onChangeText={(text) =>setBornDate(text)} placeholder="Put your born date: " placeholderTextColor={'white'} />
                <TextInput style={styles.input} value={cpf} onChangeText={(text)=>setCpf(text)} inputMode="numeric" placeholder="Put your CPF: " placeholderTextColor={'white'} />
                <TextInput style={styles.input} value={rg} onChangeText={(text)=>setRg(text)} placeholder="Put your Rg: " placeholderTextColor={'white'} />
                <TextInput style={styles.input} value={city} onChangeText={(text)=>setCity(text)} placeholder="Put your City: " placeholderTextColor={'white'} />
                <TextInput style={styles.input} value={neighborhood} onChangeText={(text)=>setNeghborhood(text)} placeholder="Put your Neighborhood: " placeholderTextColor={'white'} />
                <TextInput style={styles.input} value={federative_unit} onChangeText={(text)=>setFederative_unit(text)} placeholder="Put your Federative unit: " placeholderTextColor={'white'} />
                <TextInput style={styles.input} value={pac} onChangeText={(text)=>setPac(text)} placeholder="Put your pac: " placeholderTextColor={'white'} />
                <TextInput style={styles.input} value={public_place} onChangeText={(text)=>setPublic_space(text)} placeholder="Put your public space: " placeholderTextColor={'white'} />
            </View>
            <View>
               <DropdownChoice width={100} color="black" top={100}/>
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