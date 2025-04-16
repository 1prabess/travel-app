import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const Title = ({text = 'Title', style}) => {
  return <Text style={[styles.title, style]}>{text} </Text>;
};

export default Title;
