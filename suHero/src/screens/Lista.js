import React from 'react'
import {View,Text,FlatList,StyleSheet} from 'react-native'

import ItemDeLista from '../components/ItemDeLista';

export default props =>{
    let results = props.navigation.getParam('results')
    return(
      <View>
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
})