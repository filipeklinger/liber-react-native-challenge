import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Alert
} from 'react-native'
import { Button,Input } from 'react-native-elements';
import axios from 'react-native-axios'

import Server from '../Server'

export default class Inicio extends Component{
    state = {
        heroi: '',
        loading: false
    }

    idOuNome = ()=>{
        let heroi = this.state.heroi;
        //verificando se é id ou nome
        if(isNaN(heroi)){
            return `${Server.nome(heroi)}`//nome
        }else{
            return `${Server.id(parseInt(heroi))}`//numero
        }
    }

    trataErro = (err) =>{
        if(err.includes("not found")) return 'Não encontramos esse nome aqui'
        return JSON.stringify(err)
    }

    buscar = async ()=>{
        this.setState({loading: true})
        try{
            //fazendo requisicao
            const res = await axios.get(`${this.idOuNome()}`)
            
            //verificando resposta
            if(res.data && res.data.response && res.data.response == 'error'){
                Alert.alert('ops',this.trataErro(res.data.error))
            }else
                Alert.alert('success',JSON.stringify(res))

        }catch(err){
            Alert.alert('Ops',`${err}`)
        }
        this.setState({loading:false})
    }

    render(){
        return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Bem vindo ao SHero App</Text>
            
            <View style={styles.inputContainer}>
                <Text style={styles.texto}>Aqui vais encontrar os seus personagens favoritos</Text>
                <Text style={styles.texto}>Digite um nome de personagem ou um ID</Text>
                <Input
                    inputContainerStyle={styles.input}
                    containerStyle={{paddingBottom: 16}}
                    placeholder='Nome ou Id...'
                    onChangeText={(text)=>{this.setState({heroi: text})}}/>
                <Button
                buttonStyle={styles.button}
                title="Buscar"
                onPress={()=>this.buscar()}
                loading={this.state.loading}/>
            </View>
        </View>)
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 16
    },
    titulo:{
        fontSize: 22,
        paddingTop: 30
    },
    texto:{
        paddingBottom: 16,
        fontSize: 17,
        textAlign: 'center'
    },
    inputContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:20
    },
    input:{
        width: 300,
    },
    button:{
        paddingLeft: 16,
        paddingRight:16
    }
})