import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

//Components
import MenuBtn from "../Components/MenuBtn";
//AuxiliarFunctions
import { createShowFunctionMath } from "../AuxiliarFunctions";
//Styles global
import { stylesGlobal } from "../stylesGlobal";

export default function MathFunction({ navigation }) {
  const [valA, setValA] = useState(null);
  const [valB, setValB] = useState(null);
  const [valAns, setValAns] = useState(null);
  const [answer, setAnswer] = useState();
  const [showBhaskaraFunction, setShowBhaskaraFunction] = useState();

  const [operation, setOperation] = useState(null);

  //Funcao matematica apresentada ao usuario
  const [showReturn, setShowReturn] = useState(false);

  //Referencias de componentes de entrada
  const ref_input1 = useRef();
  const ref_input2 = useRef();
  const ref_input3 = useRef();

  const [btnSelected, setBtnSelected] = useState();
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);
  const [btn4, setBtn4] = useState(false);

  const operationBtn = (index) => {
    // Addition
    if (index == 1) {
      setBtnSelected(index);
      setBtn1(true);
      setBtn2(false);
      setBtn3(false);
      setBtn4(false);
    }
    // Subtraction
    if (index == 2) {
      setBtnSelected(index);
      setBtn1(false);
      setBtn2(true);
      setBtn3(false);
      setBtn4(false);
    }
    // Multiplication
    if (index == 3) {
      setBtnSelected(index);
      setBtn1(false);
      setBtn2(false);
      setBtn3(true);
      setBtn4(false);
    }
    // Division
    if (index == 4) {
      setBtnSelected(index);
      setBtn1(false);
      setBtn2(false);
      setBtn3(false);
      setBtn4(true);
    }
    setOperation(index);
  };

  //Calcular função
  const calcularFuncao = () => {
    if (valA && valA != 0 && valB && valAns && operation) {
      let _answer;
      if (operation == 1) {
        _answer = (Number(valAns) - Number(valB)) / Number(valA);
      }
      if (operation == 2) {
        _answer = (Number(valAns) + Number(valB)) / Number(valA);
      }
      if (operation == 3) {
        _answer = Number(valAns) / Number(valB) / Number(valA);
      }
      if (operation == 4) {
        _answer = (Number(valAns) * Number(valB)) / Number(valA);
      }
      if (isFinite(_answer)) {
        setAnswer(
          _answer
            .toFixed(4)
            .toString()
            .replace(/(\.0+|0+)$/, "")
            .replace(".", ",")
        );
      } else {
        setAnswer("Indefinido");
      }

      let textReturn = createShowFunctionMath(valA, valB, btnSelected);
      textReturn = textReturn + " = " + String(valAns);
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
      <Text style={styles.subtitle}>Calculadora de funções</Text>
      <View>
        <TextInput
          style={[stylesGlobal.inputDefault, stylesGlobal.shadow]}
          ref={ref_input1}
          keyboardType="numeric"
          maxLength={20}
          returnKeyType="next"
          onSubmitEditing={() => ref_input2.current.focus()}
          placeholder="Valor de A: A𝑥"
          placeholderTextColor="#7e7e7e"
          onChangeText={(val) => setValA(val)}
        />
        <View style={[styles.iconView, stylesGlobal.row]}>
          {/* Adição */}
          <TouchableOpacity
            style={[
              styles.iconTouch,
              stylesGlobal.shadow,
              { backgroundColor: btn1 ? "#fff" : "#ff6600" },
            ]}
            onPress={() => operationBtn(1)}
            key={1}
          >
            {btn1 ? (
              <Icon name="plus" size={40} color="#ff6600" />
            ) : (
              <Icon name="plus" size={40} color="#fff" />
            )}
          </TouchableOpacity>
          {/* Subtração */}
          <TouchableOpacity
            style={[
              styles.iconTouch,
              stylesGlobal.shadow,
              { backgroundColor: btn2 ? "#fff" : "#ff6600" },
            ]}
            onPress={() => operationBtn(2)}
            key={2}
          >
            {btn2 ? (
              <Icon name="minus" size={40} color="#ff6600" />
            ) : (
              <Icon name="minus" size={40} color="#fff" />
            )}
          </TouchableOpacity>
          {/* Multiplicacão */}
          <TouchableOpacity
            style={[
              styles.iconTouch,
              stylesGlobal.shadow,
              { backgroundColor: btn3 ? "#fff" : "#ff6600" },
            ]}
            onPress={() => operationBtn(3)}
            key={3}
          >
            {btn3 ? (
              <Icon name="close" size={40} color="#ff6600" />
            ) : (
              <Icon name="close" size={40} color="#fff" />
            )}
          </TouchableOpacity>
          {/* Divisão */}
          <TouchableOpacity
            style={[
              styles.iconTouch,
              stylesGlobal.shadow,
              { backgroundColor: btn4 ? "#fff" : "#ff6600" },
            ]}
            onPress={() => operationBtn(4)}
            key={4}
          >
            {btn4 ? (
              <Icon name="division" size={40} color="#ff6600" />
            ) : (
              <Icon name="division" size={40} color="#fff" />
            )}
          </TouchableOpacity>
        </View>
        <TextInput
          style={[stylesGlobal.inputDefault, stylesGlobal.shadow]}
          ref={ref_input2}
          keyboardType="numeric"
          maxLength={20}
          returnKeyType="next"
          onSubmitEditing={() => ref_input3.current.focus()}
          placeholder="Valor de B: B"
          placeholderTextColor="#7e7e7e"
          onChangeText={(val) => setValB(val)}
        />
        <TextInput
          style={[stylesGlobal.inputDefault, stylesGlobal.shadow]}
          ref={ref_input3}
          keyboardType="numeric"
          maxLength={20}
          returnKeyType="next"
          onSubmitEditing={() => calcularFuncao()}
          placeholder="Resultado"
          placeholderTextColor="#7e7e7e"
          onChangeText={(val) => setValAns(val)}
        />
        <View>
          <TouchableOpacity
            style={[stylesGlobal.buttonDefault, stylesGlobal.shadow]}
            onPress={() => calcularFuncao()}
          >
            <Text style={stylesGlobal.buttonDefaultText}>Calcular</Text>
          </TouchableOpacity>
        </View>
        {showReturn && operation ? (
          <View style={styles.viewReturn}>
            <View style={stylesGlobal.row}>
              <Text style={styles.textNameReturn}>Solução</Text>
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
        ) : (
          <View></View>
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
  iconView: {
    justifyContent: "space-between",
    padding: 2,
    marginHorizontal: 2,
  },
  iconTouch: {
    backgroundColor: "#ff6600",
    marginHorizontal: 4,
    padding: 4,
    borderRadius: 10,
  },
});
