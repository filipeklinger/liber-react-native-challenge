import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
const getN = (str)=> str.split(' ')[0]//funcao para obter parte numerica
export default props=>{
    let ap = props.aparencia
    return(
        <View>
            <Text><Text style={styles.texto}>Genero:</Text> {ap.gender || 'não informado'}</Text>
            <Text><Text style={styles.texto}>Raça:</Text> {ap.race && ap.race != 'null'? ap.race : 'não informado'}</Text>
            <Text><Text style={styles.texto}>Altura:</Text> {ap.height[1] && getN(ap.height[1]) > 0? ap.height[1] : 'näo informado'}</Text>
            <Text><Text style={styles.texto}>Peso:</Text> {ap.weight[1]&& getN(ap.weight[1]) > 0? ap.weight[1] : 'näo informado'}</Text>
            <Text><Text style={styles.texto}>Cor dos olhos:</Text> {ap["eye-color"] && ap["eye-color"].length > 1? ap["eye-color"] : 'não informado'}</Text>
            <Text><Text style={styles.texto}>Cor do cabelo:</Text> {ap["hair-color"] && ap["hair-color"].length > 1? ap["hair-color"] : 'não informado'}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    texto:{
        padding: 2,
        fontSize: 13,
        width: 100,
        fontWeight:'bold'
    }
})