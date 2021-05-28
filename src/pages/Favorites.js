import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, View } from 'react-native'
import { Warning } from '../components'

export default function Favorites() {
  const [favorites, setFavorites] = useState([])

  if (!favorites.length) {
    return <Warning
      icon={"heart-broken"}
      title={"Você ainda não possui produtos favoritos"}
      description={"Vá para tela principal para visualizar os produtos e favoritá-los!"}
    />
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.content}>

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    width: '100%',
  },

})
