import { View, Image, Text, TouchableOpacity, SafeAreaView, FlatList } from "react-native"
import styles from "./styles";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";


export default function FirstScreen() {
    const [valor, setValor] = useState(0)
    const [olho, setOlho] = useState("eye-off-outline")
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
    const Funcoes = ({ title }) => (
        <View style={styles.function}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
    const [dolar, setDolar] = useState(0)

    const url = `https://economia.awesomeapi.com.br/last/USD-BRL`

    fetch(url).then(function (response) {
        return response.json()
    }).then(function (data) {
        return setDolar(data.USDBRL.high)

    })

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
                    setValor(100)
                    setOlho("eye-outline")
                    cont += 1
                    if (cont == 1) {
                        setOlho("eye-off-outline")
                        setValor(0)

                    }

                }}>
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
                                    <Funcoes title={item.title} />
                                }}>
                                <Funcoes title={item.title} />
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
                        <Text style={styles.txt}>Ke</Text>
                        <Text style={styles.secondPartName}>Bank</Text>
                    </View>
                </View>
            </SafeAreaView>

        </View>

    );
}