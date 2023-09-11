import { View, Image, Text, TouchableOpacity, SafeAreaView, FlatList } from "react-native"
import styles from "./styles";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import { ScrollView } from "react-native";
import * as Animatable from 'react-native-animatable'

export default function FirstScreen({ navigation }) {
    const [valor, setValor] = useState(0)
    const [olho, setOlho] = useState("eye-outline")
    const [open, setOpen] = useState(false)


    const funcaoApp = [
        {
            id: 1,
            title: 'Pix',
            name: 'ScreenPix'
        },
        {
            id: 2,
            title: 'Extrato',
            name:'ScreenExtract'
        },
        {
            id: 3,
            title: 'Empréstimo'
        },
        {
            id: 4,
            title: 'Meus cartões'
        },
        {
            id: 5,
            title: "caixinha"
        },
        {
            id:6,
            title:'Recarga de celular'
        }
    ]
    const Funcoes = ({ title }) => (
        <View style={styles.function}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
    function Olho() {
        setOpen(true)
        if (open) {
            setValor(100)
            setOlho("eye-off-outline")
            setOpen(false)
        } else {
            setValor(0)
            setOlho("eye-outline")
        }

    }
    const [dolar, setDolar] = useState(0)

    const url = `https://economia.awesomeapi.com.br/last/USD-BRL`

    fetch(url).then(function (response) {
        return response.json()
    }).then(function (data) {
        return setDolar(data.USDBRL.high)

    })
    
    return (
        <ScrollView>
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
                    <TouchableOpacity onPress={Olho}>
                        <Ionicons name={olho} size={24} style={{ left: 300, bottom: 33 }} color="black" />
                    </TouchableOpacity>

                </View>
                <SafeAreaView style={styles.window}>
                    <FlatList
                        horizontal={false}
                        numColumns={2}
                        data={funcaoApp}
                        renderItem={({ item }) => {
                            return (

                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate(item.name)
                                    }}>
                                    <Funcoes title={item.title} screen={item.path} />
                                    
                                </TouchableOpacity>

                            )
                        }}
                    />
                    <View style={styles.slides}>
                        <Image source={require('../../assets/dolar.png')}
                            style={styles.imgSlides} />
                        <Text style={styles.text}>Cotação do Dólar</Text>
                        <Text style={styles.Api}>A Cotação do dólar está ${dolar}</Text>
                    </View>
                    <View style={styles.nameSlogan}>
                        <View style={styles.title}>
                        <Animatable.Text animation='pulse' delay={5000} style={styles.txt}>Ke</Animatable.Text>
                            <Text style={styles.secondPartName}>Bank</Text>
                        </View>
                    </View>
                </SafeAreaView>

            </View>
        </ScrollView>
    );
}//a@b.com 123456