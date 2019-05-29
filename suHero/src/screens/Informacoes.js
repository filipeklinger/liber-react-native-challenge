import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    ImageBackground,
    Platform
} from 'react-native'
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';
import Icon from 'react-native-vector-icons/AntDesign'

import cardImage from '../../assets/img/cardBackground.jpeg'
import backImage from '../../assets/img/hero1.jpg'
import PowerStatus from '../components/PoweStatus'
import Aparencia from '../components/Aparencia'

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

                <ImageBackground
                    style={styles.card}
                    imageStyle={styles.imgCard}
                    source={cardImage}>
                        <Text style={styles.titulo}>{heroi.name}</Text>
                        <Image
                            source={heroi.image.url? {uri: heroi.image.url} : null}
                            indicator={ProgressBar} 
                            style={styles.img}
                            borderRadius={6}
                        />
                        <View style={styles.statusContainer}>
                            <View>
                                <Text style={styles.texto}><Text style={{fontWeight:'bold'}}>Nome completo:</Text> {heroi.biography['full-name'] || 'Não informado'}</Text>
                                <Text style={styles.texto}><Text style={{fontWeight:'bold'}}>Alter ego(s):</Text> {heroi.biography['alter-egos'] || 'Não informado'}</Text>
                            </View>
                            <Aparencia aparencia={heroi.appearance} />
                            <PowerStatus power={heroi.powerstats}/>
                        </View>
                    </ImageBackground>
                
            </View>
        </ImageBackground>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        minHeight: Platform.OS == `android`? (Dimensions.get('window').height)-22 : (Dimensions.get('window').height),//altura maxima menos header
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 16,
        backgroundColor: 'rgba(0,0,0, 0.1)',
    },
    voltarContainer:{
        paddingTop: Platform.OS == `android`? 0 : 30,
        padding: 5,
        paddingBottom: 16
        
    },
    img:{
        width: (Dimensions.get('window').width)*4/5, 
        height: (Dimensions.get('window').height)*2/5,
        borderRadius: 6
    },
    card:{
        width: (Dimensions.get('window').width)-32,//ocupa largura maxima menos padding
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgCard:{
        borderRadius: 12,
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
        padding: 2,
        fontSize: 13
    },
    statusContainer:{
        width: (Dimensions.get('window').width)*4/5,
        backgroundColor: '#FFF',
        padding: 8,
        margin: 8,
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 6,
    }
})