import React from 'react'
import { View, StyleSheet, Modal } from 'react-native'
import ProgressBar from 'react-native-progress/Bar'

import colors from '../utils/constants/colors.json'

export default function Loader({ loading }) {
  return (
    <Modal visible={loading} transparent={true}>
      <View style={styles.loadingContainer}>
        <ProgressBar
          width={null}
          indeterminate={true}
          color={colors['dark-blue']}
          borderWidth={0}
          height={5}
          unfilledColor="rgba(5, 101, 252, 0.3)"
        />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  loadingContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    width: '100%',
    height: '100%'
  }
})