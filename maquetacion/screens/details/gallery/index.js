import React from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'

import { container, text, buttonCamera } from './style';
import { cameraButton } from '../../../assets/camera.png';
import { gallery } from '../../../assets/sinimagen.png';


export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera is required');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    return (
      <View style={container}>
        <Text style={text} > Photos Gallery</Text>
        <Image source={gallery}> </Image>
        <TouchableOpacity onPress={openImagePickerAsync}>
          <Button style={buttonCamera} source={cameraButton}/>
        </TouchableOpacity>
      </View>
    )
  }
}