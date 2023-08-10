
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles'
import Login from '../Login'
export default function Home({navigation}){
    return(
    <View style={styles.container}>
        <View style={styles.window}>
            <View style={styles.nameSlogan}>
                <View style={styles.title}>
                    <Text style={styles.txt}>Ke</Text>
                    <Text style={styles.secondPartName}>Bank</Text>
                </View>
                <Text style={styles.slogan}>O Banco que facilita</Text>
            </View>

                <View style={styles.title}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('login')}} style={styles.title}>
                    <Text style={styles.txtInformation}>Novo aqui? </Text>
                    <Text style={styles.secondInformationTxt}>Cadastre-se</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.title}>
                    <TouchableOpacity style={styles.title}>
                    <Text style={styles.txtInformation}>Já sou </Text>
                    <Text style={styles.secondInformationTxt}>cadastrado</Text>
                    </TouchableOpacity>
              
            </View>
        </View>
        <View style={styles.polign}></View>
   
       

    </View>
    )
}