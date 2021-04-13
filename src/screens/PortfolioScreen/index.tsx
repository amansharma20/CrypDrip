import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import styles from './styles';
import PortfolioCoin from '../../../components/PortfolioCoin';
const image = require('../../../assets/images/Saly-10.png');

export interface PortfolioCoinProps {
  portfolioCoin: {
    image: string,
    name: string,
    symbol: string,
    amount: string,
    valueUSD: string,
  }
}

const PortfolioCoins = [{
  id: '1',
  name: 'Virtual Dollars',
  color: 'white',
  image: 'https://bit.ly/2ZT7bzz',
  symbol: 'USD',
  amount: 112,
  valueUSD: 69420,
}, {
  id: '2',
  name: 'Bitcoin',
  color: 'white',
  image: 'https://bit.ly/2ZT7bzz',
  symbol: 'USD',
  amount: 112,
  valueUSD: 59420,
}, {
  id: '3',
  name: 'Etherium',
  color: 'white',
  image: 'https://bit.ly/2ZT7bzz',
  symbol: 'USD',
  amount: 300,
  valueUSD: 30120,
}, {
  id: '4',
  name: 'Etherium',
  color: 'white',
  image: 'https://bit.ly/2ZT7bzz',
  symbol: 'USD',
  amount: 300,
  valueUSD: 30120,
}, {
  id: '5',
  name: 'Etherium',
  color: 'white',
  image: 'https://bit.ly/2ZT7bzz',
  symbol: 'USD',
  amount: 300,
  valueUSD: 30120,
}, {
  id: '6',
  name: 'Etherium',
  color: 'white',
  image: 'https://bit.ly/2ZT7bzz',
  symbol: 'USD',
  amount: 300,
  valueUSD: 30120,
}, {
  id: '7',
  name: 'Etherium',
  color: 'white',
  image: 'https://bit.ly/2ZT7bzz',
  symbol: 'USD',
  amount: 300,
  valueUSD: 30120,
}, {
  id: '8',
  name: 'Etherium',
  color: 'white',
  image: 'https://bit.ly/2ZT7bzz',
  symbol: 'USD',
  amount: 300,
  valueUSD: 30120,
}, {
  id: '9',
  name: 'Etherium',
  color: 'white',
  image: 'https://bit.ly/2ZT7bzz',
  symbol: 'USD',
  amount: 300,
  valueUSD: 30120,
},
]

const PortfolioScreen = () => {
    return (
      <View style={styles.root}>
       <FlatList 
       style={{width: '100%'}}
          data={PortfolioCoins}
          renderItem={({item}) => <PortfolioCoin portfolioCoin={item} />}
          ListHeaderComponentStyle={{alignItems: 'center'}}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
        <> 
          <Image style={styles.image} source={image}/>
            <View style={styles.balanceContainer}>
              <Text style={styles.label}>Porfolio Balance</Text>
              <Text style={styles.balance}>$69.420</Text>
            </View> 
        </>
          )}
       />
      </View>
      
    );
};

export default PortfolioScreen;
