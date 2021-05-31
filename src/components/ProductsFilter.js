import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
  Text,
  FlatList
} from 'react-native'
import Icon from '@expo/vector-icons/FontAwesome5'
import Input from './Input'
import CategoryButton from './CategoryButton'
import Button from './Button'

import colors from '../utils/constants/colors.json'
import fonts from '../utils/constants/fonts.json'

export default function ProductFilter({ isOpen, toggle, applyFilters }) {
  const [options, setOptions] = useState({
    categoryOption: null,
    sortOption: null
  })
  const categories = ["Todos", "Promoção", "Móveis", "Eletrônicos", "Periféricos", "Disponiveis"]

  const onChange = (type, value) => {
    setOptions({ ...options, [type]: value })
  }

  useEffect(() => {
    setOptions({
      categoryOption: null,
      sortOption: null
    })
  }, [isOpen])

  if (!isOpen) {
    return null
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
    >
      <View style={styles.modalContainer}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Filtros</Text>

          <TouchableOpacity style={styles.closeBtn} onPress={toggle}>
            <Icon name="times" size={20} color={colors['light-secondary']} />
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <Text style={[styles.subtitle, { marginTop: 12 }]}>Procurar por categoria:</Text>
          <View>
            <FlatList
              data={categories}
              keyExtractor={(category) => category}
              renderItem={({ item }) => (
                <CategoryButton
                  title={item}
                  active={item === options.categoryOption}
                  onPress={() => {
                    onChange('categoryOption', item)
                  }}
                />
              )}
              showsVerticalScrollIndicator={false}
              numColumns={3}
              contentContainerStyle={styles.categoryList}
            />
          </View>

          <Text style={[styles.subtitle, { marginVertical: 16 }]}>Ordernar listar de produtos:</Text>
          <View
            style={[styles.optionContainer, { justifyContent: 'flex-start', marginLeft: 32, }]}
          >
            <TouchableOpacity
              onPress={() => {
                onChange('sortOption', 'Normal')
              }}
              style={[styles.optionButton, options.sortOption === "Normal" ? styles.optionSelected : {}
              ]}>
              <Text
                style={[styles.optionButtonText, options.sortOption === "Normal" ? styles.optionSelectedText : {}
                ]}>
                Normal
            </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                onChange('sortOption', 'Name')
              }}
              style={[styles.optionButton, options.sortOption === "Name" ? styles.optionSelected : {}
              ]}>
              <Text
                style={[styles.optionButtonText, options.sortOption === "Name" ? styles.optionSelectedText : {}
                ]}>
                Por nome
            </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                onChange('sortOption', 'Price')
              }}
              style={[styles.optionButton, options.sortOption === "Price" ? styles.optionSelected : {}
              ]}>
              <Text
                style={[styles.optionButtonText, options.sortOption === "Price" ? styles.optionSelectedText : {}
                ]}>
                Por preço
            </Text>
            </TouchableOpacity>
          </View>

          <Button
            title={"Filtrar"}
            onPress={() => {
              applyFilters(options)
              toggle()
            }}
          />
        </View>

      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: colors['light-blue'],
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },

  headerTitle: {
    fontSize: 20,
    textAlign: 'center',
    alignSelf: 'center',
    color: colors['light-secondary']
  },

  closeBtn: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    position: 'absolute',
    right: 10
  },

  container: {
    flex: 1,
    backgroundColor: colors['light-primary'],
    padding: 20
  },

  subtitle: {
    fontFamily: fonts.text,
    fontSize: 16,
    lineHeight: 18,
    color: colors['dark-blue'],
  },

  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  optionButton: {
    backgroundColor: colors['light-secondary'],
    borderRadius: 12,
    height: 40,
    minWidth: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    padding: 12
  },

  optionSelected: {
    backgroundColor: colors['dark-blue']
  },

  optionSelectedText: {
    fontFamily: fonts.text,
    color: colors['light-secondary']
  },

  optionButtonText: {
    fontFamily: fonts.text,
    color: colors['light-blue'],
    fontSize: 13
  },

  categoryList: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
