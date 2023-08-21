import { View, Image, Text, TouchableOpacity, SafeAreaView, FlatList } from "react-native"
import styles from "./styles";
import { Ionicons } from '@expo/vector-icons'; 
import { useState } from "react";


export default function FirstScreen() {
    const [valor, setValor] = useState(0)
    const [olho, setOlho] = useState(false)
    var cont = 0

    const funcaoApp = [
        {
            id: 1,
            title: 'Pix'
        },
        {
            id: 2,
            title: 'Extrato'
        },
        {
            id: 3,
            title: 'Empréstimo'
        },
        {
            id: 4,
            title: 'Pedir cartão'
        }
    ]
    const Funcoes = ({title}) => (
        <View style={styles.function}>
          <Text style={styles.text}>{title}</Text>
        </View>
      )

    return (
        <View style={styles.container}>
            <View style={styles.information}>
                <View style={styles.containerImg}>
                    <Image
                        source={require('../../assets/keven.png')}
                        style={styles.img} />
                </View>
                <Text style={styles.txtUser}>Olá Keven!</Text>
            </View>
            <View style={styles.rectangle}>
                <Text style={styles.txtInformation}>Conta</Text>
              
                <Text style={styles.txtInformation}>R${valor},00</Text>
                <TouchableOpacity onPress={() => {
                    setOlho(true),
                    setValor(100), cont += 1
                    if (cont == 1) {
                        setOlho(false)
                        setValor(0)
                    }
                }}
                     >
                     <Ionicons  name="ios-arrow-forward"  size={24} style={{left:300, bottom:33} } color="black"/> 
                </TouchableOpacity>
              
            </View>
                <SafeAreaView style={styles.window}>
                    <FlatList
            
    
                        data={funcaoApp}
                        renderItem={({ item }) => {
                            return(
                            <TouchableOpacity
                                onPress={()=>{
                                    <Funcoes title={item.title}/>
                                }}>
                                    <Funcoes title={item.title}/>
                            </TouchableOpacity>
                            )
                        }}
                      />
                </SafeAreaView>
                
        </View>
    );
}