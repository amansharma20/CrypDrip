import Auth from '@aws-amplify/auth';
import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import navigation from '../../navigation';
import styles from './styles';
const image = require('../../../assets/images/Saly-16.png');

const ProfileScreen = () => {
  const [user, setUser] = useState({
    id: '1',
    name: "Aman",
    email: 'amanacts20@gmail.com',
    image: 'https://bit.ly/2ZT7bzz',
    netWorth: 696969
  })

const navigation = useNavigation();
const signOut = () => {
   Auth.signOut();
  navigation.navigate('Welcome');
}

    return(
      <View style={styles.root}>
        <Image style={styles.image} source={image}/>
        <View style={styles.userContainer}>
        <View style={styles.left}>
                <Image style={styles.userImage} source={{uri: user.image}} />
                <View>
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.email}>{user.email}</Text>
                </View>
                </View>
                <View style={{alignItems: 'flex-end'}}>
                    <Text style={styles.value}>${user.netWorth}</Text>
                </View>
                </View>
                <Pressable onPress={signOut} style={{marginTop: 'auto'}}>
                  <Text style={{color: 'white'}}>Sign Out</Text>
                </Pressable>
      </View>
    );
};

export default ProfileScreen;
