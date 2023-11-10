import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import styles from './stylesP'
import { Ionicons } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import React, { useContext, useRef, useState } from 'react';
import { TextInputMask } from 'react-native-masked-text'
import { Modalize } from 'react-native-modalize';
import api from '../../Api/Api';
import { ApiContext } from '../../context/APicontext';

export default function ScreenPix({ navigation }) {

    const [keyPix, setKeyPix] = useState("")
    const [password, setPassword] = useState("")
    const[value,setValue]=useState("")
    const {user} = useContext(ApiContext)

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
    const noMaskPix = keyPix.replace(/\.|-/gm, "")
    const maskValue = value.replace("R$", "")
    const sendPix =() =>{
        try {
            api.get(`account/${noMaskPix}`).then(function(response){
                console.log(response.data)
              
                api.post("pix/", {
                    from_account:user.id,
                    value:maskValue,
                    to_account:response.data[0].id
        
                }).then(function(response){
                    console.log(response.data)
                }).catch(function(error){
                    console.error(error)
                })

            }).then(function(response){
                console.log(response.data)
            }).catch(function(error){
                console.error(error)
            })
           

        } catch (error) {
            console.error(error)  
        }
    
        
    }

    

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
                    <Text>{value}</Text>
                    <TextInputMask
                        type='cpf'
                        style={[styles.input, , {borderBottomColor:"black", borderBottomWidth:1, color:"black"}]}
                        value={keyPix}
                        placeholder='Digite a chave do pix:'
                        placeholderTextColor={'black'}
                        onChangeText={text => { setKeyPix(text) }} />
                </View>

                <View>
                    <TouchableOpacity onPress={abrirModal}>
                        <Ionicons style={styles.Arrowbutton} name="ios-arrow-forward" />
                    </TouchableOpacity>
                </View>

                <Modalize ref={modalizeRef} modalHeight={500} modalStyle={styles.modal}>
                    <View style={styles.confirm}>


                    <TextInputMask 
                            style={[styles.input, { borderBottomColor: 'white', borderBottomWidth: 2 }]}
                                type={'money'}
                                options={{
                                    
                                    precision: 2,
                                    separator: '.',
                                    delimiter: '',
                                    unit: 'R$',
                                    suffixUnit: ''
                                }}
                                value={value}
                                placeholder={'R$'}
                                placeholderTextColor={'white'}
                                onChangeText={text => {
                                   setValue(text)
                                }}/>

                                <View style={{ top: 50 }}>
                                <TextInput 
                                secureTextEntry={true} 
                                value={password}  
                                onChangeText={(text)=>setPassword(text)} 
                                style={styles.input} placeholderTextColor={'white'}
                                placeholder={"Digite sua senha: "} />

                        </View>
                        <TouchableOpacity onPress={sendPix}>
                           <Ionicons style={styles.button} name="ios-arrow-forward" />
                        </TouchableOpacity>
                    </View>
                </Modalize>
                <View>
                    <Text style={styles.textTitle}>Contatos cadastrados</Text>
                </View>
                {/* <SafeAreaView style={styles.window}>
                    <FlatList
                        
                        data={ContatosCadastrados}
                        renderItem={({ item }) => {
                            return (
                                <Contatos nome={item.nome} />
                            )
                        }}
                    />
                </SafeAreaView> */}

                {/* <View style={styles.nameSlogan}>
                    <View style={styles.title}>
                        <Text style={styles.txt}>Ke</Text>
                        <Text style={styles.secondPartName}>Bank</Text>
                    </View>
                </View> */}


            </View>
        </ScrollView>


    )
}