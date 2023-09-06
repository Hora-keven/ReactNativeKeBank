import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

export default function ScreenExtract() {

    const Transferencia = [
        {
            id: 1,
            nome: 'Keven',
            valor: '170,00'
        },
        {
            id: 2,
            nome: 'Maria',
            valor: '1320,00'
        },
        {
            id: 3,
            nome: 'Marla',
            valor: '100,00'
        },
        {
            id: 4,
            nome: 'Antonio',
            valor: '10230,00'
        },
        {
            id: 5,
            nome: 'José',
            valor: '100,00'
        }
    ]
    const Historico = ({ title, valor }) => (
        <View style={styles.function}>
            <Text style={styles.textT} >Transferencia enviada</Text>
            <Text style={styles.txt}>{title}</Text>
            <Text style={styles.txt}>R${valor}</Text>
            <MaterialCommunityIcons name='transfer-down' size={30} style={{ color: "red", bottom: 50 }} />
        </View>
    )
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={styles.container} >
                <View style={styles.rectangle}>
                    <Text style={styles.text}>Extrato</Text>
                </View>
                <View style={styles.inputs}>
                    <TextInput style={styles.input} placeholderTextColor={'black'} placeholder=" Buscar: " />
               
                </View>

                <View>
                    <TouchableOpacity onPress={() => { navigation.navigate('First') }} style={styles.button}>
                        <Ionicons style={styles.Arrowbutton} name="ios-arrow-forward" />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text styles={styles.textT}>Histórico</Text>
                </View>
                <SafeAreaView style={styles.window}>
                    <FlatList
                        data={Transferencia}
                        renderItem={({ item }) => {
                            return (

                                <View>
                                    <Historico title={item.nome} valor={item.valor} />

                                </View>



                            )
                        }}
                    />
                </SafeAreaView>
            </View>
        </ScrollView>
    )
}