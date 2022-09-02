/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Payment from './src/screens/payment/Payment';

const App = () => {
  return (
    <SafeAreaView>
      <Payment />
    </SafeAreaView>
  );
};

export default App;
