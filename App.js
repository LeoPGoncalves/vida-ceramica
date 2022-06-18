/* 
  Programa: Vida Cerâmica
  Dev: Leonardo Pires Gonçalves
  Data: 02/05/2022
 */

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React, {useState} from 'react'
import {View,Text,Button,ImageBackground,SafeAreaView,Image,TextInput} from 'react-native'
import Estilos from './estilos/Estilos'


const Pilha=createNativeStackNavigator()

const imgEntrar='./assets/imagens/Entrar.png'
const imgAcesso='./assets/imagens/Acesso.png'
const imgCadastro='./assets/imagens/Cadastro.png'
const imgMenu='./assets/imagens/Menu.png'
const imgAtelies='./assets/imagens/Atelies.png'
const imgCalculo='./assets/imagens/Calculo.png'
const imgOndeComprar='./assets/imagens/OndeComprar.png'
const imgSaibaMais='./assets/imagens/SaibaMais.png'
const imgFAQ='./assets/imagens/FAQ.png'
const imgSobreNos='./assets/imagens/SobreNos.png'
const imgBackArrow='./assets/imagens/BackArrow.png'
const imgCleanBackground='./assets/imagens/CleanBackground.png'

function Entrar({navigation}){
  return(
    <ImageBackground source={require(imgEntrar)} style={Estilos.imagemFundo}>
      <SafeAreaView style={Estilos.container}> 
        <SafeAreaView>
          <View style={{position:'absolute',marginLeft:-115,opacity:0,width:230,top:36}}>
            <Button
              title='ENTRAR'
              onPress={()=>navigation.navigate('Acesso')}
            />
          </View>
          <View style={{position:'absolute',marginLeft:-55,opacity:0,width:110,top:105}}>
          <Button
              title='CADASTRAR'
              onPress={()=>navigation.navigate('Cadastro')}
            />
          </View>
        </SafeAreaView>
      </SafeAreaView>
    </ImageBackground>
  );
}

function Acesso({navigation}){

  const [usuario,setUsuario]=useState(0)
  const [senha,setSenha]=useState(0)

  return(
    <ImageBackground source={require(imgAcesso)} style={Estilos.imagemFundo}>
      <Image source={require(imgBackArrow)} style={Estilos.backArrow}></Image>
      <SafeAreaView style={Estilos.container}> 
        <SafeAreaView>
        <View>
            <TextInput
              style={Estilos.txtUsuario} 
              autoFocus={false}
              keyboardType={'default'}
              onChangeText={text=>setUsuario(text)}>          
            </TextInput>
          </View>
          <View>
            <TextInput
              style={Estilos.txtSenhaEntra} 
              autoFocus={false}
              keyboardType={'visible-password'}
              onChangeText={text=>setSenha(text)}>          
            </TextInput>
          </View>
          <View style={{position:'absolute',marginLeft:96,opacity:0,width:50,top:220}}>
            <Button
              title='OK'
              onPress={()=>navigation.navigate('Menu')}
            />
          </View>
          <View style={{position:'absolute',marginLeft:-55,opacity:0,width:50,top:370}}>
            <Button
              title='VOLTAR'
              onPress={()=>navigation.goBack()}
            />
          </View>
          </SafeAreaView>
      </SafeAreaView>
    </ImageBackground>
  );
}

function TelaCadastro({navigation}){

  const [nome,setNome]=useState(0)
  const [email,setemail]=useState(0)
  const [celular,setCelular]=useState(0)
  const [login,setLogin]=useState(0)
  const [senhacad,setSenhacad]=useState(0)

  return(
    <ImageBackground source={require(imgCadastro)} style={Estilos.imagemFundo}>
      <Image source={require(imgBackArrow)} style={Estilos.backArrow}></Image>
      <SafeAreaView style={Estilos.container}> 
        <SafeAreaView>
        <View>
            <TextInput
              style={Estilos.txtNome} 
              autoFocus={false}
              keyboardType={'default'}
              onChangeText={text=>setNome(text)}>          
            </TextInput>
          </View>
          <View>
            <TextInput
              style={Estilos.txtEmail} 
              autoFocus={false}
              keyboardType={'email-address'}
              onChangeText={text=>setemail(text)}>          
            </TextInput>
          </View>
          <View>
            <TextInput
              style={Estilos.txtCelular} 
              autoFocus={false}
              keyboardType={'phone-pad'}
              onChangeText={text=>setCelular(text)}>          
            </TextInput>
          </View>
          <View>
            <TextInput
              style={Estilos.txtLogin} 
              autoFocus={false}
              keyboardType={'default'}
              onChangeText={text=>setLogin(text)}>          
            </TextInput>
          </View>
          <View>
            <TextInput
              style={Estilos.txtSenha} 
              autoFocus={false}
              keyboardType={'visible-password'}
              onChangeText={text=>setSenhacad(text)}>          
            </TextInput>
          </View>
          <View style={{position:'absolute',marginLeft:54,opacity:0,width:120,top:432}}>
            <Button
              title='CADASTRAR'
              onPress={()=>navigation.navigate('Entrar')}
            />
          </View>
          <View style={{position:'absolute',marginLeft:-60,opacity:0,width:50,top:436}}>
            <Button
              title='VOLTAR'
              onPress={()=>navigation.goBack()}
            />
          </View>
          </SafeAreaView>
      </SafeAreaView>
    </ImageBackground>
  );
}

function Menu({navigation}){
  return(
    <ImageBackground source={require(imgMenu)} style={Estilos.imagemFundo}>
      <Image source={require(imgBackArrow)} style={Estilos.backArrow}></Image>
      <SafeAreaView style={Estilos.container}> 
        <SafeAreaView>
          <View style={{position:'absolute',marginLeft:-115,opacity:0,width:230,top:-30}}>
            <Button
              title='ATELIES'
              onPress={()=>navigation.navigate('Atelies')}
            />
          </View>
          <View style={{position:'absolute',marginLeft:-115,opacity:0,width:230,top:34}}>
            <Button
              title='CALCULO'
              onPress={()=>navigation.navigate('Calculo')}
            />
          </View>
          <View style={{position:'absolute',marginLeft:-115,opacity:0,width:230,top:96}}>
            <Button
              title='ONDECOMPRAR'
              onPress={()=>navigation.navigate('OndeComprar')}
            />
          </View>
          <View style={{position:'absolute',marginLeft:-115,opacity:0,width:230,top:162}}>
            <Button
              title='SAIBAMAIS'
              onPress={()=>navigation.navigate('SaibaMais')}
            />
          </View>
          <View style={{position:'absolute',marginLeft:-115,opacity:0,width:230,top:228}}>
            <Button
              title='FAQ'
              onPress={()=>navigation.navigate('Faq')}
            />
          </View>
          <View style={{position:'absolute',marginLeft:-115,opacity:0,width:230,top:292}}>
            <Button
              title='SOBRENOS'
              onPress={()=>navigation.navigate('SobreNos')}
            />
          </View>
          <View style={{position:'absolute',marginLeft:-175,opacity:0,width:50,top:321}}>
            <Button
              title='VOLTAR'
              onPress={()=>navigation.navigate('Entrar')}
            />     
          </View>
          </SafeAreaView>
      </SafeAreaView>
    </ImageBackground>
  );
}

function Atelies({navigation}){
  return(
    <ImageBackground source={require(imgAtelies)} style={Estilos.imagemFundo}>
      <Image source={require(imgBackArrow)} style={Estilos.backArrow}></Image>
      <SafeAreaView style={Estilos.container}> 
        <SafeAreaView>
          <View style={{position:'absolute',marginLeft:-115,opacity:0,width:230,top:38}}>
            <Button
              title='LOCALIDADE'
              onPress={()=>navigation.navigate('Infos')}
            />
          </View>
          <View style={{position:'absolute',marginLeft:-115,opacity:0,width:230,top:102}}>
            <Button
              title='SERVIÇOS'
              onPress={()=>navigation.navigate('Infos')}
            />
          </View>
          <View style={{position:'absolute',marginLeft:-175,opacity:0,width:50,top:321}}>
            <Button
              title='VOLTAR'
              onPress={()=>navigation.goBack()}
            />
          </View>
          </SafeAreaView>
      </SafeAreaView>
    </ImageBackground>
  );
}

function Calculo({navigation}){

  const [argila,setArgila]=useState(0)
  const [esmalte,setEsmalte]=useState(0)
  const [queima,setQueima]=useState(0)
  const [resultado,setResultado]=useState(0)
  const precoArgila = 0.0049
  const precoEsmalte = 0.0151

  const calcular=()=>{
    var r = (argila*precoArgila + esmalte*precoEsmalte) + queima
    setResultado(r)
  }

  return(

    <ImageBackground source={require(imgCalculo)} style={Estilos.imagemFundo}>
      <Image source={require(imgBackArrow)} style={Estilos.backArrow}></Image>
        <SafeAreaView style={Estilos.container}> 
            <SafeAreaView>
                <View>
                    <TextInput
                    style={Estilos.txtArgila} 
                    autoFocus={false}
                    keyboardType={'numeric'}
                    onChangeText={text=>setArgila(text)}>          
                    </TextInput>
                </View>
                <View>
                    <TextInput 
                    style={Estilos.txtEsmalte}
                    autoFocus={false}
                    keyboardType={'numeric'}
                    onChangeText={text=>setEsmalte(text)}>          
                    </TextInput>
                </View>
                <View>
                    <TextInput 
                    style={Estilos.txtQueima}
                    autoFocus={false}
                    keyboardType={'numeric'}
                    onChangeText={text=>setQueima(text)}>          
                    </TextInput>
                </View>
                <View style={{position:'absolute',marginLeft:39,opacity:0,width:150,top:290}}>
                <Button
                        title='CALCULAR'
                        onPress={()=>calcular()}
                    />
                </View>
                <View style={{position:'absolute',marginLeft:-60,opacity:0,width:50,top:415}}>
                    <Button
                        title='VOLTAR'
                        onPress={()=>navigation.goBack()}
                    />
                </View>
                <View>
                    <Text style={Estilos.txtResultado}>{resultado}</Text>
                </View>
            </SafeAreaView>
        </SafeAreaView>
    </ImageBackground>
  );
}

function OndeComprar({navigation}){
  return(
    <ImageBackground source={require(imgOndeComprar)} style={Estilos.imagemFundo}>
      <Image source={require(imgBackArrow)} style={Estilos.backArrow}></Image>
      <SafeAreaView style={Estilos.container}> 
        <SafeAreaView>
          <View style={{position:'absolute',marginLeft:-115,opacity:0,width:230,top:38}}>
            <Button
              title='LOCALIDADE'
              onPress={()=>navigation.navigate('Infos')}
            />
          </View>
          <View style={{position:'absolute',marginLeft:-115,opacity:0,width:230,top:102}}>
            <Button
              title='PRODUTOS'
              onPress={()=>navigation.navigate('Infos')}
            />
          </View>
          <View style={{position:'absolute',marginLeft:-175,opacity:0,width:50,top:321}}>
            <Button
              title='VOLTAR'
              onPress={()=>navigation.goBack()}
            />
          </View>
          </SafeAreaView>
      </SafeAreaView>
    </ImageBackground>
  );
}

function SaibaMais({navigation}){
  return(
    <ImageBackground source={require(imgSaibaMais)} style={Estilos.imagemFundo}>
      <Image source={require(imgBackArrow)} style={Estilos.backArrow}></Image>
      <SafeAreaView style={Estilos.container}> 
        <SafeAreaView>
          <View style={{position:'absolute',marginLeft:-115,opacity:0,width:230,top:-30}}>
            <Button
              title='ARGILA'
              onPress={()=>navigation.navigate('Infos')}
            />
          </View>
          <View style={{position:'absolute',marginLeft:-115,opacity:0,width:230,top:34}}>
            <Button
              title='ESMALTE'
              onPress={()=>navigation.navigate('Infos')}
            />
          </View>
          <View style={{position:'absolute',marginLeft:-115,opacity:0,width:230,top:97}}>
            <Button
              title='FERRAMENTAS'
              onPress={()=>navigation.navigate('Infos')}
            />
          </View>
          <View style={{position:'absolute',marginLeft:-115,opacity:0,width:230,top:162}}>
            <Button
              title='QUEIMA'
              onPress={()=>navigation.navigate('Infos')}
            />
          </View>
          <View style={{position:'absolute',marginLeft:-115,opacity:0,width:230,top:227}}>
            <Button
              title='DICAS'
              onPress={()=>navigation.navigate('Infos')}
            />
          </View>
          <View style={{position:'absolute',marginLeft:-175,opacity:0,width:50,top:321}}>
            <Button
              title='VOLTAR'
              onPress={()=>navigation.goBack()}
            />
          </View>
          </SafeAreaView>
      </SafeAreaView>
    </ImageBackground>
  );
}

function Faq({navigation}){
  return(
    <ImageBackground source={require(imgFAQ)} style={Estilos.imagemFundo}>
      <Image source={require(imgBackArrow)} style={Estilos.backArrow}></Image>
      <SafeAreaView style={Estilos.container}> 
        <SafeAreaView>
          <View style={{position:'absolute',marginLeft:-115,opacity:0,width:230,top:23}}>
            <Button
              title='DÚVIDAS'
              onPress={()=>navigation.navigate('Infos')}
            />
          </View>
          <View style={{position:'absolute',marginLeft:-115,opacity:0,width:230,top:86}}>
            <Button
              title='SUGESTÕES'
              onPress={()=>navigation.navigate('Infos')}
            />
          </View>
          <View style={{position:'absolute',marginLeft:-175,opacity:0,width:50,top:321}}>
            <Button
              title='VOLTAR'
              onPress={()=>navigation.goBack()}
            />
          </View>
          </SafeAreaView>
      </SafeAreaView>
    </ImageBackground>
  );
}

function SobreNos({navigation}){
  return(
    <ImageBackground source={require(imgSobreNos)} style={Estilos.imagemFundo}>
      <Image source={require(imgBackArrow)} style={Estilos.backArrow}></Image>
      <SafeAreaView style={Estilos.container}> 
        <SafeAreaView>
          <View style={{position:'absolute',marginLeft:-175,opacity:0,width:50,top:321}}>
            <Button
              title='VOLTAR'
              onPress={()=>navigation.goBack()}
            />
          </View>
          </SafeAreaView>
      </SafeAreaView>
    </ImageBackground>
  );
}

function Infos({navigation}){
  return(
    <ImageBackground source={require(imgCleanBackground)} style={Estilos.imagemFundo}>
      <Image source={require(imgBackArrow)} style={Estilos.backArrow}></Image>
      <SafeAreaView style={Estilos.container}> 
        <SafeAreaView>
          <View style={{position:'absolute',marginLeft:-175,opacity:0,width:50,top:321}}>
            <Button
              title='VOLTAR'
              onPress={()=>navigation.goBack()}
            />
          </View>
          </SafeAreaView>
      </SafeAreaView>
    </ImageBackground>
  );
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

export default function VidaCeramica(){
  return (
    <NavigationContainer>
      <Pilha.Navigator>
        <Pilha.Screen
          name="Entrar"
          component={Entrar}
          options={{
            headerShown: false,
          }}
        />
      <Pilha.Screen
          name="Acesso"
          component={Acesso}
          options={{
            headerShown: false
          }}
        />
        <Pilha.Screen
          name="Cadastro"
          component={TelaCadastro}
          options={{
            headerShown: false
          }}
          />
        <Pilha.Screen
          name="Menu"
          component={Menu}
          options={{
            headerShown: false
          }}
          />
          <Pilha.Screen
          name="Atelies"
          component={Atelies}
          options={{
            headerShown: false
          }}
          />
          <Pilha.Screen
          name="Calculo"
          component={Calculo}
          options={{
            headerShown: false
          }}
          />
          <Pilha.Screen
          name="OndeComprar"
          component={OndeComprar}
          options={{
            headerShown: false
          }}
          />
          <Pilha.Screen
          name="SaibaMais"
          component={SaibaMais}
          options={{
            headerShown: false
          }}
          />
          <Pilha.Screen
          name="Faq"
          component={Faq}
          options={{
            headerShown: false
          }}
          />
          <Pilha.Screen
          name="SobreNos"
          component={SobreNos}
          options={{
            headerShown: false
          }}
          />
          <Pilha.Screen
          name="Infos"
          component={Infos}
          options={{
            headerShown: false
          }}
          />
      </Pilha.Navigator>                 
    </NavigationContainer>
  )
}