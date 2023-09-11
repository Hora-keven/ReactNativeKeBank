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
      height:830
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
        right:30,
        top:50,
     
    
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
        bottom:10,

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
   
    rectangle:{
        width:'88%',
        height:'6%',
        backgroundColor:'#0084B4',
        borderRadius:8,
        bottom:70,
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
        top:50,
        margin:0,
        justifyContent:'center',
        alignItems:'center',
      
    },

    text:{
        fontFamily:'Raleway sans Serif',
        fontSize:23,
        top:15,
        left:10,
        color:'black'
  
    },

    function:{
        marginTop:10,
        backgroundColor:'#white',
        width:300,
        height:80, 
        marginLeft:3,
        borderRadius:7,
        padding:3,
        borderWidth:2
        
    },
   
    
    Arrowbutton:{
        color:'black',
        fontFamily:'inter',
        fontSize:22,
        left:155,
        top:15,
        position:'relative'
      
    },
    textTitle:{
        fontSize:23,
        top:30
    }
  
})
export default styles;