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
        justifyContent:'center',
        alignItems:'center',
        width:'100%', 
        
        left:125
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
        marginTop:12,
        width:'70%',
        borderColor:'white',
        top:100


    },
    input:{
       borderBottomWidth:1,
       borderBottomColor:'white',

       width:'100%',
       color:'white'
    
    },
    button:{
        color:'black',
        fontFamily:'inter',
        fontSize:30,
     
    

    },
   
    img:{
        width:50,
        height:50,
       
    },
    imgf:{
        width:25,
        height:25,
        bottom:45,
        left:70,
    },
    containerImg:{
        width:90,
        height:'13%',
        position:'relative',
        bottom:300,
        right:245,
        marginTop:410,
        backgroundColor:'#0084B4',
        borderRadius:7,
        justifyContent:'center',
        alignItems:'center'
    },
    information:{
        left:125,
        marginTop:100,
        
    },
    rectangle:{
        width:'88%',
        height:'10%',
        backgroundColor:'#0084B4',
        borderRadius:8,
        bottom:669,
        position:'absolute',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    txtInformation:{
        fontFamily:'inter',
        fontSize:20,
        left:20,
        top:10
       
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
        fontSize:18,
        top:43,
        textAlign:'center',
       
        
  
    },

    function:{
        marginTop:10,
        backgroundColor:'#0084B4',
        width:168,
        height:80, 
        justifyContent:'space-between',
        borderRadius:7,
        marginLeft:3.5,
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
        bottom:27,
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
        top:30
    }
  
})
export default styles;