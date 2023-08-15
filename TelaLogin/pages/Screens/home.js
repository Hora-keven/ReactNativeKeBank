import {View, Image, Text, TouchableOpacity} from "react-native"
import styles from "./stylesH";
import {IoEyeSharp} from 'react-icons/io5'
import { useState } from "react";


export default function FirstScreen(){
    const [valor, setValor] = useState(0)
    const [olho, setOlho] = useState(false)
    var cont = 0
    
    return(
        <View style={styles.container}>
            <View style={styles.information}>
                    <View style={styles.containerImg}>
                    <Image 
                        source={require('../../assets/keven.png')}
                        style={styles.img}/>
                    </View>
                    <Text style={styles.txtUser}>Olá Keven!</Text>
            </View>
            <View style={styles.rectangle}>
                <Text style={styles.txtInformation}>Conta</Text>
                <Text style={styles.txtInformation}>R${valor},00</Text>
                <TouchableOpacity onPress={()=>{setOlho(true),
                setValor(100), cont+=1
            if(cont == 1){
                setOlho(false)
                setValor(0)
            }}}
                style={styles.button}>
                    <IoEyeSharp />
                </TouchableOpacity>
            </View>
            <View style={styles.window}>
                <TouchableOpacity>
                    <Text style={styles.text}>Pix</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.text}>Pix</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.text}>Pix</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.text}>Pix</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}