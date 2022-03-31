import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

//Components
import MenuBtn from "../Components/MenuBtn";
//AuxiliarFunctions
import { createShowBhaskaraFunction } from "../AuxiliarFunctions";

//Styles global
import { stylesGlobal } from "../stylesGlobal";

export default function BhaskaraFunction({ navigation }) {
  const [valA, setValA] = useState(null);
  const [valB, setValB] = useState(null);
  const [valC, setValC] = useState(null);
  const [raizA, setRaizA] = useState(null);
  const [raizB, setRaizB] = useState(null);
  const [delta, setDelta] = useState();
  const [showBhaskaraFunction, setShowBhaskaraFunction] = useState();

  //Funcao matematica apresentada ao usuario
  const [showReturn, setShowReturn] = useState(false);

  //Referencias de componentes de entrada
  const ref_input1 = useRef();
  const ref_input2 = useRef();
  const ref_input3 = useRef();

  //Calcular raizes
  const calcularRaizes = () => {
    //Tratar erro de NaN em valores raizA raizB
    const verifyNaN = () => {
      var verifyNaN;
      verifyNaN = isFinite(raizA);
      if (!verifyNaN) {
        setRaizA("∄");
      } else {
        if (Number.isSafeInteger(raizA)) {
          parseInt(raizA);
          setRaizA(raizA);
        } else {
          setRaizA(raizA.toFixed(1));
        }
      }

      verifyNaN = isFinite(raizB);
      if (!verifyNaN) {
        setRaizB("∄");
      } else {
        if (Number.isSafeInteger(raizB)) {
          parseInt(raizB);
          setRaizB(raizB);
        } else {
          setRaizB(raizB.toFixed(1));
        }
      }

      verifyNaN = isFinite(_delta);
      if (!verifyNaN) {
        setDelta("∄");
      } else {
        setDelta(_delta);
      }
    };

    setValA(valA);
    setValB(valB);
    setValC(valC);

    if (valA && valB && valC) {
      var _delta = Math.pow(valB, 2) - 4 * valA * valC;
      var raizA = (-valB + Math.sqrt(_delta)) / (2 * valA);
      var raizB = (-valB - Math.sqrt(_delta)) / (2 * valA);
      verifyNaN();

      let textReturn = createShowBhaskaraFunction(valA, valB, valC);
      setShowBhaskaraFunction(textReturn);
      setShowReturn(true);
    }
  };

  return (
    <View style={stylesGlobal.container}>
      <View style={styles.localButton}>
        <MenuBtn navigation={navigation} />
      </View>
      <View style={stylesGlobal.row}>
        <Text style={[styles.title, styles.titleColor1]}>Bhaskar</Text>
        <Text style={[styles.title, styles.titleColor2]}>App</Text>
      </View>
      <Text style={styles.subtitle}>Calculadora de raízes</Text>
      <View>
        <TextInput
          style={[stylesGlobal.inputDefault, stylesGlobal.shadow]}
          ref={ref_input1}
          keyboardType="numeric"
          maxLength={20}
          returnKeyType="next"
          onSubmitEditing={() => ref_input2.current.focus()}
          placeholder="Valor de A: A𝑥²"
          placeholderTextColor="#7e7e7e"
          onChangeText={(val) => setValA(val)}
        />
        <TextInput
          style={[stylesGlobal.inputDefault, stylesGlobal.shadow]}
          ref={ref_input2}
          keyboardType="numeric"
          maxLength={20}
          returnKeyType="next"
          onSubmitEditing={() => ref_input3.current.focus()}
          placeholder="Valor de B: B𝑥"
          placeholderTextColor="#7e7e7e"
          onChangeText={(val) => setValB(val)}
        />
        <TextInput
          style={[stylesGlobal.inputDefault, stylesGlobal.shadow]}
          ref={ref_input3}
          keyboardType="numeric"
          maxLength={20}
          returnKeyType="next"
          onSubmitEditing={() => calcularRaizes()}
          placeholder="Valor de C: C"
          placeholderTextColor="#7e7e7e"
          onChangeText={(val) => setValC(val)}
        />
        <View>
          <TouchableOpacity
            style={[stylesGlobal.buttonDefault, stylesGlobal.shadow]}
            onPress={() => calcularRaizes()}
          >
            <Text style={stylesGlobal.buttonDefaultText}>Calcular</Text>
          </TouchableOpacity>
        </View>
        {showReturn && (
          <View style={styles.viewReturn}>
            <View style={stylesGlobal.row}>
              <Text style={styles.textNameReturn}>Coeficiente r'</Text>
              <Text style={[styles.textValueReturn, stylesGlobal.shadow]}>
                {raizA}
              </Text>
            </View>
            <View style={stylesGlobal.row}>
              <Text style={styles.textNameReturn}>Coeficiente r'</Text>
              <Text style={[styles.textValueReturn, stylesGlobal.shadow]}>
                {raizB}
              </Text>
            </View>
            <View style={stylesGlobal.row}>
              <Text style={styles.textNameReturn}>Delta</Text>
              <Text style={[styles.textValueReturn, stylesGlobal.shadow]}>
                {delta}
              </Text>
              {/* information-outline */}
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
  );
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
});
