import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AnimationItem = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>#1 Cadastro realizado com sucesso</Text>
    </View>
  )
}

export default AnimationItem

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#00A699',
    margin: 15,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row'
  },
  text: {
    alignSelf: 'center',
    marginLeft: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  }
})
