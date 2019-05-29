import React from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Platform
} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import ItemDeLista from '../components/ItemDeLista';
import backImage from '../../assets/img/background.jpeg'

export default props =>{
    let results = props.navigation.getParam('results')
    return(
      <ImageBackground source={backImage} style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <View style={styles.headContainer}>
            <TouchableOpacity onPress={()=>props.navigation.goBack()}>
              <Icon name='arrowleft' size={22} color={'#000'}/>
            </TouchableOpacity>
            <Text style={styles.titulo}>Encontramos esses herois</Text>
          </View>
          
          <FlatList
            data={results} keyExtractor={ item=> `${item.id}`}
            renderItem={ ({item}) =><ItemDeLista hero={item} onPress={props.navigation.navigate} />}
            />
        </View>
      </ImageBackground>
    )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding:16,
    paddingTop: Platform.OS == `android`? 0 : 50,
    backgroundColor: 'rgba(255,255,255, 0.3)',
  },
  titulo:{
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingLeft: 5
  },
  headContainer:{
        flexDirection: 'row',
        padding: 5,
        paddingBottom: 16,
        alignItems: 'center'
    }
})