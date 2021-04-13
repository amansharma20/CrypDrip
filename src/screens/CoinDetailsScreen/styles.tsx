import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'black'
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        height: 50,
        marginVertical: 10,
        width: '100%',
    },
    image: {
        height: 50,
        width: 50,
        marginRight: 10,
    },
    balance: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white',
    },
    name: {
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'white',
    },
    symbol: {
        color: 'white',
    },
    left:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginVertical: 15,
        
    },
    label: {
        color: '#a9a9a9',
        marginBottom: 5,
    },
    value: {
        color: 'white',
        fontSize: 26,
        marginTop: -5
    },
    valueContainer: {
        alignItems: 'center',
        marginHorizontal: 5
    },
    button: {
        flex: 1,
        margin: 10,
        height: 45,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 'auto',
    },
    buttonText: {
        color: 'white',
        fontSize: 15
    },
});

export default styles;