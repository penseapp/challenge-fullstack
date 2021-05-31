import React from 'react'
import { StyleSheet, Text, Image, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { formatCurrency } from '../utils'

import colors from '../utils/constants/colors.json'

export default function ProductCard({ data, wish, ...rest }) {
  return (
    <RectButton
      style={styles.container}
      {...rest}
    >
      <Image
        source={{ uri: data.image_url }}
        resizeMode="cover"
        style={styles.images}
      />

      <View style={styles.infoContainer}>
        <View style={styles.infoHeader}>
          <Text style={styles.name}>{data.name}</Text>
        </View>

        <View style={styles.infoHeader}>
          <Text style={[styles.statusFlag,
          { color: data.status_flag === 'Disponível' ? 'green' : colors.danger }
          ]}
          >{data.status_flag}</Text>
          <Text style={styles.price}>{formatCurrency(data.price)}</Text>
        </View>
      </View>


    </RectButton>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    maxWidth: '100%',
    backgroundColor: colors['light-secondary'],
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12,
  },

  images: {
    width: 130,
    height: 130
  },

  infoContainer: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderTopColor: colors.p,
    borderTopWidth: 1
  },

  infoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  name: {
    color: colors['dark-blue'],
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '600',
  },

  statusFlag: {
    alignSelf: 'flex-end',
    paddingTop: 12,
    fontSize: 14,
    fontWeight: '600',
  },

  price: {
    alignSelf: 'flex-end',
    paddingTop: 12,
    fontSize: 16,
    fontWeight: '600',
    color: colors.h1
  },

})
