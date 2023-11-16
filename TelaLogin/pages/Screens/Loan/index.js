import { View, Text, ScrollView, TextInput, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';
import api from "./../../Api/Api"
import React, { useRef, useState } from 'react';
import {  Feather, Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { Modalize } from 'react-native-modalize';
import { TextInputMask } from 'react-native-masked-text'
import DropdowmFees from "./../../../components/dropdownfees"

export default function ScreenLoan({navigation}) {
    
    const[value,setValue]=useState("")
    const maskValue = value.replace("R$", "").replace(/\./g, '').replace("0", "").replace(/\,/g, "").replace("0", "");
    const Transferencia = [
        {
            id: 1,
            nome: 'Contas de casa',
        },
        {
            id: 2,
            nome: 'Reformas ou consertos',

        },
        {
            id: 3,
            nome: 'Investir no meu negócio', 
    
        },
        {
            id: 4,
            nome: 'Viagem',  
          

        },
        {
            id: 5,
            nome: 'Divida',
          
        },
    ];
    const Historico = ({ title }) => (
        <View style={styles.function}>
            <Text style={styles.txt}>{title}</Text>
        
        </View>
        
    );

    const modalizeRef = useRef(<Modalize />);

    const openModal = () => {
        
        modalizeRef.current?.open();
       
    };


    const message = ()=>{
        Alert.alert('Sobre o empréstimo',`O empréstimo possui um juros de:\n\n20% se parcelar em 12x\n40% se parcelar em 24x\n60% se parcelar em 36x \n\n`, [
            {text: 'OK', onPress: ()=>console.log("teste"), style:"cancel"},
          ]);
    }
    const sendLoan = ()=>{
        try {
            api.post("loan/", {
                
            }).then(function(response){
    
            })
        } catch (error) {
           console.error(error) 
        }
       
    }

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
                    <TouchableOpacity onPress={() => navigation.navigate('ScreenExtract', 'TabScreen')} style={styles.button}>
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
                                        <TouchableOpacity onPress={openModal}>
                                            <Historico title={item.nome}  />
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
                <Modalize ref={modalizeRef} modalHeight={500} modalStyle={styles.modal}>
                    <View style={styles.confirm}>


                    <TextInputMask 
                            style={[styles.input, { borderBottomColor: 'white', borderBottomWidth: 2 }]}
                                type={'money'}
                                options={{
                                    
                                    precision: 2,
                                    separator: ',',
                                    delimiter: '.',
                                    unit: 'R$',
                                    suffixUnit: ''
                                }}
                                value={value}
                                placeholder={'R$'}
                                placeholderTextColor={'white'}
                                onChangeText={text => {
                                   setValue(text)
                                }}/>

                                <DropdowmFees/>
                        
                        <TouchableOpacity  style={styles.button} onPress={sendLoan}>
                           <Ionicons size={30} color={"white"} name="ios-arrow-forward" />
                        </TouchableOpacity>
                    </View>
                </Modalize>
            </View>
        </ScrollView>
    );
}
