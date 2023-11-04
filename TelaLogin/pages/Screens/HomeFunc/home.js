import { View, Image, Text, TouchableOpacity, SafeAreaView, FlatList } from "react-native"
import styles from "./styles";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useState, useRef } from "react";
import { Modalize } from 'react-native-modalize';
import { ScrollView } from "react-native";
import pix from './../../../assets/pix.png'
import locke from './../../../assets/locke.png'
import extrato from './../../../assets/extrato.png'
import emprestimo from './../../../assets/emprestimo.png'
import cartao from './../../../assets/cartao.png'
import phone from './../../../assets/phone.png'
import * as Animatable from 'react-native-animatable'
import * as ImagePicker from 'expo-image-picker';

export default function FirstScreen({ navigation }) {
    const [valor, setValor] = useState("R$ -------")
    const [olho, setOlho] = useState("eye-outline")
    const [open, setOpen] = useState(false)
    const [imageG, setImageG] = useState('https://i.pinimg.com/736x/49/8e/ca/498eca19e49ea51a85a6f6c2e9597987.jpg')
    const [imageJ, setImageJ] = useState('https://i.pinimg.com/736x/0d/4a/6c/0d4a6c0d1d6411a7c5a30837d074a1e6.jpg')

    const funcaoApp = [
        {
            id: 1,
            title: 'Pix',
            name: 'ScreenPix',
            img: pix
        },
        {
            id: 2,
            title: 'Extrato',
            name: 'ScreenExtract',
            img: extrato
        },
        {
            id: 3,
            title: 'Empréstimo',
            name: 'Loan',
            img: emprestimo
        },
        {
            id: 4,
            title: 'Meus cartões',
            name: 'ScreenCard',
            img: cartao
        },
        {
            id: 5,
            title: "Caixinha",
            name: 'ScreenBox',
            img: locke
        },
        {
            id: 6,
            title: 'Recarga de celular',
            name: 'ScreenRecharge',
            img: phone
        }
    ]

    const Funcoes = ({ title, img }) => (
        <View style={styles.function}>
            <Text style={styles.text}>{title}</Text>
            <View style={styles.containerImgF}>
                <Image source={img} style={styles.imgf} />
            </View>

        </View>

    )
    function Olho() {
        setOpen(true)
        if (open) {
            setValor('R$100,00')
            setOlho("eye-off-outline")
            setOpen(false)
        } else {
            setValor("R$ -------")
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

    const modalizeRef = useRef(<Modalize />);

    const abrirModal = () => {

        modalizeRef.current?.open();
    };
    const gallery = async () => {
        let result = ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })

        console.log((await result).assets[0].uri)

        if (!(await result).canceled) {
            setImageG((await result).assets[0].uri)
        }
    }

    const camera = async () => {
        let result = ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })

        console.log((await result).assets[0].uri)

        if (!(await result).canceled) {
            setImageJ((await result).assets[0].uri)
        }
    }

    return (
        <ScrollView>
            <Modalize ref={modalizeRef} modalHeight={350} modalStyle={styles.modal} animationType="fade">
                <View style={styles.confirm}>
                    <Text style={{fontSize:20, left:10, color:"white"}}>Escolha a foto de usuário: </Text>
                    <View style={styles.cameraOuGaleria}>
                        <TouchableOpacity  style={{left:-30, position:"relative"}} onPress={camera}>
                            <Text style={{fontSize:15, left:-2, color:"white"}}>Camera</Text>
                            <MaterialIcons
                                name='camera-alt'
                                size={50}
                                color={"white"}
                            ></MaterialIcons>
                        </TouchableOpacity>

                        <TouchableOpacity style={{left:30}} onPress={gallery}>
                        <Text  style={{fontSize:15, left:-1, color:"white"}}>Galeria</Text>
                            <MaterialIcons
                                name='image'
                                color={"white"}
                                size={50}
                            ></MaterialIcons>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modalize>
            <View style={styles.container}>
                <View style={styles.information}>
                    <View style={styles.containerImg}>
                        <TouchableOpacity onPress={abrirModal}>
                            <Image
                                source={{uri:(imageJ)}}
                                style={styles.img} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.txtUser}>Olá Keven!</Text>
                </View>
                <View style={styles.rectangle}>
                    <Text style={styles.txtInformation}>Conta</Text>
                    <Text style={styles.txtInformation}>{valor}</Text>
                    <TouchableOpacity onPress={Olho}>
                        <Ionicons name={olho} size={24} style={{ left: 300, bottom: 33 }} color="white" />
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
                                    <Funcoes title={item.title} img={item.img} screen={item.path} />
                                </TouchableOpacity>
                            )
                        }} />

                    <View style={styles.slides}>
                        <Image source={require('../../../assets/dolar.png')}
                            style={styles.imgSlides} />
                        <Text style={{ fontSize: 20, top: 15, color: 'white' }}>Cotação do Dólar</Text>
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