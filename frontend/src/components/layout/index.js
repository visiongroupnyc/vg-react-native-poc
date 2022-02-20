
import React from 'react';
import { View } from 'react-native';
import Header from '../header';

export default function Layout({children}) {
  return (
    <View>
        <Header/>
        {children || ''}
    </View>
  );
};
