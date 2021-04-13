import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import styles from './styles';
import MarketCoin from '../../../components/MarketCoin';
const image = require('../../../assets/images/Saly-17.png');

export interface MarketCoinProps {
  marketCoin: {
    image: string,
    name: string,
    symbol: string,
    amount: string,
    valueUSD: string,
  }
}

const MarketCoins = [{
  id: '1',
  name: 'Virtual Dollars',
  color: 'white',
  image: 'https://bit.ly/2ZT7bzz',
  symbol: 'USD',
  valueChange24H: 12,
  valueUSD: 69420,
}, {
  id: '2',
  name: 'Bitcoin',
  color: 'white',
  image: 'https://bit.ly/2ZT7bzz',
  symbol: 'USD',
  valueChange24H: -1.12,
  valueUSD: 59420,
}, {
  id: '3',
  name: 'Etherium',
  color: 'white',
  image: 'https://bit.ly/2ZT7bzz',
  symbol: 'USD',
  valueChange24H: 30,
  valueUSD: 30120,
}, 
]

const MarketScreen = () => {
    return (
      <View style={styles.root}>
       <FlatList 
       style={{width: '100%'}}
          data={MarketCoins}
          renderItem={({item}) => <MarketCoin marketCoin={item} />}
          ListHeaderComponentStyle={{alignItems: 'center'}}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
        <> 
          <Image style={styles.image} source={image}/>
            <View style={styles.marketContainer}>
              <Text style={styles.label}>Market</Text>
              
            </View> 
        </>
          )}
       />
      </View>
      
    );
};

export default MarketScreen;
