import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import Favorites from '../Components/Favorites'

const SearchStackNavigator = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: 'Rechercher'
        }
    },
    FilmDetail: {
        screen: FilmDetail,
        navigationOptions: {
            title: 'Détail du film'
        }
    }
})

const MoviesTabNavigator = createBottomTabNavigator({
    Search: {
        screen: SearchStackNavigator,
        navigationOptions: {
            tabBarIcon: () => {
                return <Image source={require('../Images/ic_search.png')} style={styles.icon} />
            }
        }
    },
    Favorites: {
        screen: Favorites,
        navigationOptions: {
            tabBarIcon: () => {
                return <Image source={require('../Images/ic_favorite.png')} style={styles.icon} />
            }
        }
    },
},
{
    tabBarOptions: {
        activeBackgroundColor: '#DDDDDD', // Couleur d'arrière-plan de l'onglet sélectionné
        inactiveBackgroundColor: '#FFFFFF', // Couleur d'arrière-plan des onglets non sélectionnés
        showLabel: true, // On affiche les titres
        showIcon: true // On informe le TabNavigator qu'on souhaite afficher les icônes définis

    }
})

const styles = StyleSheet.create({
    icon: {
        height: 30,
        width: 30
    }
})

export default createAppContainer(MoviesTabNavigator)