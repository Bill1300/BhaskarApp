import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'

import BhaskaraFunction from './Screens/BhaskaraFunction'
import MathFunction from './Screens/MathFunction'
import FractionFunction from './Screens/FractionFunction'

const Stack = createStackNavigator()

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='BhaskaraFunction'>
        <Stack.Screen name='BhaskaraFunction' component={BhaskaraFunction} options={{headerShown: false}}/>
        <Stack.Screen name='MathFunction' component={MathFunction} options={{headerShown: false}}/>
        <Stack.Screen name='FractionFunction' component={FractionFunction} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
