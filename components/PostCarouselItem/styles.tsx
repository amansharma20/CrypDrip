import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: 120,
        padding: 5,
        marginTop: 500
    },
    innerContainer: {
        flexDirection: 'row',
        backgroundColor: 'black',
        borderRadius: 10,
        overflow: 'hidden'
    },
    image: {
        height: '100%',
        aspectRatio: 1,
        resizeMode: 'cover',
        backgroundColor: 'black',
    },
    title: {
        color: 'white',
        marginTop: 10,
        fontSize: 16,
        padding: 20,
        fontWeight: 'bold',
    },
});

export default styles;
