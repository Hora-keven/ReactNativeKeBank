import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import styles from './stylesP'
import { Ionicons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function ScreenPix({ navigation }) {
    return (
       
       <ScrollView style={{backgroundColor:'white'}}>
        <View style={styles.container} >

            <View style={styles.information}>
                <View style={styles.containerImg}>
                    <Image
                        source={require('../../assets/keven.png')}
                        style={styles.img} />
                </View>
                <Text style={styles.txtUser}>Olá Keven!</Text>
            </View>
            <View style={styles.rectangle}>
                <Text style={styles.text}>Pix</Text>
            </View>

            <View style={styles.inputs}>
                <TextInput style={styles.input} placeholder="Digite a chave pix" placeholderTextColor={'black'} />
            </View>

            <View>
                <TouchableOpacity onPress={() => { navigation.navigate('LoginUser') }}>
                    <Ionicons style={styles.Arrowbutton} name="ios-arrow-forward" />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.textTitle}>Contatos cadastrados</Text>
            </View>
            
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