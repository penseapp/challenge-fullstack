import React, { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, View, Image, Text, FlatList } from 'react-native'
import { ProductCard, Warning } from '../components'
import { useAuth } from '../contexts/auth'
import { useLoading } from '../contexts/loading'
import { useNavigation } from '@react-navigation/native'
import api from '../services/api'

import colors from '../utils/constants/colors.json'
import fonts from '../utils/constants/fonts.json'

export default function Favorites() {
  const navigation = useNavigation()
  const { user, signed } = useAuth()
  const { startLoading, stopLoading, loading } = useLoading()

  const [favorites, setFavorites] = useState([])
  const [refresh, setRefresh] = useState(false)

  const getFavoritesProduct = async () => {
    startLoading()

    await api
      .get(`favorite/${user.id}`)
      .then(res => {
        setFavorites(res.data)
      })
      .catch(err => {
        console.error(err)
      })
      .finally(() => {
        stopLoading()
        setRefresh(false)
      })
  }

  useEffect(() => {
    if (signed)
      getFavoritesProduct()
  }, [signed])

  if (!favorites.length && !loading) {
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
            onRefresh={() => {
              setRefresh(true)
              getFavoritesProduct()
            }}
            refreshing={refresh}
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

