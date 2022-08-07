import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Colors} from '@/theme';
import Text from '../Common/Text';
import Avatar from './Avatar';

const UserCell = ({item, onPressCell = () => {}}) => {
  const {avatar_url, login, node_id} = item;
  return (
    <TouchableOpacity
      onPress={() => onPressCell(item)}
      style={styles.container}
    >
      <View style={styles.leftView}>
        <Avatar url={avatar_url} />
      </View>
      <View style={styles.rightView}>
        <View style={styles.nameField}>
          <Text style={styles.text}>{login}</Text>
        </View>
        <View style={styles.nameField}>
          <Text style={styles.tagText}>{node_id}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    width: '80%',
    height: 50,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.white,
    marginVertical: 5,
  },
  leftView: {
    width: 50,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightView: {
    width: '70%',
    height: '100%',
    color: Colors.white,
    flexDirection: 'column',
  },
  nameField: {
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    color: Colors.black,
  },
  tagText: {
    fontSize: 12,
    color: Colors.black,
  },
});

export default UserCell;
