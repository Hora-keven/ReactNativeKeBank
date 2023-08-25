import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#fff',
      padding:0,
      margin:0,
      width:'100%',
      marginTop:25
    },
    txt:{
        fontFamily:'Dela gothic alone',
        textAlign:'center',
        fontSize:20,
        color:'black',
        fontWeight:'700',
 
    },
    title:{
        flexDirection:'row'
    },
    nameSlogan:{
        justifyContent:'flex-end',
        alignItems:'flex-end',
        width:'100%', 
        bottom:30,
        right:30
    
    },
    secondPartName:{
        fontFamily:'inter',
        color:'black',
        fontSize:20,
    },
    txtUser:{
        color:'black',
        fontFamily:'inter',
        fontSize:22,
        bottom:350,
        right:120
    },
   
    inputs:{
        width:'85%',
        bottom:400,

    },
    input:{
       borderBottomWidth:1,
       borderBottomColor:'black',
       width:'100%',
    
    },
   
    img:{
        width:50,
        height:50,

       
    },
    containerImg:{
        width:90,
        height:'12%',
        position:'relative',
        bottom:300,
        right:245,
        marginTop:510,
        backgroundColor:'#0084B4',
        borderRadius:4,
        justifyContent:'center',
        alignItems:'center'
    },
    information:{
        left:125,
        bottom:140,
        position:'relative'
        
    },
    rectangle:{
        width:'88%',
        height:'8%',
        backgroundColor:'#0084B4',
        borderRadius:8,
        bottom:430,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
  
    window:{
        width:'88%',
        height:'60%',
        marginRight:3,
        margin:0,
        justifyContent:'center',
        alignItems:'center',
        bottom:230
    },

    text:{
        fontFamily:'Raleway sans Serif',
        fontSize:23,
        top:15,
        textAlign:'center',
        color:'white'
  
    },

    function:{
        marginTop:10,
        backgroundColor:'#0084B4',
        width:170,
        height:80, 
        marginLeft:3,
        borderRadius:7,
        padding:3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        
    },
    slides:{
        backgroundColor:'#0084B4',
        width:"99%",
        height:"40%",
        bottom:60,
        position:'relative',
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        
         
    },
    Arrowbutton:{
        color:'black',
        fontFamily:'inter',
        fontSize:22,
        left:155,
        bottom:380,
        position:'relative'
      
    },
    textTitle:{
        fontSize:23,
        bottom:350,
    }
  
})
export default styles;