import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Image from 'react-native-image-progress';

export default props=>{
    let hero = props.hero;
    return(
        <TouchableOpacity onPress={()=>props.onPress('Informacoes',{results: {...hero}})}>
        <View style={styles.container}>
            <View style={styles.textoContainer}>
                <Text style={styles.nome}>{hero.name || 'Nome do heroi'}</Text>
                <Text style={styles.alterEgo}>ID: {hero.id}</Text>
            </View>
            <View style={styles.imageContainer}>
                    <Image
                    style={{width: 60,height: 60,}}
                    borderRadius={6}
                    source={{uri: hero.image.url}}
                    />
            </View>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#AAA',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    textoContainer:{
        flex: 8
    },
    nome:{
        fontSize: 18,
        color: '#000',
    },
    alterEgo:{
        fontSize:14,
        color: '#555',
    },
    imageContainer:{
        flex: 2
    }
})