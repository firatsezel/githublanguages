import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {Colors} from '@/theme';

const SearchBar = props => {
  const {onChangeText = () => {}, value} = props;
  return (
    <View style={styles.container}>
      <View style={styles.leftView}>
        <FontAwesomeIcon color={'white'} size={20} icon={faMagnifyingGlass} />
      </View>
      <TextInput
        style={styles.textInput}
        placeholder="Seach Users"
        placeholderTextColor={Colors.white}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.gray,
    width: '80%',
    height: 50,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.white,
  },
  leftView: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 25,
    color: Colors.white,
  },
  textInput: {
    width: '80%',
    height: '100%',
    color: Colors.white,
  },
});

export default SearchBar;
