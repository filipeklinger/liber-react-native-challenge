import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default props=>{
    return(
    <View style={styles.container}>
        <Text style={styles.titulo}>Estatus do Personagem</Text>
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