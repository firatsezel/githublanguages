import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Colors} from '@/theme';
import SearchBar from './SearchBar';
import Avatar from '../List/Avatar';
import Text from './Text';

const device = Dimensions.get('window');
const {width, height} = device;

const Header = props => {
  const {
    url = '',
    isProfile = false,
    isSearchVisible = false,
    onChangeText = null,
    user = {},
  } = props;
  const {name} = user;
  return (
    <View style={styles.container}>
      {isSearchVisible && (
        <View style={styles.searchContainer}>
          <SearchBar onChangeText={onChangeText} />
        </View>
      )}
      {isProfile && (
        <View style={styles.avatarContainer}>
          <Avatar url={url} />
        </View>
      )}
      {!!name && (
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{name}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.gray,
    width,
    height: height / 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    width: '100%',
    height: 50,
    position: 'absolute',
    bottom: -25,
    alignSelf: 'center',
  },
  avatarContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: -50,
    alignSelf: 'center',
  },
  nameContainer: {
    alignSelf: 'center',
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: Colors.white,
  },
});

export default Header;
