import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        backgroundColor: 'black'
    },
    image: {
        marginTop: 20,
        height: 175,
        resizeMode: "contain"
    },
    userContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginTop: 1,
        height: 50,
        marginVertical: 10,
        width: '100%'
    },
    userImage: {
        height: 75,
        width: 75,
        marginRight: 10,
        borderRadius: 50, 
    },
    left: {
        flexDirection: 'row',
        alignItems:'center',
    },
    value: {
        color: 'white'
    },
    name: {
        color: 'white',
    },
    email: {
        color: 'white',
    },
});

export default styles;