import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        // backgroundColor: 'red',
        marginTop: 1,
        // width: '90%',
        height: 50,
        marginVertical: 10,
    },
    image: {
        height: 50,
        width: 50,
        marginRight: 10,
    },
    name: {
        color: 'white',
        fontWeight: 'bold',
    },
    left: {
        flexDirection: 'row',
        alignItems:'center',
    },
    container: {
        marginBottom: 1
    },
    title: {
        color: 'white'
    },
    symbol: {
        color: '#6b6b6b',
        marginBottom: 5,
    },
    value: {
        color: 'white'
    },
    place: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        width: 20,
    },
});

export default styles;