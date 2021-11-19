
import React from 'react';
import {  View, Image } from 'react-native';
import nycopendata from '../../assets/nycopendata.png'
import styles from './styles'


export default function HeaderHome() {
  return (
   <View>
       <Image source={nycopendata} style={styles.img}></Image>
   </View>
  );
}

