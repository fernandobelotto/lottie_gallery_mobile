import React, { useRef } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import LottieView from 'lottie-react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const ViewScreen = ({ route }) => {
  const lottie = useRef()
  return (
    <View>
      <View style={styles.view}>
        <LottieView ref={lottie} source={require('./animation.json')} />
      </View>
      <View style={{ margin: 10, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => lottie.current.play()}>
          <MaterialCommunityIcons name='arrow-right-drop-circle' style={{ fontSize: 90, color: '#00D1C1' }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => lottie.current.reset()}>
          <MaterialCommunityIcons name='stop-circle' style={{ fontSize: 90, color: '#00D1C1' }} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ViewScreen

const styles = StyleSheet.create({
  view: {
    width: 350,
    height: 500,
    backgroundColor: '#E4E4E4',
    alignSelf: 'center',
    margin: 30,
    borderRadius: 20
  },
  text: {
    fontSize: 50
  }
})
