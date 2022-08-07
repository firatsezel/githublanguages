import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Colors} from '@/theme';

const Avatar = props => {
  const {url} = props;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: url}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    borderRadius: 200,
    borderWidth: 2,
    borderColor: Colors.black,
  },
  image: {width: '100%', height: '100%', borderRadius: 200},
});

export default Avatar;
