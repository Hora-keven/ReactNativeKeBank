import {View, Image} from "react-native"
import styles from "./stylesH";
import keven1 from '/assets/keven1.png'

export default function FirstScreen(){

    return(
        <View style={styles.container}>
            <View>
                <View>
                    <Image style={{width:'100%', height:'100%'}} source={keven1}/>
                </View>
            </View>
        </View>
    );
}