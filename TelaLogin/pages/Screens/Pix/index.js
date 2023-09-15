import { View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import styles from './stylesP'
import { Ionicons } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import React, { useRef } from 'react';
import { Modalize } from 'react-native-modalize';

export default function ScreenPix({ navigation }) {
    const ContatosCadastrados = [
        {
            id: 1,
            nome: 'Keven',
        },
        {
            id: 2,
            nome: 'Maria',
        },
        {
            id: 3,
            nome: 'Marla',
        },
        {
            id: 4,
            nome: 'Antonio',
        },
        {
            id: 5,
            nome: 'José',
        },

    ]
    const Contatos = ({ nome }) => (
        <View style={styles.function}>
            <Text style={styles.txtUser}>{nome}</Text>
        </View>
    )
    const modalizeRef = useRef(<Modalize />);

    const abrirModal = () => {
        modalizeRef.current?.open();
    };
    return (

        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={styles.container} >

                <View style={styles.rectangle}>
                    <Text style={styles.text}>Pix</Text>
                </View>

                <View style={styles.inputs}>
                    <TextInput style={styles.input} placeholder="Digite a chave pix" placeholderTextColor={'black'} />
                </View>

                <View>
                    <TouchableOpacity onPress={abrirModal}>
                        <Ionicons style={styles.Arrowbutton} name="ios-arrow-forward" />
                    </TouchableOpacity>
                </View>
                <Modalize ref={modalizeRef} modalHeight={500} modalStyle={styles.modal}>
                    <View style={styles.confirm}>
                        <Text style={{ fontSize: 22 }}>Digite sua senha: </Text>
                        <View style={{top:50}}>
                            <TextInput   placeholderTextColor={'black'} />
                        </View>
                    </View>
                </Modalize>
                <View>
                    <Text style={styles.textTitle}>Contatos cadastrados</Text>
                </View>
                <SafeAreaView style={styles.window}>
                    <FlatList
                        data={ContatosCadastrados}
                        renderItem={({ item }) => {
                            return (
                                <Contatos nome={item.nome} />
                            )
                        }}
                    />
                </SafeAreaView>

                <View style={styles.nameSlogan}>
                    <View style={styles.title}>
                        <Text style={styles.txt}>Ke</Text>
                        <Text style={styles.secondPartName}>Bank</Text>
                    </View>
                </View>


            </View>
        </ScrollView>


    )
}