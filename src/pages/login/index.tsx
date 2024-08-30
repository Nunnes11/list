import React, { useState } from "react";
import {Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import { style } from "./styles";
import Logo from '../../assets/logo.png'
import {MaterialIcons, Entypo} from '@expo/vector-icons';
import { themas } from "../../global/themes";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setloading] = useState(false)

    async function getLogin(){
        try {

            setloading(true)
            
            if(!email || !password){
                return Alert.alert('Atenção!', 'email e senha devem ser preenchidos.')
            }

            setTimeout(()=>{
                if(email == 'frannes09@gmail.com' && password == '123'){
                    Alert.alert('Login feito com sucesso!')
                }else{
                    Alert.alert('usuário ou senha incorreto.')
                }
                setloading(false)
            },3000)            

        } catch (error) {
            console.log('error!')
        }
    }

    console.log(loading)


    return(
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"
                />
                <Text style={style.text}>Seja Bem-Vindo!</Text>
            </View>

            <View style={style.boxMid}>
                <Text style={style.titleInput}>E-mail</Text>
                <View style={style.boxInput}>
                    <TextInput 
                        style={style.input}
                        value={email}
                        onChangeText={(setEmail)}
                    />
                    <MaterialIcons
                        name="email"
                        size={20}
                        color={themas.colors.gray}
                    />
                </View>
                
                    <Text style={style.titleInput}>Senha</Text>
                    <View style={style.boxInput}>
                    <TextInput 
                        style={style.input}
                        value={password}
                        onChangeText={(setPassword)}
                    />
                    <Entypo
                        name="eye"
                        size={20}
                        color={themas.colors.gray}
                    />
                </View>
            </View>

            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={()=>getLogin()}>
                    {loading?<ActivityIndicator color={'#FFFF'} size={'small'}/>:<Text style={style.textButton}>Entrar</Text>}
                </TouchableOpacity>
            </View>
       
            <Text style={style.textBottom}>Cadastre-se <Text style={{color:themas.colors.primary}}>Aqui</Text></Text>
            
        </View>
    )
}
