import {View, Text, Image} from 'react-native'
import styles from './stylesP'

export default function ScreenPix({navigation}){
    return(
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
                <Text>Pix </Text>
            </View>

        </View>
    )
}