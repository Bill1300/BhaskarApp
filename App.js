import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'

import BhaskaraFunction from './Screens/BhaskaraFunction'
import MathFunction from './Screens/MathFunction' 

const Stack = createStackNavigator()

function BhaskaraFunctionScreen({navigation}){
  return <BhaskaraFunction/>
}

function MathFunctionScreen({navigation}){
  return <MathFunction/>
}

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='BhaskarAppMathFunctionScreen'>
        <Stack.Screen name='BhaskarAppHome' component={BhaskaraFunctionScreen} options={{headerShown: false}}/>
        <Stack.Screen name='BhaskarAppMathFunctionScreen' component={MathFunctionScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
