import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors} from '@/theme';
import Text from '../Common/Text';
import {calculateSize} from '@/utils/functions';

const SmallLanguage = props => {
  const {name, size} = props;
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <View style={styles.logoView}>
          <Text style={styles.logoText}>{name.slice(0, 2)}</Text>
        </View>
      </View>
      <View style={styles.middle}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.tagText}>{calculateSize(size)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    width: '100%',
    height: '70%',
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.white,
    marginVertical: 5,
  },
  logoView: {
    width: 60,
    height: 60,
    backgroundColor: Colors.gray,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topView: {
    width: 50,
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middle: {
    width: '100%',
    flex: 2,
    color: Colors.white,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  logoText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: Colors.white,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.black,
  },
  tagText: {
    fontSize: 10,
    color: Colors.black,
  },
});

export default SmallLanguage;
