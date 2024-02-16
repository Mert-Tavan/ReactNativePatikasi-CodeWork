import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dcdcdc',
        padding: 10
    },
    jobName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginVertical: 10
    },
    titlesHeader:{
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 3
    },
    titles: {
        color: 'black'
    },
    detailTitle:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center',
        marginVertical: 5
    },
    detailContainer: {
        borderRadius: 5,
        padding: 5,
        backgroundColor: '#f2f2f2',
        color: 'black',
    },
    buttonContainer:{
        flex: 1,
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
})