import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import Card from '../../../components/card.jsx';
import card from '../../../assets/cartao.png'
import cartaoKebank from '../../../assets/cartaoKebank.png'
import cartaoKebankVerso from '../../../assets/cartaoKebankVerso.png'
import * as Animatable from 'react-native-animatable';
import { useState } from 'react';

export default function ScreenCards({ navigation }) {

    const[nomeCartao, setNomeCartao] = useState(cartaoKebank)
    const[animatable, setAnimatable]=useState('')

  
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.rectangle}>
                    <Text style={styles.text}>Meus cartões</Text>
                </View>
                <View style={styles.window}>
                    <Text style={styles.textTitle}> Cartão Fisico</Text>
                    <TouchableOpacity>
                        <Text style={{ color: '#155E85', fontSize: 17 }}>+ Solicitar cartão de débito e crédito</Text>
                    </TouchableOpacity>
                    <Text style={styles.textTitle}> Cartão Virtual</Text>
                    <View style={styles.function}>
                        <Text style={styles.textT}>KEVEN H SANTOS</Text>

                        <View style={styles.containerImgF}>
                            <Image source={card} style={styles.imgf} />
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Text style={{ color: '#155E85', fontSize: 17, bottom:30 }}>+ Criar cartão virtual</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.slides}>
                    <TouchableOpacity style={{backgroundColor:'white',height:100, width:"100%", justifyContent:'center'}}>
                    
                     
                        <Card/>
                    </TouchableOpacity>
                 
                </View>

                <View style={styles.nameSlogan}>
                    <View style={styles.title}>
                        <Animatable.Text animation='pulse' delay={5000} style={styles.firstName}>Ke</Animatable.Text>
                        <Text style={styles.secondPartName}>Bank</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
