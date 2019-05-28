import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';
/*
 "intelligence": "100",
    "strength": "26",
    "speed": "27",
    "durability": "50",
    "power": "47",
    "combat": "100"
*/
const powerStatus = ps=>
    <View>
        <Text>Inteligencia: {ps.intelligence}</Text>
        <Text>Força: {ps.strength}</Text>
        <Text>Velocidade: {ps.speed}</Text>
        <Text>Durabilidade: {ps.durability}</Text>
        <Text>Poder: {ps.power}</Text>
        <Text>Combate: {ps.combat}</Text>
    </View>
const biografia = bio=>
    <View>
        <Text>Nome completo: {bio['full-name']}</Text>
        <Text>Conhecido como: {bio['alter-egos']}</Text>
    </View>

export default props=>{
    let results = props.navigation.getParam('results')
    return(
    <View style={styles.container}>
        <Text style={styles.titulo}>{results.name}</Text>
        <Image
            source={{uri: results.image.url}}
            indicator={ProgressBar} 
            style={{
                width: 320, 
                height: 240, 
            }}
        />
        <View>
            {biografia(results.biography) || <Text>Ops algo deu errado</Text>}
            {powerStatus(results.powerstats) || <Text>Ops algo deu errado</Text>}
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 16
    },
    titulo:{
        fontSize: 32,
        paddingTop: 30,
        paddingBottom: 16
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