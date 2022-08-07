import React from 'react';
import {View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {Colors} from '@/theme';
import Text from '../Common/Text';

const width = Dimensions.get('window').width;

const LargeButton = props => {
  const {title, onPress, color, customStyle = {}} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, customStyle.container]}
    >
      <View
        style={[
          styles.buttonContainer,
          color ? {backgroundColor: color, color: Colors.white} : null,
          customStyle.buttonContainer,
        ]}
      >
        <Text
          style={[
            styles.text,
            color ? {color: Colors.white} : null,
            customStyle.text,
          ]}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: Colors.transparent,
    margin: 5,
    borderRadius: 4,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  buttonContainer: {
    width: width - 40,
    height: 50,
    backgroundColor: Colors.gray,
    borderRadius: 4,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: Colors.white,
  },
});

export default LargeButton;
