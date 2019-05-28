//recebe results
/*
"results": [
    {
      "id": "69",
      "name": "Batman",
      "powerstats": {},
      "biography": {
        "full-name": "Terry McGinnis",
        "alter-egos": "No alter egos found.",
        "aliases": [],
        "place-of-birth": "Gotham City, 25th Century",
        "first-appearance": "Batman Beyond #1",
        "publisher": "DC Comics",
        "alignment": "good"
      },
      "appearance": {},
      "work": {},
      "connections": {},
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg"
      }
    }
*/
import React from 'react'
import {View,Text} from 'react-native'
export default props =>{
    let results = props.navigation.getParam('results')
    return(<View>
        <Text>Lista</Text>
        <Text>{results[0].name}</Text>
    </View>)
}