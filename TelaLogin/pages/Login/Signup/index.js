import { View, Text, TextInput, Alert } from "react-native";
import styles from "./styles";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { useContext, useState } from 'react';
import api from './../../Api/Api'
import { ApiContext } from "../../context/APicontext";

export default function Login({ navigation }) {
    const [nome, setNome] = useState("")
    const [numero, setNumero] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const {userLog} = useContext(ApiContext)

    
        const createUser = async () =>{
            try{

                api.post('users/',{
                    username:email,
                    first_name:nome,
                    surname:sobrenome,
                    email:email,
                    password:senha,
                    phone_number:numero
    
                }).then(function (response) {
                console.log(response.data);
                userLog(nome, email, sobrenome)
              
                navigation.navigate('Login_User')

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
                <TextInput style={styles.input} value={nome} onChangeText={setNome} placeholder="Nome:" placeholderTextColor={'white'} />
                <TextInput style={styles.input} value={sobrenome} onChangeText={setSobrenome} placeholder="Sobrenome:" placeholderTextColor={'white'} />
                {/* <TextInput style={styles.input} value={dataDeNas} onChangeText={setDataDeNasc} placeholder="Data de nascimento: " placeholderTextColor={'white'} />
                <TextInput style={styles.input} value={cpf} onChangeText={setCpf} inputMode="numeric" placeholder="Digite seu CPF/CNPJ: " placeholderTextColor={'white'} /> */}
                
                <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Digite seu E-mail: " placeholderTextColor={'white'} />
                <TextInput style={styles.input} value={numero} onChangeText={setNumero} placeholder="Digite seu numero de telefone: " placeholderTextColor={'white'} />
                <TextInput style={styles.input} value={senha} onChangeText={setSenha} placeholder="Crie a sua senha: " placeholderTextColor={'white'} />

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