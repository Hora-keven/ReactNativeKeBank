import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#fff',
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
        top:90
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
        left:300,
        bottom:30,
        width:0
       
    },
   
    img:{
        width:50,
        height:50,

       
    },
    containerImg:{
        width:'80%',
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
        
    },
    rectangle:{
        width:'88%',
        height:'10%',
        backgroundColor:'#F4F4F4',
        borderRadius:4,
        bottom:250

    },
    txtInformation:{
        fontFamily:'inter',
        fontSize:22,
        left:20,
        top:10
       
    },
    window:{
        backgroundColor:'#F4F4F4',
        width:'88%',
        height:'60%',
        display:'grid',
        gridColumms:'1fr 1fr',
        borderRadius:4,
        margin:0,
        justifyContent:'center',
        alignItems:'center',
        bottom:200
      
      
        
    },
    text:{
      
        fontFamily:'inter',
        fontSize:22,
        top:5
  
    }
  
})
export default styles;