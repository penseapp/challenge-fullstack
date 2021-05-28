import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, View, Image, Text, FlatList } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { CategoryButton, ProductCard } from '../components'

import colors from '../utils/constants/colors.json'
import fonts from '../utils/constants/fonts.json'

import logo from '../assets/logo-shop-ligth-blue.png'

export default function Home() {
  const [filteredProducts, setFilteredProducts] = useState([])
  const [category, setCategory] = useState(["Todos", "Móveis", "Eletrônicos", "Periféricos"])
  const [categorySelected, setCategorySelected] = useState('Todos')

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <View>
              <Text style={styles.greeting}>Olá,</Text>
              <Text style={styles.userName}>Vanessa</Text>
            </View>
            <Image source={logo} style={styles.image} />
          </View>

          <Text style={styles.title}>Bem vindo a VS STORE!</Text>
          <Text style={styles.subtitle}>Qual tipo de produto você está procurando?</Text>
        </View>

        <View>
          <FlatList
            data={category}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <CategoryButton
                title={item}
                active={item === categorySelected}
                onPress={() => setCategorySelected(item) }
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
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
    width: 85,
    height: 85,
  },

  greeting: {
    fontSize: 32,
    color: colors['light-blue'],
    fontFamily: fonts.text
  },

  userName: {
    fontSize: 32,
    fontFamily: fonts.text,
    color: colors['light-blue'],
    lineHeight: 40,
  },

  title: {
    fontSize: 22,
    color: colors['light-blue'],
    fontFamily: fonts.text,
    lineHeight: 22,
    marginTop: 10
  },

  subtitle: {
    fontFamily: fonts.text,
    fontSize: 16,
    lineHeight: 20,
    color: colors.h2,
  },

  productList: {
    height: 40,
    justifyContent: 'flex-start',
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32,
    paddingRight: 32
  },

})
