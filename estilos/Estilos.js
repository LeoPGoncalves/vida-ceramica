import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    imagemFundo:{
        flex:1,
        resizeMode:"cover",
        width:"100%",
        height:"100%"
    },

    backArrow:{
        resizeMode:'contain',
        width:50,
        height:50,
        position:'absolute',
        marginTop:700,
        marginLeft:30
    },

   container:{
       flex:1,
       alignItems:'center',
       justifyContent:'center',
    }, 

    txtUsuario:{
        width:242,
        height:45,
        top:64,
        left:22,
        fontSize:20,
        color:'#fff',
        fontStyle:'normal'
      },

      txtSenhaEntra:{
        width:242,
        height:45,
        top:96,
        left:22,
        fontSize:20,
        color:'#fff',
        fontStyle:'normal'
      },

      txtNome:{
        width:230,
        height:45,
        top:78,
        left:34,
        fontSize:20,
        color:'#fff',
        fontStyle:'normal',
      },

      txtEmail:{
        width:230,
        height:45,
        top:100,
        left:34,
        fontSize:20,
        color:'#fff',
        fontStyle:'normal',
      },

      txtCelular:{
        width:230,
        height:45,
        top:125,
        left:34,
        fontSize:20,
        color:'#fff',
        fontStyle:'normal',
      },

      txtLogin:{
        width:230,
        height:45,
        top:148,
        left:34,
        fontSize:20,
        color:'#fff',
        fontStyle:'normal',
      },

      txtSenha:{
        width:230,
        height:45,
        top:174,
        left:34,
        fontSize:20,
        color:'#fff',
        fontStyle:'normal',
      },

      txtArgila:{
        width:200,
        height:45,
        top:90,
        left:56,
        fontSize:24,
        color:'#fff',
        fontStyle:'normal',
      },

      txtEsmalte:{
        width:180,
        height:45,
        top:108,
        left:78,
        fontSize:24,
        color:'#fff',
        fontStyle:'normal',
      },

      txtQueima:{
        width:180,
        height:45,
        top:128,
        left:78,
        fontSize:24,
        color:'#fff',
        fontStyle:'normal',
      },

      txtResultado:{
        width:230,
        height:45,
        top:224,
        left:28,
        fontSize:34,
        color:'#fff',
        fontStyle:'normal',
      },

})

/* Para visualizar e posicionar a borda utilize:

borderRadius:10,
borderColor:'#fff',
borderWidth:1

*/