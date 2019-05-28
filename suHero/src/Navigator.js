import React from 'react'
import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation'

//telas da aplicacao
import Inicio from './screens/Inicio'
import Lista from './screens/Lista'
import Informacoes from './screens/Informacoes'
const MainRoutes = {

    Inicio:{
        name: 'Inicio',
        screen: Inicio
    },
    Lista:{
        name: 'Lista',
        screen: Lista
    },
    Informacoes:{
        name: 'Informacoes',
        screen: Informacoes
    }
}

const MainNavigator = createStackNavigator(MainRoutes,
     { initialRouteName: 'Inicio',
     headerMode: 'none'
    })

const App = createAppContainer(MainNavigator);
export default App