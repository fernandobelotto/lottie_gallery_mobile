import React from 'react'
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native'

import AnimationItem from '../components/AnimationItem'

const HomeScreen = ({ navigation }) => {
  const list = [1]

  return (
    <>
      <View>
        <FlatList
          data={list}
          keyExtractor={(i) => i.item}
          renderItem={(i) => {
            return (
              <TouchableOpacity onPress={() => { navigation.navigate('view', { id: i.index }) }}>
                <AnimationItem />
              </TouchableOpacity>
            )
          }}
        />
      </View>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
