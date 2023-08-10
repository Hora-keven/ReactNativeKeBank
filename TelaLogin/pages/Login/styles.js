import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#0084B4',
      padding:0,
      margin:0,
      width:'100%'
    },
    txt:{
        fontFamily:'Dela gothic alone',
        textAlign:'center',
        fontSize:76,
        color:'white',
        fontWeight:700
    },
    slogan:{
        color:'white',
        borderRadius:3,
        width:'50%',
        textAlign:'center',
        fontSize:22
    },
    nameSlogan:{
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
    },
    txtInformation:{
        color:'white',
        fontFamily:'inter',
        fontSize:22,
        marginTop:30,
    },
    secondPartName:{
        fontFamily:'inter',
        color:'white',
        fontSize:76
    },
    title:{
        flexDirection:'row'
    },
    inputs:{
        marginTop:12,
        width:'70%',
        borderColor:'white',


    },
    input:{
       borderBottomWidth:1,
       borderBottomColor:'white',
       marginTop:20,
       width:'100%',
       color:'white'
    
    },
    Arrowbutton:{
        color:'white',
        fontFamily:'inter',
        fontSize:22,
        marginTop:12,
        left:95
    }
})
export default styles;