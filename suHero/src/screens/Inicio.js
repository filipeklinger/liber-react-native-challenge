import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Alert,
    ImageBackground,
    Platform
} from 'react-native'
import { Button,Input } from 'react-native-elements';
import axios from 'react-native-axios'

import Server from '../Server'
import backImage from '../../assets/img/background.jpeg'

export default class Inicio extends Component{
    state = {
        heroi: '',
        loading: false,
        erro: ''
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
        if(err.includes("not found")) return 'Ops! Não encontramos esse nome'
        if(err.includes("invalid id")) return 'Ops! Não encontramos esse ID'
        return JSON.stringify(err)
    }

    buscar = async ()=>{
        this.setState({loading: true})
        try{
            //fazendo requisicao
            const res = await axios.get(`${this.idOuNome()}`)
            //verificando resposta
            if(res.data && res.data.response && res.data.response == 'error'){
                //Alert.alert('ops',this.trataErro(res.data.error))
                this.setState({erro: this.trataErro(res.data.error)})
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
                            errorStyle={{ color: '#B00020' }}
                            errorMessage={this.state.erro}
                            onChangeText={(text)=>{this.setState({heroi: text,erro: '',loading: false})}}/>
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
        backgroundColor: 'rgba(255,255,255, 0.1)',
    },
    titulo:{
        fontFamily: 'HeroesLegend',
        fontSize: 52,
        paddingTop: 30,
        color: '#FFF',
        paddingTop: Platform.OS == `android`? 0 : 50
    },
    texto:{
        paddingBottom: 16,
        fontSize: 17,
        textAlign: 'center',
        color: '#000'
    },
    inputContainer:{
        flex: 1,
        justifyContent: Platform.OS == `android`?'center' : 'flex-start',
        alignItems: 'center',
        padding:20,
        paddingTop: Platform.OS == `android`? 0 : 100
    },
    input:{
        width: 300,
        backgroundColor: '#FFF'
    },
    button:{
        width: 300,
    }
})