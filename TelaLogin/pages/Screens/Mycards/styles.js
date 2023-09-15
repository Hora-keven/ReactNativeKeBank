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
      height:890,
     
    },

    txt:{
        fontFamily:'Dela gothic alone',
        left:4,
        fontSize:20,
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
        bottom:170,
        left:140
    },
  
   
    inputs:{
        width:'85%',
        top:80

    },
    input:{
       borderBottomWidth:1,
       borderBottomColor:'black',
       width:'100%',
    
    },
   
    rectangle:{
        width:'88%',
        height:'9%',
        backgroundColor:'#155e85',
        borderRadius:8,
        bottom:150,
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
        color:'white'
       
  
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
        width:340,
        height:60, 
        marginLeft:3,
        borderRadius:7,
        borderBottomWidth:2,
        padding:3,
  
        
    },
   
    Arrowbutton:{
        color:'black',
        fontFamily:'inter',
        fontSize:22,
        left:155,
        top:50,
        position:'relative'
      
    },
    textTitle:{
        fontSize:27,

    },
    slides:{
        backgroundColor:'#155e85',
        width:"79%",
        height:"40%",
        borderRadius:7,
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
    imgSlides:{
        width:'90%',
        height:'50%',
        top:10,

    },
    Api:{
        top:30,
        color:'white'
    }

})
export default styles;