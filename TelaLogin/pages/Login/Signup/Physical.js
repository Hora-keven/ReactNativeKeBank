import { View, Text, TextInput, Alert } from "react-native";
import styles from "./styles";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { useContext, useState } from 'react';

import { ApiContext } from "../../context/APicontext";

import api from "../../Api/Api";
import DropdownChoice from "../../../components/dropdown.jsx";
import apiCep from "../../Api/ApiCep";

export default function Physical({ navigation }) {
    const {user, userLog, tokenUser, token, optionAccount} = useContext(ApiContext)
    const [bornDate, setBornDate] = useState("")
    const [cpf, setCpf] = useState("")
    const [rg, setRg] = useState("")
    const [city, setCity] = useState("")
    const [neighborhood, setNeghborhood] = useState("")
    const [federative_unit, setFederative_unit] = useState("")
    const [pac, setPac] = useState("")
    const [public_place, setPublic_space] = useState("")
    const [nome, setNome] = useState("")
    const [numero, setNumero] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [street, setStreet] = useState("")
  
   
    const createAccount = async () =>{
     
       
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
                    street:street,
                    public_place:public_place,
                    physical_person:response.data.cpf
                })
            }catch(error){
                console.error(error);
            }
            try {
                api.post('account/',{
                    type_account:optionAccount,
                    physical_person:response.data.cpf
                })
            } catch (error) {
                console.error(error)
            }
            navigation.navigate('First')

          })
          .catch(function (error) {
            console.error(error);
          });

        }catch(error){
            console.log(error)
        }
        }
      
        
    const createUser = async () =>{
        try{

            api.post('users/',{
                username:cpf,
                first_name:nome,
                surname:sobrenome,
                email:email,
                password:senha,
                phone_number:numero

            }).then(function (response) {
            userLog(response.data.id, nome, email, sobrenome)
          
            try{
                api.post('auth/token/login/',{
                    username:cpf,
                    password:senha
        
              }).then(function(response){
                tokenUser(response.data.auth_token)
                

              }).catch(function (error) {
                console.error(error);
              });
    
            }catch(error){
                console.log(error)
            }
           
          })
          .catch(function (error) {
            console.error(error);
          });

        }catch(error){
            console.log(error)
        }
        }


        const searchPac = ()=>{

            apiCep.get(`${pac}/json`).then(function(response){
                setCity(response.data.localidade)
                setFederative_unit(response.data.uf)
                setNeghborhood(response.data.bairro)
                setStreet(response.data.logradouro)
                createUser()

            }).catch(function(error){
                console.error(error)
            })
               
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
                <TextInput style={styles.input} value={nome} onChangeText={setNome} placeholder="Nome:" placeholderTextColor={'white'} />
                <TextInput style={styles.input} value={sobrenome} onChangeText={setSobrenome} placeholder="Sobrenome:" placeholderTextColor={'white'} />
                <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Digite seu E-mail: " placeholderTextColor={'white'} />
                <TextInput style={styles.input} value={numero} onChangeText={(text)=>setNumero(text)} placeholder="Digite seu numero de telefone: " placeholderTextColor={'white'} />
                <TextInput style={styles.input} value={senha} onChangeText={(text)=>setSenha(text)} placeholder="Crie a sua senha: " placeholderTextColor={'white'} />
                <TextInput style={styles.input} value={bornDate} onChangeText={(text) =>setBornDate(text)} placeholder="Put your born date: " placeholderTextColor={'white'} />
                <TextInput style={styles.input} value={cpf} onChangeText={(text)=>setCpf(text)} inputMode="numeric" placeholder="Put your CPF: " placeholderTextColor={'white'} />
                <TextInput style={styles.input} value={rg} onChangeText={(text)=>setRg(text)} placeholder="Put your Rg: " placeholderTextColor={'white'} />
                <TextInput style={[styles.input, {width:200}]}  value={pac} onChangeText={(text)=>setPac(text)} placeholder="Put your pac: " placeholderTextColor={'white'} />

                <View style={{position:"relative", left:215, bottom:27.5}}>
                    <TouchableOpacity onPress={searchPac} style={{borderRadius:2, borderWidth:1, borderColor:"white", padding:4, width:55}}><Text style={{color:"white"}}>Buscar</Text></TouchableOpacity>
                </View>
                <TextInput style={[styles.input, {position:"relative", bottom:22}]} value={public_place} onChangeText={(text)=>setPublic_space(text)} placeholder="Put your public space: " placeholderTextColor={'white'} />
            </View>
            <View style={{top:100, position:"relative"}}>
               <DropdownChoice width={200} color="black" top={10}/>
            </View>
            <View style={{display:"flex", alignItems:"flex-start"}}>
                <TouchableOpacity onPress={createAccount} style={styles.Arrowbutton}>
                    <Ionicons  name="ios-arrow-forward" color={"white"} size={35}/>
                </TouchableOpacity>

            </View>

            <View style={styles.polign}></View>

        </View>
    )
}
    // }   <Text style={styles.input}>{city}</Text>
    // <Text style={styles.input}>{neighborhood}</Text>
    // <Text style={styles.input}>{federative_unit}</Text>