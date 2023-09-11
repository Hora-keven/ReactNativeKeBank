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
      height:800,
      marginTop:50
    },

    txt:{
        fontFamily:'Dela gothic alone',
        left:34,
        fontSize:15,
        color:'black',
       
 
    },
    firstName:{
        fontFamily:'Dela gothic alone',
        fontWeight:700,
        fontSize:20,
        color:'black',
    
       
 
    },
    secondPartName:{
        fontFamily:'inter',
        color:'black',
        fontSize:20,
    },
    title:{
        flexDirection:'row'
    },

    nameSlogan:{
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        bottom:210,
        left:140
    },
  
   
    inputs:{
        width:'85%',
        top:110

    },
    input:{
       borderBottomWidth:1,
       borderBottomColor:'black',
       width:'100%',
    
    },
   
    rectangle:{
        width:'88%',
        height:'9%',
        backgroundColor:'#0084B4',
        borderRadius:8,
        marginTop:160,
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
        marginRight:3,
        margin:0,
        justifyContent:'center',
        alignItems:'center',
        top:115,
    
      
    },

    text:{
        fontFamily:'Raleway sans Serif',
        fontSize:23,
        top:10,
        left:10,
       
  
    },
    textT:{
        fontFamily:'Raleway sans Serif',
        fontSize:20,
        top:4,
        left:30,
        color:'black'
    },

    function:{
        marginTop:10,
        backgroundColor:'white',
        width:350,
        height:80, 
        marginLeft:3,
        borderRadius:7,
        padding:3,
        borderWidth:2,
        
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
        top:80,
        position:'relative'
      
    },
    textTitle:{
        fontSize:27,

    },

})
export default styles;