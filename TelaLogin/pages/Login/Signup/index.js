import { View, Text, TextInput } from "react-native";
import styles from "./styles";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { app } from '../../firebaseConfig'

export default function Login({ navigation }) {
    const [nome, setNome] = useState("")
    const [dataDeNas, setDataDeNasc] = useState(0)
    const [cpf, setCpf] = useState(0)
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const createUser = ()=>{
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
          
            const user = userCredential.user;
            navigation.navigate('LoginUser')
     
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });}
    return (
        <View style={styles.container}>

            <View style={styles.nameSlogan}>
                <View style={styles.title}>
                    <Text style={styles.txt}>Ke</Text>
                    <Text style={styles.secondPartName}>Bank</Text>
                </View>
            </View>

            <View style={styles.inputs}>
                <TextInput style={styles.input} value={nome} onChangeText={setNome} placeholder="Nome" placeholderTextColor={'white'} />
                <TextInput style={styles.input} value={dataDeNas} onChangeText={setDataDeNasc} placeholder="Data de nascimento: " placeholderTextColor={'white'} />
                <TextInput style={styles.input} value={cpf} onChangeText={setCpf} inputMode="numeric" placeholder="Digite seu CPF: " placeholderTextColor={'white'} />
                <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Digite seu E-mail: " placeholderTextColor={'white'} />
                <TextInput style={styles.input} value={senha} onChangeText={setSenha} placeholder="Crie sua senha: " placeholderTextColor={'white'} />
                <TextInput style={styles.input} placeholder="Repita a sua senha: " placeholderTextColor={'white'} />

            </View>
            <View>
                <TouchableOpacity onPress={createUser} style={styles.button}>
                    <Ionicons style={styles.Arrowbutton} name="ios-arrow-forward" />
                </TouchableOpacity>

            </View>

            <View style={styles.polign}></View>

        </View>
    )
}