import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import styles from './styles';
import UserRankingItem from '../../../components/UserRankingItem';
const image = require('../../../assets/images/Saly-20.png');

const MarketCoins = [{
  id: '1',
  name: 'Virtual Dollars',
  image: 'https://bit.ly/2ZT7bzz',
  netWorth: 69420,
}, {
  id: '2',
  name: 'Virtual Dollars',
  image: 'https://bit.ly/2ZT7bzz',
  netWorth: 69420,
}, {
  id: '3',
  name: 'Virtual Dollars',
  image: 'https://bit.ly/2ZT7bzz',
  netWorth: 69420,
}, 
]

const MarketScreen = () => {
    return (
      <View style={styles.root}>
       <FlatList 
       style={{width: '100%'}}
          data={MarketCoins}
          renderItem={({item, index}) => <UserRankingItem user={item} place={index+1} />}
          ListHeaderComponentStyle={{alignItems: 'center'}}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
        <> 
          <Image style={styles.image} source={image}/>
            <View style={styles.marketContainer}>
              <Text style={styles.label}>Rankings</Text>
              
            </View> 
        </>
          )}
       />
      </View>
      
    );
};

export default MarketScreen;
