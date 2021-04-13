import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   root: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'black'
   },
   title: {
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 20
   },
   subtitle: {
    color: 'lightgrey',
    fontSize: 14
   },
   image: {
       height: 150,
       width: 240,
       resizeMode: 'contain'
   },
   inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    color: 'white',
    borderWidth: 1.5,
    borderColor: '#b1b1b1',
    padding: 8,
    flex: 1,
    margin: 15,
   },
   inputTextBTC: {
    color: 'white',
   },
   inputTextUSD: {
    color: 'white',
   },
   inputsContainer: {
       flexDirection: 'row', 
       justifyContent: 'space-between',
       width: '100%',
       alignItems: 'center',
       color: 'white'
    },
    button: {
        backgroundColor: '#2f95dc',
        marginTop: 'auto',
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    },
});

export default styles;