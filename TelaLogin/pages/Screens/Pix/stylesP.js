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
      height:890
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
        top:700,
     
    
    },
    secondPartName:{
        fontFamily:'inter',
        color:'black',
        fontSize:20,
    },
    txtUser:{
        fontFamily:'sans-serif',
        fontSize:23,
        top:11,
        left:10,
        color:'black'
    },
   
    inputs:{
        width:'85%',
        top:300,

    },
    input:{
       borderBottomWidth:1,
       borderBottomColor:'black',
       width:'100%',
    
    },
    button:{
        fontSize:20,
        color:'white',
        left:199,
        top:70
    },  
    img:{
        width:50,
        height:50,

       
    },
   
    rectangle:{
        width:'88%',
        height:'50%',
        backgroundColor:'#155e85',
        borderRadius:8,
       
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        top:70

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
        fontFamily:'sans-serif',
        fontSize:23,
        top:11,
        left:10,
        color:'white'
  
    },

    function:{
        marginTop:10,
        width:350,
        height:80, 
        marginLeft:3,
        borderRadius:7,
        borderLeftWidth:2,
    },
   
    
    Arrowbutton:{
        color:'black',
        fontFamily:'inter',
        fontSize:22,
        left:155,
        top:335,
        position:'relative'
      
    },
    textTitle:{
        fontSize:23,
        top:400,
    },
    modal:{
        backgroundColor:'#155e85',
        alignItems:'center',
        display:'flex',
        justifyContent:'center'
    },
    confirm:{
        marginTop:50,
        height:200,
        width:220,
    
    }
  
})
export default styles;