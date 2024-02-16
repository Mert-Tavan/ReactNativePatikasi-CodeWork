import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    container: {
        margin: 8,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    title: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    company: {
        fontStyle: 'italic',
    },
    locationContainer: {
        width: 150,
        backgroundColor: '#ef5350',
        borderRadius: 20,
        padding: 5,
        alignItems: 'center'
    },
    location: {
        color: 'white',
        fontWeight: 'bold',
    },
    level: {
        textAlign: 'right',
        fontSize: 15,
        color: '#ef5350',
        fontWeight: 'bold',
    }
})