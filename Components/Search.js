import React from 'react'
import { StyleSheet, View, Text, TextInput, Button, FlatList } from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.searchedText = ""
        this.state = {
            films : [],
        }
    }

    _searchTextInputChanged(text) {
        this.searchedText = text
    }

    _loadFilms() {
        if(this.searchedText.length > 0) {
            getFilmsFromApiWithSearchedText(this.searchedText).then(data => {
                this.setState({films : data.results})
            })
        }
    }

    render() {
        console.log("render")
        return (
            <View style={ styles.mainContainer }>
                <TextInput
                    style={styles.textInput}
                    placeholder='Titre du film'
                    onChangeText={(text) => this._searchTextInputChanged(text)}
                />
                <Button title='Rechercher' onPress={() => this._loadFilms()} />
                <FlatList
                    data={this.state.films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <FilmItem film={item}/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: 20
    },
    textInput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
})

export default Search