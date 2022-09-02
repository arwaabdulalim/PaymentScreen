import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Totals = ({text, style, price, textStyle}) => {
  return (
    <View style={[styles.totalWrapper, {...style}]}>
      <Text style={styles.totalText}>{price}</Text>
      <Text style={styles.totalText}>{text}</Text>
    </View>
  );
};

export default Totals;
