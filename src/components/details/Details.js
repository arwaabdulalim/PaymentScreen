import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Switcher from '../switcher/Switcher';
import styles from './styles';

const Details = ({
  disabled,
  switchValue,
  onSwitchChange,
  amount,
  accountId,
  date,
}) => {
  return (
    <View style={styles.detailsWrapper}>
      <Text>{date}</Text>
      <Text>Member ID: {accountId}</Text>
      <Text>Amount: {amount}</Text>
      <Switcher
        disabled={disabled}
        value={switchValue}
        onSwitchChange={onSwitchChange}
      />
    </View>
  );
};

export default Details;
