import React from 'react';
import Table from '../../components/table';
import Gallery from '../details/gallery';
import {View} from 'react-native';


export default function Details({navigation, route}) {
  const treeBody = route.params;
  const callbackNav = () => {
    navigation.goBack();
  }
  return (
    <View>
      <Table header={[]} body={treeBody} /> 
       <Gallery/> 
    </View>
  );
}






