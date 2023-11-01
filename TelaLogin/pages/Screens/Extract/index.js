import { View, Text, ScrollView, TextInput, TouchableOpacity, Image, Pressable } from 'react-native'
import styles from './styles'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native'
import { useState } from 'react'
import { MaterialCommunityIcons, Feather, MaterialIcons } from '@expo/vector-icons';

import * as Animatable from 'react-native-animatable'
export default function ScreenExtract({ navigation }) {

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
        },
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
        <ScrollView >
            <View style={styles.container} >
                <View style={styles.rectangle}>
                    <Text style={styles.text}>Extrato</Text>
                </View>
                <View style={styles.inputs}>
                    <TextInput style={styles.input} placeholderTextColor={'black'} placeholder=" Buscar: " />
                </View>

                <View>
                    <TouchableOpacity onPress={() => { navigation.navigate('First') }} style={styles.button}>
                        <Feather name="search" size={24} color="black" style={styles.Arrowbutton} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.textTitle}>Histórico</Text>
                </View>
                <SafeAreaView style={styles.window}>
                    <FlatList
                        data={Transferencia}
                        renderItem={({ item }) => {
                            return (
                                <ScrollView>
                                    <View style={styles.containerTrans}>
                                        <Historico title={item.nome} valor={item.valor} />
                                    </View>
                                </ScrollView>
                            )
                        }}
                    />
                </SafeAreaView>
            </View>
            <View style={styles.nameSlogan}>
                <View style={styles.title}>
                    <Animatable.Text animation='pulse' delay={5000} style={styles.firstName}>Ke</Animatable.Text>
                    <Text style={styles.secondPartName}>Bank</Text>
                </View>
            </View>

        </ScrollView>
    )
}