import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import HzOne from '../../../components/HzscrollOne';
import styles from './styles';
const image = require('../../../assets/images/vigg.jpg');

const HomeScreen = () => {
    return (
      <View style={styles.root}>
        <ImageBackground style={styles.image} source={image}>
          <Text style={styles.header1} numberOfLines={2}>Welcome to CrypDrip Bhay</Text>
          <Text style={styles.header2}>Invest your virtual One Million Dollars and compete with others</Text>
        </ImageBackground>
        <View style={styles.scroll}>
        <HzOne />
        </View>
        

     </View>
    );
};

export default HomeScreen;
