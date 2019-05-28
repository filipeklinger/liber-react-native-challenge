import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Alert,
    ImageBackground
} from 'react-native'
import { Button,Input } from 'react-native-elements';
import axios from 'react-native-axios'

import Server from '../Server'
import backImage from '../../assets/img/hero1.jpg'

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
        if(err.includes("invalid id")) return 'Não encontramos esse ID aqui'
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
            }else if(res.data.results)
                this.props.navigation.navigate('Lista',{results: res.data.results})//Lista de personagens
            else
                this.props.navigation.navigate('Informacoes',{results: res.data})//direto para Informacoes
        }catch(err){
            Alert.alert('Ops',`${err}`)
        }
        this.setState({loading:false})
    }

    render(){
        return(
            <ImageBackground
            source={backImage}
            style={{width: '100%', height: '100%'}}>
                <View style={styles.container}>
                    <Text style={styles.titulo}>SuHero</Text>
                    
                    <View style={styles.inputContainer}>
                        <Text style={styles.texto}>Aqui vai encontrar os seus personagens favoritos</Text>
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
                        disabled={this.state.heroi === ''}
                        loading={this.state.loading}/>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'rgba(0,0,0, 0.2)',
    },
    titulo:{
        fontSize: 52,
        paddingTop: 30,
        color: '#FFF',
        fontWeight: 'bold'
    },
    texto:{
        paddingBottom: 16,
        fontSize: 17,
        textAlign: 'center',
        color: '#FFF'
    },
    inputContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:20
    },
    input:{
        width: 300,
        backgroundColor: '#FFF'
    },
    button:{
        paddingLeft: 16,
        paddingRight:16
    }
})