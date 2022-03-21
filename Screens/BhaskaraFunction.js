import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

//Components
import MenuBtn from "../Components/MenuBtn";
//Styles Global
import { stylesGlobal } from "../stylesGlobal";

export default function App() {
  const [valA, setValA] = useState(null);
  const [valB, setValB] = useState(null);
  const [valC, setValC] = useState(null);
  const [raizA, setRaizA] = useState(null);
  const [raizB, setRaizB] = useState(null);
  const [delta, setDelta] = useState();
  const [showBhaskaraFunction, setShowBhaskaraFunction] = useState();

  const [showReturn, setShowReturn] = useState(false);

  //Calcular raizes
  const calcularRaizes = () => {
    //Tratar erro de NaN em valores raizA raizB
    const verifyNaN = () => {
      var verifyNaN;
      verifyNaN = isFinite(raizA);
      if (!verifyNaN) {
        setRaizA("∄");
      } else {
        setRaizA(raizA.toFixed(1));
      }
      verifyNaN = isFinite(raizB);
      if (!verifyNaN) {
        setRaizB("∄");
      } else {
        setRaizB(raizB.toFixed(1));
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
      if (!(valA && valB && valC)) {
        setShowReturn(false);
      }
      var raizA = (-valB + Math.sqrt(_delta)) / (2 * valA);
      var raizB = (-valB - Math.sqrt(_delta)) / (2 * valA);
      verifyNaN();
      setShowReturn(true);
      createShowBhaskaraFunction(valA, valB, valC);
      return;
    }
  };

  //Formatar texto de função matemática.
  const createShowBhaskaraFunction = (valA, valB, valC) => {
    var txtValA, txtValB, txtValC;
    txtValA = valA + "𝑥²";
    if (valA == 0) {
      txtValA = "";
    }
    if (valA == 1) {
      txtValA = "𝑥²";
    }
    if (valA == -1) {
      txtValA = "-𝑥²";
    }

    txtValB = valB + "𝑥";
    if (valB > 0) {
      txtValB = "+" + valB + "𝑥";
    }
    if (valA == 0 && valB > 0) {
      txtValB = valB + "𝑥";
    }
    if (valB == 1) {
      txtValB = "+𝑥";
    }
    if (valB == -1) {
      txtValB = "-𝑥";
    }
    if (valB == 0) {
      txtValB = "";
    }

    txtValC = valC;
    if (valC > 0) {
      txtValC = "+" + valC;
    }
    if (valA == 0 && valB == 0 && valC > 0) {
      txtValC = valC;
    }
    if (valC == 0) {
      txtValC = "";
    }

    var textReturn = (txtValA + txtValB + txtValC).toString();
    setShowBhaskaraFunction(textReturn);
  };

  return (
    <View style={stylesGlobal.container}>
      <View style={styles.localButton}>
        <MenuBtn />
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
        <TextInput
          style={[stylesGlobal.inputDefault, stylesGlobal.shadow]}
          keyboardType="numeric"
          placeholder="Valor de C"
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