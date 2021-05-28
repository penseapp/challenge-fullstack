import React from 'react'
import { TouchableOpacity, Platform } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

export default function ImagePickerFunction({ onChange, children, ...props }) {
  const pickImage = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestCameraPermissionsAsync()
      if (status !== 'granted') {
        alert('Para prosseguir, é necessário permitir o acesso a câmera!')
      }
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 0.7
    })

    if (!result.cancelled) {
      const localUri = result.uri
      const filename = localUri.split('/').pop()

      const match = /\.(\w+)$/.exec(filename)
      const type = match ? `image/${match[1]}` : 'image'

      onChange({ uri: localUri, name: filename, type })
    }
  }

  return (
    <TouchableOpacity {...props} onPress={pickImage}>
      {children}
    </TouchableOpacity>
  )
}
