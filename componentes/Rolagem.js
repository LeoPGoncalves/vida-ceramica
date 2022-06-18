import React, {useState} from 'react'
import {View,Text,ScrollView,RefreshControl} from 'react-native'
import Estilos from '../estilos/Estilos'


export default function(){

    const [atualizando,setAtualizando]=useState(false)
    
    function aoAtualizar(){
        setAtualizando(true)

        //código de atualização

        setTimeout(()=>{setAtualizando(false)},2000)
        //setAtualizando(false)
    }

    return(
        <View style={{flex:1}}>
            <ScrollView 
                style={{padding:40}}
                refreshControl={
                    <RefreshControl
                        refreshing={atualizando}
                        onRefresh={aoAtualizar}
                    />
                }
            >
                <Text style={Estilos.textoMenus}>
                
                </Text>
            </ScrollView>
        </View>
    )
}