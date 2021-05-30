import React, { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, View, Image, Text, FlatList } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import Icon from '@expo/vector-icons/FontAwesome5'
import { CategoryButton, ProductCard, Warning } from '../components'
import { useAuth } from '../contexts/auth'
import { useLoading } from '../contexts/loading'
import { useNavigation } from '@react-navigation/native'
import api from '../services/api'

import colors from '../utils/constants/colors.json'
import fonts from '../utils/constants/fonts.json'

import logo from '../assets/logo-shop-ligth-blue.png'

export default function Home() {
  const navigation = useNavigation()
  const { signed, user } = useAuth()
  const { startLoading, stopLoading, loading } = useLoading()

  const [filteredProducts, setFilteredProducts] = useState([])
  const [products, setProducts] = useState([])
  const categories = ["Todos", "Promoção", "Móveis", "Eletrônicos", "Periféricos"]
  const [categorySelected, setCategorySelected] = useState('Todos')

  const filterCategory = (categoryFilter) => {
    if (products.length) {
      if (categoryFilter === "Todos")
        setFilteredProducts(products)
      else if (categoryFilter === "Promoção")
        setFilteredProducts(products.filter(({ promotional_price }) => promotional_price))
      else
        setFilteredProducts(products.filter(({ category }) => category === categoryFilter))
    }
  }

  const getProducts = async () => {
    startLoading()

    await api
      .get('/products')
      .then(res => {
        setProducts(res.data)
        setFilteredProducts(res.data)
      })
      .catch(err => {
        console.error(err)
      })
      .finally(() => {
        stopLoading()
      })
  }

  useEffect(() => {
    getProducts()
  }, [signed])


  const emptyList = () => {
    return (
      <Warning
        title="Ops, nenhum produto encontrado!"
        description="Infelizmente esse produto está em falta no estoque!"
        icon={"frown"}
      />
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>Bem vindo</Text>
              <Text style={styles.title}>a VS STORE!</Text>
            </View>
            <Image source={logo} style={styles.image} />
          </View>

          <Text style={styles.greeting}>Olá,{user ? user.name : ''}</Text>
          <Text style={styles.subtitle}>Qual tipo de produto você está procurando?</Text>
        </View>

        <View>
          <FlatList
            data={categories}
            keyExtractor={(category) => category}
            renderItem={({ item }) => (
              <CategoryButton
                title={item}
                active={item === categorySelected}
                onPress={() => {
                  filterCategory(item)
                  setCategorySelected(item)
                }}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryList}
          />
        </View>

        <View style={{ flex: 1 }}>
          <FlatList
            data={filteredProducts}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={!loading ? emptyList : <></>}
            renderItem={({ item }) => (
              <ProductCard
                data={item}
                wish={false}
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
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    marginTop: getStatusBarHeight(),
  },

  image: {
    width: 90,
    height: 90,
    marginRight: "8%",
  },

  title: {
    fontSize: 28,
    fontFamily: fonts.text,
    color: colors['light-blue'],
    lineHeight: 36,
  },

  greeting: {
    fontSize: 20,
    color: colors['light-blue'],
    fontFamily: fonts.text
  },

  subtitle: {
    fontFamily: fonts.text,
    fontSize: 16,
    lineHeight: 18,
    color: colors.h2,
  },

  categoryList: {
    height: 40,
    justifyContent: 'flex-start',
    paddingBottom: 5,
    marginLeft: 32,
    paddingRight: 32,
    marginVertical: 20,
  },

})
