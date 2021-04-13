import  React, {useState, useEffect, useRef} from 'react';
import { View,
    flatlist,
    Dimensions,
} from 'react-native';
import styles from './styles';
import PostCarouselItem from '../../components/PostCarouselItem';
import feed from '../../assets/data/feed';
import {FlatList} from 'react-native-gesture-handler';

const HzOne = () => {
    return(
        <View>

            <FlatList
                style={styles.horizontalflatlist}
                ref={flatlist}
                data={feed}
                renderItem={({item}) => <PostCarouselItem post={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToAlignment={"center"}
                decelerationRate={"fast"}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').width}
                snapToInterval={300}
                />

        </View>
    );
};

export default HzOne;
