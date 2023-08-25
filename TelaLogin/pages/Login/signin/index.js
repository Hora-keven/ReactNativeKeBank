import { View, Text, TextInput, Handle } from "react-native";
import styles from "./stylesUser";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../../firebaseConfig'
import { useState } from "react";

export default function LoginUser({ navigation }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const auth = getAuth(app);

    const logar = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          navigation.navigate("First")
       
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
      
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
