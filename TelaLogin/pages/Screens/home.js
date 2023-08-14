import {View, Image} from "react-native"
import styles from "./stylesH";


export default function FirstScreen(){

    return(
        <View style={styles.container}>
            <View>
                <View >
                 <Image 
                    source={require('../../assets/keven.png')}
                    style={styles.img}/>
                </View>
            </View>
        </View>
    );
}