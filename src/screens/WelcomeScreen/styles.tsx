import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root: {
        flex: 1,
        height: 698,
        alignItems: 'center',
        backgroundColor: 'black'
    },
    image: {
        width: '100%',
        height: '85%',
    },
    header1: {
        textAlign: 'center',
        color: 'white',
        fontSize: 38,
        fontWeight: 'bold',
        marginTop: 275,
        borderColor: 'black',
        width: '70%',
    },
    header2: {
        fontSize: 20,
        textAlign: 'center',
        color: 'lightgrey',
        marginTop: 120,
        marginBottom: 300,
    },
    scroll: {
        position: 'absolute',
        marginTop: 60,
        // flex: 1
    },
    buttonImage: {
        resizeMode: 'contain',
        width: '100%'
    },
    googleButton: {
        width: '65%',
        marginTop: 'auto', 
        marginBottom: 50,
    }
});

export default styles;