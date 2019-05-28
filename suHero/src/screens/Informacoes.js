import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    ImageBackground
} from 'react-native'
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';
import Icon from 'react-native-vector-icons/AntDesign'

import cardImage from '../../assets/img/cardBackground.jpeg'
import backImage from '../../assets/img/hero1.jpg'

const powerBar = (att,value) =>
    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Text style={[styles.texto,{width: 100,fontWeight:'bold'}]}>{att}</Text>
            <ProgressBar
            style={{flex:1,}}
            color={'#ff4500'}
            width={null}
            progress={(value)/100}/>
    </View>
const powerStatus = ps=>
    <View>
        {powerBar('Inteligencia',ps.intelligence)}
        {powerBar('Força',ps.strength)}
        {powerBar('Velocidade',ps.speed)}
        {powerBar('Durabilidade',ps.durability)}
        {powerBar('Poder',ps.power)}
        {powerBar('Combate',ps.combat)}
    </View>

const biografia = bio=>
    <View>
        <Text style={styles.texto}>Nome completo: {bio['full-name']}</Text>
        <Text style={styles.texto}>Conhecido como: {bio['alter-egos']}</Text>
    </View>

export default props=>{
    let results = props.navigation.getParam('results')
    return(
    <ScrollView>
        <ImageBackground
        source={backImage}
        style={{width: '100%', height: '100%'}}>
            <View style={styles.container}>

                <View style={styles.voltarContainer}>
                    <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                        <Icon name='arrowleft' size={22} color={'#000'}/>
                    </TouchableOpacity>
                </View>
                <View>
                    <ImageBackground
                        style={styles.card}
                        imageStyle={{borderWidth: 3,borderColor: '#000',borderRadius: 12,}}
                        source={cardImage}
                    >
                    <Text style={styles.titulo}>{results.name}</Text>
                    <Image
                        source={{uri: results.image.url}}
                        indicator={ProgressBar} 
                        style={{
                            width: 320, 
                            height: 240, 
                        }}
                    />
                    <View style={styles.statusContainer}>
                        {biografia(results.biography) || <Text>Ops algo deu errado</Text>}
                        {powerStatus(results.powerstats) || <Text>Ops algo deu errado</Text>}
                    </View>
                    </ImageBackground>
                </View>
                
            </View>
        </ImageBackground>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 16,
        backgroundColor: 'rgba(0,0,0, 0.1)',
    },
    voltarContainer:{
        padding: 5,
        paddingBottom: 16
    },
    card:{
        width: (Dimensions.get('window').width)-32,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo:{
        fontSize: 32,
        paddingTop: 16,
        paddingBottom: 16,
        textAlign: 'center',
        color: '#000'
    },
    texto:{
        padding: 6,
    },
    statusContainer:{
        width: 320,
        backgroundColor: '#FFF',
        padding: 8,
        margin: 8,
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 6,
    }
})