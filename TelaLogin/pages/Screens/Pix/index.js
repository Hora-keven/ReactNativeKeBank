import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import styles from './stylesP'
import { Ionicons } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import React, { useRef, useState } from 'react';
import { TextInputMask } from 'react-native-masked-text'
import { Modalize } from 'react-native-modalize';

export default function ScreenPix({ navigation }) {
    const [chavePix, setChavePix] = useState("")
    const [senha, setSenha] = useState("")
    const[valor,setValor]=useState("")
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
                    <TextInputMask
                        type='cpf'
                        style={styles.input}
                        value={chavePix}
                        placeholder='Digite a chave do pix:'
                        placeholderTextColor={'black'}
                        onChangeText={text => { setChavePix(text) }} />
                </View>

                <View>
                    <TouchableOpacity onPress={abrirModal}>
                        <Ionicons style={styles.Arrowbutton} name="ios-arrow-forward" />
                    </TouchableOpacity>
                </View>

                <Modalize ref={modalizeRef} modalHeight={500} modalStyle={styles.modal}>
                    <View style={styles.confirm}>


                    <TextInputMask 
                            style={{ borderBottomColor: 'white', borderBottomWidth: 2 }}
                                type={'money'}
                                options={{
                                    
                                    precision: 2,
                                    separator: ',',
                                    delimiter: '.',
                                    unit: 'R$',
                                    suffixUnit: ''
                                }}
                                value={valor}
                                placeholder={'R$'}
                                placeholderTextColor={'white'}
                                onChangeText={text => {
                                   setValor(text)
                                }}
                            />
                                <View style={{ top: 50 }}>

                            <TextInputMask
                                type='only-numbers'
                                keyboardAppearance="default"
                                maxLength={4}
                                placeholder='Digite sua senha:'
                                placeholderTextColor={'white'}
                                style={{ borderBottomColor: 'white', borderBottomWidth: 2 }}
                                value={senha}
                                onChangeText={text => { setSenha(text) }} />

                        </View>
                        <TouchableOpacity onPress={()=>{navigation.navigate("ScreenApproved")}}>
                           <Ionicons style={styles.button} name="ios-arrow-forward" />
                        </TouchableOpacity>
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