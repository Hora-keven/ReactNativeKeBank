import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import card from '../../../assets/cartao.png'
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

export default function ScreenCards({ navigation }) {


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
                    <Image source={require('../../../assets/cartaoKebank.png')}
                        style={styles.imgSlides} />
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
