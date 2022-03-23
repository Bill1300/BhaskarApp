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
//Styles global
import { stylesGlobal } from "../stylesGlobal";

export default function MathFunction({ navigation }) {
  const [valA, setValA] = useState(null);
  const [valB, setValB] = useState(null);
  const [answer, setAnswer] = useState();
  const [showBhaskaraFunction, setShowBhaskaraFunction] = useState();

  //Funcao matematica apresentada ao usuario
  const [showReturn, setShowReturn] = useState(false);

  //Referencias de componentes de entrada
  const ref_input1 = useRef();
  const ref_input2 = useRef();

  //Calcular raizes
  const calcularFuncao = () => {
    //Tratar erro de NaN em valores raizA raizB
    const verifyNaN = (_answer) => {
      let verifyNaN;
      verifyNaN = isFinite(_answer);
      if (!verifyNaN) {
        setAnswer("∄");
      } else {
        if (Number.isSafeInteger(_answer)) {
          parseInt(_answer);
          setAnswer(_answer);
        } else {
          setAnswer(_answer.toFixed(1));
        }
      }
    };

    if (valA && valB) {
      let _answer = Number(valA) + Number(valB);
      setAnswer(_answer);
      verifyNaN(_answer);
      setShowReturn(true);
      createShowBhaskaraFunction(0, valA, valB);
      return;
    }
  };

  //Formatar texto de função matemática.
  const createShowBhaskaraFunction = (valA, valB, valC) => {
    let txtValA, txtValB, txtValC;
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

    let textReturn = (txtValA + txtValB + txtValC).toString();
    setShowBhaskaraFunction(textReturn);
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
      <Text style={styles.subtitle}>Calculadora de funções</Text>
      <View>
        <TextInput
          style={[stylesGlobal.inputDefault, stylesGlobal.shadow]}
          ref={ref_input1}
          keyboardType="numeric"
          maxLength={20}
          returnKeyType="next"
          onSubmitEditing={() => ref_input2.current.focus()}
          placeholder="Valor de A"
          placeholderTextColor="#7e7e7e"
          onChangeText={(val) => setValA(val)}
        />
        <TextInput
          style={[stylesGlobal.inputDefault, stylesGlobal.shadow]}
          ref={ref_input2}
          keyboardType="numeric"
          maxLength={20}
          returnKeyType="next"
          onSubmitEditing={() => calcularFuncao()}
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
              <Text style={styles.textNameReturn}>Resultado</Text>
              <Text style={[styles.textValueReturn, stylesGlobal.shadow]}>
                {answer}
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
