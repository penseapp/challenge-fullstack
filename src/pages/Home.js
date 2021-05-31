import React, { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, View, Image, Text, FlatList, TouchableOpacity } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { ProductCard, Warning, ProductFilter, Input } from '../components'
import { useAuth } from '../contexts/auth'
import { useLoading } from '../contexts/loading'
import { useNavigation } from '@react-navigation/native'
import Icon from '@expo/vector-icons/FontAwesome5'
import api from '../services/api'
import { compareObjects } from '../utils'

import colors from '../utils/constants/colors.json'
import fonts from '../utils/constants/fonts.json'

import logo from '../assets/logo-shop-ligth-blue.png'

export default function Home() {
  const navigation = useNavigation()
  const { signed, user } = useAuth()
  const { startLoading, stopLoading, loading } = useLoading()

  const [searchTxt, setSearchTxt] = useState('')
  const [filterOpen, setFilterOpen] = useState(false)
  const [refresh, setRefresh] = useState(false)
  const [productsList, setProductsList] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  const filterCategory = (categoryOption) => {
    if (productsList.length) {
      if (categoryOption === "Todos")
        setFilteredProducts(productsList)
      else if (categoryOption === "Promoção")
        setFilteredProducts(productsList.filter(({ promotional_price }) => promotional_price))
      else if (categoryOption === "Disponiveis")
        setFilteredProducts(productsList.filter(({ status_flag }) => status_flag === 'Disponível'))
      else
        setFilteredProducts(productsList.filter(({ category }) => category === categoryOption))
    }
  }

  const orderList = (sortOption) => {
    if (filteredProducts.length) {
      if (sortOption === 'Normal') getProducts()
      else if (sortOption === 'Name') {
        const byName = filteredProducts.sort((a, b) => compareObjects(a, b, 'name'))
        setFilteredProducts(byName)
      }
      else if (sortOption === 'Price') {
        const byPrice = filteredProducts.sort((a, b) => a.price - b.price)
        setFilteredProducts(byPrice)
      }
    }
  }

  const searchProduct = (search) => {
    setSearchTxt(search)
    let searchList

    if (productsList.length) {
      searchList = productsList.filter(({ name, description }) => {
        if (description) return name.toLowerCase().includes(search) || description.toLowerCase().includes(search)

        return name.toLowerCase().includes(search)
      })
      setFilteredProducts(searchList)
    }
  }

  const getProducts = async () => {
    startLoading()

    await api
      .get('/products')
      .then(res => {
        setProductsList(res.data)
        setFilteredProducts(res.data)
        filterCategory("Todos")
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

        <View style={styles.filterContainer}>
          <View style={{ maxWidth: '90%' }}>
            <Input
              placeholder={'Pesquise por algum produto'}
              prefixIcon={'search'}
              value={searchTxt}
              onChangeText={value => searchProduct(value.toLowerCase())}
            />
          </View>

          <TouchableOpacity style={styles.filterButton} onPress={() => setFilterOpen(true)}>
            <Icon name="filter" size={20} color={colors['light-blue']} />
          </TouchableOpacity>
        </View>

        <ProductFilter
          isOpen={filterOpen}
          toggle={() => setFilterOpen(false)}
          applyFilters={({ sortOption, categoryOption }) => {
            setFilterOpen(false)
            if (categoryOption) filterCategory(categoryOption)
            if (sortOption) orderList(sortOption)
          }}
        />

        <View style={{ flex: 1 }}>
          <FlatList
            data={filteredProducts}
            keyExtractor={(item) => item.id}
            onRefresh={() => {
              setRefresh(true)
              getProducts()
            }}
            refreshing={refresh}
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
    paddingVertical: 5,
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
    lineHeight: 34,
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

  filterContainer: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  filterButton: {
    marginTop: 10,
    marginLeft: 5,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

})
