import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import styles from './stylesE'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function ScreenExtract() {

    const Transferencia = [
        {
            id: 1,
            nome: 'Keven',
            valor: '100'
        },
        {
            id: 2,
            nome: 'Maria',
            valor: '100'
        },
        {
            id: 3,
            nome: 'Marla',
            valor: '100'
        },
        {
            id: 4,
            nome: 'Antonio',
            valor: '100'
        },
        {
            id: 5,
            nome: 'José',
            valor: '100'
        }
    ]
    const Historico = ({ title }) => (
        <View style={styles.function}>
            <Text style={styles.text} >Transferencia enviada</Text>
            <Text style={styles.txt}>{title}</Text>
            <MaterialCommunityIcons name='transfer-up' size={30} style={{color:"black"}}/>
        </View>
    )
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={styles.container} >
                <View style={styles.rectangle}>
                    <Text style={styles.text}>Extrato</Text>
                </View>
                <View style>

                </View>
                <SafeAreaView style={styles.window}>
                    <FlatList
                        data={Transferencia}
                        renderItem={({ item }) => {
                            return (

                                <TouchableOpacity>
                                    <Historico title={item.nome} />
                                </TouchableOpacity>

                            )
                        }}
                    />
                </SafeAreaView>
            </View>
        </ScrollView>
    )
}