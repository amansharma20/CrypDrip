import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './styles';
import PercentageChange from '../PercentageChange';
import { useNavigation } from '@react-navigation/native';

export interface MarketCoinProps {
    marketCoin: {
        image: string,
        name: string,
        symbol: string,
        valueChange24H: number,
        valueUSD: number,
    }
} 

const MarketCoin = (props: MarketCoinProps) => {
    const {
        marketCoin: {
            image,
            name,
            symbol,
            valueChange24H,
            valueUSD
        }
    } = props;
    
const navigation = useNavigation();

        return (
            <Pressable style={styles.root} onPress={() => navigation.navigate('CoinDetails')}>
                <View style={styles.left}>
                <Image style={styles.image} source={{uri: image}} />
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text >{symbol}</Text>
                </View>
                </View>
                <View style={{alignItems: 'flex-end'}}>
                    <Text style={styles.name}>${valueUSD}</Text>
                    <PercentageChange value={valueChange24H}/>
                        <Text style={{color: valueChange24H > 0 ? '#98fb98' : '#ff004f'}}>
                            {valueChange24H > 0 && '+'} {valueChange24H}
                        </Text>
                </View>
            </Pressable>
        )
};

export default MarketCoin;
