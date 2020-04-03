import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './src/pages/HomeScreen'
import ViewScreen from './src/pages/ViewScreen'

const Stack = createStackNavigator()

export default function App () {
  const headerHome = {
    title: 'Lottie Gallery',
    headerStyle: {
      backgroundColor: '#00D1C1'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily: 'Roboto'
    }
  }

  const headerView = {
    title: 'Lottie Gallery',
    headerStyle: {
      backgroundColor: '#00D1C1'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily: 'Roboto'
    }

  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='home' component={HomeScreen} options={headerHome} />
        <Stack.Screen name='view' component={ViewScreen} options={headerView} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
