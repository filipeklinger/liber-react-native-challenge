import React from 'react'
import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation'

//telas da aplicacao
import Inicio from './screens/Inicio'

const MainRoutes = {

    Inicio:{
        name: 'Inicio',
        screen: Inicio
    }
}

const MainNavigator = createStackNavigator(MainRoutes,
     { initialRouteName: 'Inicio',
     headerMode: 'none'
    })

const App = createAppContainer(MainNavigator);
export default App