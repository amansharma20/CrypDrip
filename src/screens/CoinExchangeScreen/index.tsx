import React, { useState, useEffect } from 'react';
import { Text, View, Image, TextInput, Pressable, Alert } from 'react-native';
import styles from './styles';
const image = require('../../../assets/images/Saly-31.png');
import {useRoute} from '@react-navigation/native';

const CoinExchangeScreen = () => {
    const [coinAmount, setCoinAmount] = useState()
    const [coinUSDValue, setCoinUSDValue] = useState()

    const maxUSD = 100000;

const route = useRoute();

const isBuy = route?.params?.isBuy;
const coinData = route?.params?.coinData;

useEffect(() => {
    const amount = parseFloat(coinAmount)
    if (!amount && amount !== 0) {
        setCoinAmount("");
        setCoinUSDValue("");
        return;
    }
    // setCoinAmount(amount.toString());
    setCoinUSDValue((amount * coinData?.currentPrice).toString());
}, [coinAmount]);

useEffect(() => {
    const amount = parseFloat(coinUSDValue)
    if (!amount && amount !== 0) {
        setCoinAmount("");
        setCoinUSDValue("");
        return;
    }
    // setCoinAmount(amount.toString());
    setCoinAmount((amount / coinData?.currentPrice).toString());
}, [coinUSDValue]);

const onPlaceOrder = () => {
    if (isBuy && parseFloat(coinUSDValue) > maxUSD) {
        Alert.alert('Error', 'Not enough USD coins');
        return;
    }
    if (isBuy && parseFloat(coinAmount) > coinData.amount) {
        Alert.alert('Error', 'Not enough $(coinData.Symbol) coins. Max ${coinData.amount}');
        return;
}
}

    return (
        <View style={styles.root}>
        <Image style={styles.image} source={image}/>
            <Text style={styles.title}>
                {isBuy ? 'Buy ' : 'Sell '}
                {coinData?.name}
                </Text>
            <Text style={styles.subtitle}>
                1 {coinData?.symbol} 
                {' = '}
                ${coinData?.currentPrice}
                </Text>

                <View style={styles.inputsContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput style={{color: 'white'}}
                        keyboardType="decimal-pad"
                        placeholder="0"
                        value={coinAmount}
                        onChangeText={setCoinAmount}
                        // maxLength={10}
                        textAlign="center"
                        />
                        <Text style={styles.inputTextBTC}>{coinData?.symbol}</Text>
                    </View>
                    <Text style={{color: 'white', fontSize: 30}}>=</Text>
                    <View style={styles.inputContainer}>
                        <TextInput style={{color: 'white'}} 
                        keyboardType="decimal-pad"
                        value={coinUSDValue}
                        onChangeText={setCoinUSDValue}
                        placeholder="0"
                        // maxLength={10}
                        textAlign="center"
                         />
                        <Text style={styles.inputTextUSD}>USD</Text>
                    </View>
                </View>
            <Pressable style={styles.button} onPress={onPlaceOrder}>
                <Text style={styles.buttonText}>Place order</Text>
            </Pressable>

        </View>
    );
};

export default CoinExchangeScreen;
        