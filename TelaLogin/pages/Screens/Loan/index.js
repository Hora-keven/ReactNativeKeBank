import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

export default function ScreenLoan() {

    const Transferencia = [
        {
            id: 1,
            nome: 'Contratar',
        },
        {
            id: 2,
            nome: 'Portabilidade de crédito',
        },
        {
            id: 3,
            nome: 'Antecipar 13º salário', 
        },
        {
            id: 4,
            nome: 'Parcelar cheque/cartão',  
        },
        {
            id: 5,
            nome: 'Transferir Limites de crédito',
        },
    ];
    const Historico = ({ title, valor }) => (
        <View style={styles.function}>
            <Text style={styles.txt}>{title}</Text>
        </View>
    );
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.rectangle}>
                    <Text style={styles.text}>Empréstimo</Text>
                </View>
                <View style={styles.inputs}>
                    <TextInput style={styles.input}  placeholderTextColor={'black'} placeholder=" Do que você precisa? " />
                </View>

                <View>
                    <TouchableOpacity onPress={() => { navigation.navigate('First'); }} style={styles.button}>
                        <Feather name="search" size={24} color="black" style={styles.Arrowbutton} />
                    </TouchableOpacity>
                </View>
                <SafeAreaView style={styles.window}>
                    <FlatList
                        data={Transferencia}
                     
                        renderItem={({ item }) => {
                            return (
                                <ScrollView>
                                    <View style={styles.containerTrans}>
                                        <TouchableOpacity>
                                            <Historico title={item.nome} valor={item.valor} />
                                        </TouchableOpacity>
                                   
                                    </View>
                                </ScrollView>
                            );
                        }} />
                </SafeAreaView>
              
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
