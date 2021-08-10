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
        screen: SearchStackNavigator
    },
    Favorites: {
        screen: Favorites
    }
})

export default createAppContainer(MoviesTabNavigator)