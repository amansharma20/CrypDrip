import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root: {
        padding: 20,
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black'
    },
    image: {
        height: 200,
        resizeMode: 'contain'
    },
    balanceContainer: {
        width: '100%',
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    balance: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white',
    },
    
});

export default styles;