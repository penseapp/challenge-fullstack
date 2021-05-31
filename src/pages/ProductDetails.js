import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import Icon from '@expo/vector-icons/FontAwesome5'
import { useNavigation, useRoute } from '@react-navigation/native'
import api from '../services/api'
import { formatCurrency } from '../utils'
import { useAuth } from '../contexts/auth'
import { useLoading } from '../contexts/loading'
import { Button } from '../components'

import colors from '../utils/constants/colors.json'
import fonts from '../utils/constants/fonts.json'

export default function ProductDetails() {
  const route = useRoute()
  const navigation = useNavigation()
  const { user } = useAuth()
  const { startLoading, stopLoading, loading } = useLoading()

  const { product_id } = route.params
  const [isFavorite, setIsFavorite] = useState(false)

  const [product, setProduct] = useState({})

  const getProduct = async () => {
    startLoading()

    await api
      .get(`product/${user.id}/${product_id}`)
      .then(res => {
        setProduct({
          ...res.data,
        })
        setIsFavorite(res.data.isFavorite)
      })
      .catch(err => {
        console.error(err)
      })
      .finally(() => {
        stopLoading()
      })
  }

  const addFavoriteProduct = async () => {
    startLoading()

    await api
      .post(`favorite/${user.id}/${product_id}`, null)
      .then(res => {
        setIsFavorite(true)
        navigation.reset({
          index: 0,
          routes: [{ name: 'Favoritos' }],
          key: 'Home'
        })
      })
      .catch(err => {
        console.error(err)
      })
      .finally(() => {
        stopLoading()
      })
  }

  const removeFavoriteProduct = async () => {
    startLoading()

    await api
      .delete(`favorite/${user.id}/${product_id}`, null, null)
      .then(res => {
        setIsFavorite(false)
        navigation.reset({
          index: 0,
          routes: [{ name: 'Favoritos' }],
          key: 'Home'
        })
      })
      .catch(err => {
        console.error(err)
      })
      .finally(() => {
        stopLoading()
      })
  }

  useEffect(() => {
    if (product_id) {
      getProduct()
    }
  }, [product_id])

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollListContainer}
      alwaysBounceVertical={false}
    >
      <View style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity
            style={styles.goBack}
            onPress={() => navigation.goBack()}
          >
            <Icon name={'arrow-left'} size={20} color={colors.h1} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Detalhes do Produto</Text>
        </View>

        {!loading &&
          <View style={styles.productInfo}>
            <Image
              source={{ uri: product.image_url }}
              resizeMode="cover"
              style={styles.images}
            />

            {isFavorite && <View style={styles.wishIcon}>
              <Icon
                name="star"
                solid={isFavorite}
                size={28}
                color={colors['light-blue']}
              />
            </View>}

            <Text style={styles.productName} numberOfLines={2}>
              {product.name}
            </Text>

            <Text style={styles.productAbout} numberOfLines={10}>
              {product.description}
            </Text>

            <View style={styles.productSubInfos}>
              <Text style={styles.label}>Categoria:</Text>
              <Text style={styles.productData} >
                {product.category}
              </Text>
            </View>

            <View style={styles.productSubInfos}>
              <Text style={styles.label}>Status:</Text>
              <Text style={styles.productData} >
                {product.status_flag}
              </Text>
            </View>

            <View style={styles.productSubInfos}>
              <Text style={[styles.label, { fontSize: 20 }]}>Preço:</Text>
              <Text style={styles.price} >
                {formatCurrency(product.price)}
              </Text>
            </View>

            {product.promotional_price && <View style={styles.productSubInfos}>
              <Text style={[styles.label, { fontSize: 20 }]}>Preço promocional:</Text>
              <Text style={styles.promo} >
                {formatCurrency(product.promotional_price)}
              </Text>
            </View>}

            {product.promotional_price && <View style={styles.productSubInfos}>
              <Text style={styles.label}>Desconto:</Text>
              <Text style={styles.productData} >
                {formatCurrency(product.price - product.promotional_price)}
              </Text>
            </View>}

            {isFavorite
              ? (
                <Button
                  title={"Remover dos Favoritos"}
                  onPress={() => removeFavoriteProduct()}
                />
              )
              : (
                <Button
                  title={"Adicionar em Favoritos"}
                  onPress={() => addFavoriteProduct()}
                />
              )
            }


          </View>
        }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollListContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    backgroundColor: colors['light-secondary']
  },

  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors['light-secondary'],
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35,
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

  goBack: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    position: 'absolute',
    left: 25
  },

  productInfo: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 18,
    alignItems: 'center',
    backgroundColor: colors['light-secondary']
  },

  images: {
    width: 200,
    height: 200
  },

  wishIcon: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-start',
    position: 'absolute',
    right: 30,
  },

  productName: {
    fontFamily: fonts.text,
    fontSize: 24,
    color: colors['light-blue'],
    marginTop: 15,
  },

  productAbout: {
    textAlign: 'justify',
    color: colors.h1,
    fontSize: 15,
    marginTop: 8
  },

  productSubInfos: {
    marginTop: 8,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  label: {
    fontSize: 20,
    fontFamily: fonts.text,
    color: colors['dark-blue'],
    alignSelf: 'center'
  },

  productData: {
    color: colors.h1,
    fontSize: 15,
    paddingLeft: 8
  },

  price: {
    color: 'green',
    fontSize: 17,
    fontWeight: '600',
    paddingLeft: 8
  },

  promo: {
    color: colors.danger,
    fontSize: 17,
    fontWeight: '600',
    paddingLeft: 8
  },

});
