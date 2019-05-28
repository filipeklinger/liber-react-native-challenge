import React from 'react'
import {View,Text,FlatList,StyleSheet,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import ItemDeLista from '../components/ItemDeLista';

export default props =>{
    let results = props.navigation.getParam('results')
    return(
      <View>
        <View style={styles.voltarContainer}>
          <TouchableOpacity onPress={()=>props.navigation.goBack()}>
            <Icon name='arrowleft' size={22} color={'#000'}/>
          </TouchableOpacity>
        </View>
        <Text style={styles.titulo}>Encontramos esses herois</Text>
        <FlatList
          data={results} keyExtractor={ item=> `${item.id}`}
          renderItem={ ({item}) =><ItemDeLista hero={item} onPress={props.navigation.navigate} />}
          />
      </View>
    )
}

const styles = StyleSheet.create({
  titulo:{
    fontSize: 32,
    paddingTop: 30,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  voltarContainer:{
        padding: 5,
        paddingBottom: 16
    }
})