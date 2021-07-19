import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class FilmItem extends React.Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <Image style={styles.image} source={{uri: "image"}}/>
                <View style={styles.contentContainer}>
                    <View style={styles.headerContainer}>

                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        height: 190,
        flexDirection: 'row'
    },
    image: {
        width: 120,
        height: 180,
        marginTop: 5,
        backgroundColor: 'gray'
    },
    contentContainer: {
        flex: 1,
        margin: 5
    },
    headerContainer: {
        flex: 3,
        flexDirection: 'row'
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
    }
})

export default FilmItem