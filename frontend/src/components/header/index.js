import React from 'react';
import { View, Image } from 'react-native';

import styles from './style';
import nycopendata from '../../../assets/nycopendata.png';

export default function Header() {
    const { img } = styles;
    return (
        <View  >
            <Image source={nycopendata} style={img}/>   
        </View>
    );
}