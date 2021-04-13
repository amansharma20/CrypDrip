import React, { useEffect } from 'react';
import { View, Text, Image, ImageBackground, Pressable } from 'react-native';
import HzOne from '../../../components/HzscrollOne';
import { Auth } from 'aws-amplify';
import styles from './styles';
import Navigation from '../../navigation';
import { ForceTouchGestureHandler } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';


const image = require('../../../assets/images/vigg.jpg');
const googleButtonImage = require('../../../assets/images/googleblue.png');

const WelcomeScreen = () => {
  const navigation = useNavigation

  useEffect(() => {
    const fetchUser = async () => {
      const user = await Auth.currentAuthenticatedUser();
      if (user) {
        const navigation = useNavigation();
        navigation.navigate('Root')
      }
    }

    fetchUser();
  }, [])

  const signInGoogle = async () => {
    // console.warn("hell")
    await Auth.federatedSignIn( { provider: "Google" } );
  } 


    return (
      <View style={styles.root}>
        <ImageBackground style={styles.image} source={image}>
          <Text style={styles.header1} numberOfLines={2}>Welcome to CrypDrip Bhay</Text>
          <Text style={styles.header2}>Invest your virtual One Million Dollars and compete with others</Text>
        </ImageBackground>
        <View style={styles.scroll}>
        </View>
        <Pressable onPress={signInGoogle} style={styles.googleButton}>
            <Image style={styles.buttonImage} source={googleButtonImage}/>
        </Pressable>
        

     </View>
    );
};

export default WelcomeScreen;
