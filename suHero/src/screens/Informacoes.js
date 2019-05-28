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
            progress={(isNaN(value)? 0 : value)/100}/>
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
        <Text style={styles.texto}><Text style={{fontWeight:'bold'}}>Nome completo:</Text> {bio['full-name']}</Text>
        <Text style={styles.texto}><Text style={{fontWeight:'bold'}}>Conhecido como:</Text> {bio['alter-egos']}</Text>
    </View>

export default props=>{
    let heroi = props.navigation.getParam('results')
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
                        imageStyle={styles.imgCard}
                        source={cardImage}>
                    <Text style={styles.titulo}>{heroi.name}</Text>
                    <Image
                        source={heroi.image.url? {uri: heroi.image.url} : null}
                        indicator={ProgressBar} 
                        style={styles.img}
                    />
                    <View style={styles.statusContainer}>
                        {biografia(heroi.biography) || <Text>Ops algo deu errado</Text>}
                        {powerStatus(heroi.powerstats) || <Text>Ops algo deu errado</Text>}
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
    img:{
        width: 320, 
        height: 240,
        borderRadius: 6
    },
    card:{
        width: (Dimensions.get('window').width)-32,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgCard:{
        borderWidth: 3,
        borderColor: '#000'
    },
    titulo:{
        fontFamily: 'HeroesLegend',
        fontSize: 22,
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