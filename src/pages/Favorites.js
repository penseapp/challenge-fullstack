import React, { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, View, Image, Text, FlatList } from 'react-native'
import { ProductCard, Warning } from '../components'
import { useLoading } from '../contexts/loading'
import { useNavigation } from '@react-navigation/native'

import colors from '../utils/constants/colors.json'
import fonts from '../utils/constants/fonts.json'

export default function Favorites() {
  const navigation = useNavigation()
  const [favorites, setFavorites] = useState([])

  if (!favorites.length) {
    return <Warning
      isBtnVisible={true}
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
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Favoritos</Text>
        </View>

        <View style={{ flex: 1 }}>
          <FlatList
            data={favorites}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ProductCard
                data={item}
                onPress={() => navigation.navigate('ProductDetails', { product_id: item.id })}
              />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.productList}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
  },

  headerContainer: {
    width: '100%',
  },


  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 35,
    width: "100%",
  },

  headerTitle: {
    fontSize: 25,
    fontFamily: fonts.text,
    color: colors.h1,
    opacity: 0.6,
    textAlign: 'center',
    alignSelf: 'center'
  },

})

