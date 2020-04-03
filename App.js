import * as React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { MaterialCommunityIcons } from '@expo/vector-icons'

function HomeScreen () {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>

    </View>
  )
}

function SettingsScreen () {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  )
}

const tabOption = {
  activeTintColor: 'blue',
  inactiveTintColor: 'gray'
}
const Tab = createBottomTabNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={tabOption}
      >
        <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={{ tabBarIcon: ({ color }) => (<MaterialCommunityIcons name='home' color={color} />) }}
        />
        <Tab.Screen
          name='Settings'
          component={SettingsScreen}
          options={{ tabBarIcon: ({ color }) => (<MaterialCommunityIcons name='settings' color={color} />) }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
