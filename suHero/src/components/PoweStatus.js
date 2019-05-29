import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import ProgressBar from 'react-native-progress/Bar';

const powerBar = (att,value) =>
    <View style={styles.powerContainer}>
            <Text style={styles.texto}>{att}</Text>
            <ProgressBar
            style={{flex:1,}}
            color={'#ff4500'}
            width={null}
            progress={(isNaN(value)? 0 : value)/100}/>
    </View>

export default props=>{
    let ps = props.power
    return(
        <View>
            {powerBar('Inteligência',ps.intelligence)}
            {powerBar('Força',ps.strength)}
            {powerBar('Velocidade',ps.speed)}
            {powerBar('Resistência',ps.durability)}
            {powerBar('Poder',ps.power)}
            {powerBar('Combate',ps.combat)}
        </View>
        )
}

const styles = StyleSheet.create({
    powerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'},
    texto:{
        padding: 2,
        fontSize: 13,
        width: 100,
        fontWeight:'bold'
    }
})