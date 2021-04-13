import React from 'react';
import {View, Text} from 'react-native';
import StyleSheet from './styles';

interface PercentageChangeProps {
    value: number,
    style? : object
}

const PercentageChange = ({ value, style = {} }: PercentageChangeProps ) => {
    return (
        <View>
            <Text style={[style, {color: value > 0 ? '#98fb98' : '#ff004f'}]}>
                            {value > 0 && '+'} {value} %
            </Text>
        </View>
    )
}

export default PercentageChange;