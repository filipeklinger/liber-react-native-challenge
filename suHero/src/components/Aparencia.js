import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

export default props=>{
    let ap = props.aparencia
    return(
        <View>
            <Text><Text style={styles.texto}>Genero:</Text> {ap.gender || 'não informado'}</Text>
            <Text><Text style={styles.texto}>Raça:</Text> {ap.race || 'não informado'}</Text>
            <Text><Text style={styles.texto}>Altura:</Text> {ap.height[1] || 'não informado'}</Text>
            <Text><Text style={styles.texto}>Peso:</Text> {ap.weight[1] || 'não informado'}</Text>
            <Text><Text style={styles.texto}>Cor dos olhos:</Text> {ap["eye-color"] || 'não informado'}</Text>
            <Text><Text style={styles.texto}>Cor do cabelo:</Text> {ap["hair-color"] || 'não informado'}</Text>
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