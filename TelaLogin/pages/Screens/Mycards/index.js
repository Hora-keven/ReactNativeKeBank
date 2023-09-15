import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import dolar from '../../../assets/dolar.png'
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

export default function ScreenCards({navigation}) {

  
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.rectangle}>
                    <Text style={styles.text}>Meus cartões</Text>
                </View>
               

                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('ScreenExtract')} style={styles.button}>
                        <Feather name="search" size={24} color="black" style={styles.Arrowbutton} />
                    </TouchableOpacity>
                </View>
                <View style={styles.slides}>
                        <Image source={require('../../../assets/dolar.png')}
                            style={styles.imgSlides} />
                        <Text style={{fontSize:20, top:15, color:'white'}}>Cotação do Dólar</Text>
                        <Text style={styles.Api}>A Cotação do dólar está ${dolar}</Text>
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
