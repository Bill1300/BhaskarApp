import React, { useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native"

//Components
import MenuBtn from "../Components/MenuBtn"
//Styles Global
import { stylesGlobal } from "../stylesGlobal"

function calcularFuncao(){
    alert('Testeee')
}

export default function MathFunction() {

  return (
    <View style={{flex: 1, backgroundColor: 'red',     alignItems: 'center', justifyContent: 'center'}}>
      <View style={styles.localButton}>
        <MenuBtn/>
      </View>
      <View style={stylesGlobal.row}>
        <Text style={[styles.title, styles.titleColor1]}>Bhaskar</Text>
        <Text style={[styles.title, styles.titleColor2]}>App</Text>
      </View>
      <Text style={styles.subtitle}>Calculadora de raízes</Text>
      <View>
        <TextInput
          style={[stylesGlobal.inputDefault, stylesGlobal.shadow]}
          keyboardType="numeric"
          placeholder="Valor de A"
          placeholderTextColor="#7e7e7e"
          onChangeText={(val) => setValA(val)}
        />
        <TextInput
          style={[stylesGlobal.inputDefault, stylesGlobal.shadow]}
          keyboardType="numeric"
          placeholder="Valor de B"
          placeholderTextColor="#7e7e7e"
          onChangeText={(val) => setValB(val)}
        />

        <View>
          <TouchableOpacity
            style={[stylesGlobal.buttonDefault, stylesGlobal.shadow]}
            onPress={() => calcularFuncao()}
          >
            <Text style={stylesGlobal.buttonDefaultText}>Calcular</Text>
          </TouchableOpacity>
        </View>
        {showReturn && (
          <View style={styles.viewReturn}>
            <View style={stylesGlobal.row}>
              <Text style={styles.textNameReturn}>Delta</Text>
              <Text style={[styles.textValueReturn, stylesGlobal.shadow]}>
                {delta}
              </Text>
            </View>
            <View style={[styles.bskView, stylesGlobal.shadow]}>
              <Text style={[styles.bskViewText, styles.shadowStyle]}>
                {showBhaskaraFunction}
              </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  localButton: {
    position: "absolute",
    right: 20,
    bottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    //fontFamily: 'DeliusSwashCaps_400Regular'
  },
  titleColor1: {
    color: "#fff",
  },
  titleColor2: {
    color: "#ff6600",
  },
  subtitle: {
    color: "#fff",
    marginBottom: 40,
  },
  viewReturn: {
    marginTop: 20,
  },
  textNameReturn: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "left",
    backgroundColor: "#ff6600",
    margin: 4,
    width: 160,
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 5,
    textTransform: "uppercase",
    left: 2,
  },
  textValueReturn: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#fff",
    margin: 4,
    width: 104,
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 5,
    position: "absolute",
    left: 136,
  },
  bskView: {
    backgroundColor: "#fff",
    height: 40,
    width: 240,
    paddingVertical: 4,
    margin: 6,
    borderRadius: 6,
  },
  bskViewText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    letterSpacing: 2,
  },
})
