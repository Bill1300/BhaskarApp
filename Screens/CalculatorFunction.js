import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native'

//Components
import MenuBtn from '../Components/MenuBtn';
//Styles global
import { stylesGlobal } from '../stylesGlobal';

export default function CalculatorFunction({navigation}) {
  return (
    <View style={stylesGlobal.container}>
      <View style={styles.localButton}>
        <MenuBtn navigation={navigation}/>
      </View>
      <Text>Calculator</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  localButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
});
