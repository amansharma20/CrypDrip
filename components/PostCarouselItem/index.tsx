import React from 'react';
import { View, Text, Image, useWindowDimensions, Pressable } from "react-native";
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const Post = (props) => {

  const post = props.post;
  const width = useWindowDimensions().width;

  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate('Post', {postId: post.id});
  }

  return (

        <Pressable onPress={goToPostPage} style={[styles.container, { width: width - 60}]}>
            <View style={styles.innerContainer}>
                <Image
                style={styles.image}
                source={{uri: post.image}}
                />
            <View>
                <Text style={styles.title}>
                    {post.title}
                </Text>
            </View>
            </View>
        </Pressable>
  );
};

export default Post;
