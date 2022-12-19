import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

//Components
import MenuBtn from "../Components/MenuBtn";
//Styles global
import { stylesGlobal } from "../stylesGlobal";

export default function FractionFunction({ navigation }) {

  const [entradaNumerador1, setEntradaNumerador1] = useState(null);
  const [entradaDenominador1, setEntradaDenominador1] = useState(null);
  const [entradaNumerador2, setEntradaNumerador2] = useState(null);
  const [entradaDenominador2, setEntradaDenominador2] = useState(null);

  const [valorResultadoNumerador, setValorResultadoNumerador] = useState(null);
  const [valorResultadoDenominador, setValorResultadoDenominador] = useState(null);

  //Funcao matematica apresentada ao usuario
  const [mostrarResposta, setMostrarResposta] = useState(false);

  const refEntrada1 = useRef();
  const refEntrada2 = useRef();
  const refEntrada3 = useRef();
  const refEntrada4 = useRef();

  const [botaoSelecionado, setBotaoSelecionado] = useState();
  const [botao1, setBotao1] = useState(false);
  const [botao2, setBotao2] = useState(false);
  const [botao3, setBotao3] = useState(false);
  const [botao4, setBotao4] = useState(false);
  const [operacao, setOperacao] = useState(null);
  const operacaoBtn = (index) => {
    // Addition
    if (index == 1) {
      setBotaoSelecionado(index);
      setBotao1(true);
      setBotao2(false);
      setBotao3(false);
      setBotao4(false);
    }
    // Subtraction
    if (index == 2) {
      setBotaoSelecionado(index);
      setBotao1(false);
      setBotao2(true);
      setBotao3(false);
      setBotao4(false);
    }
    // Multiplication
    if (index == 3) {
      setBotaoSelecionado(index);
      setBotao1(false);
      setBotao2(false);
      setBotao3(true);
      setBotao4(false);
    }
    // Division
    if (index == 4) {
      setBotaoSelecionado(index);
      setBotao1(false);
      setBotao2(false);
      setBotao3(false);
      setBotao4(true);
    }
    setOperacao(index);
  };

  const calcularFracao = () => {
    function calcularMMC(entradaDenominador1, entradaDenominador2) {
      var resto, x, y;
      x = entradaDenominador1;
      y = entradaDenominador2;
      while (resto !== 0) {
        resto = x % y;
        x = y;
        y = resto;
      }
      return (entradaDenominador1 * entradaDenominador2) / x;
    }
    function simplificarFracao(numerador, denominador) {
      for (var i = Math.max(numerador, denominador); i > 1; i--) {
        if ((numerador % i == 0) && (denominador % i == 0)) {
          numerador /= i;
          denominador /= i;
        }
      }
      return [numerador, denominador]
    }
    let simples
    if (operacao == 1) {
      if (entradaDenominador1 == entradaDenominador2) {
        let novoNumerador1 = entradaNumerador1 + entradaNumerador2
        simples = simplificarFracao(novoNumerador1, entradaDenominador1)
      } else {
        let novoDenominador1 = calcularMMC(entradaDenominador1, entradaDenominador2)
        let novoNumerador1 = (novoDenominador1 / entradaDenominador1) * entradaNumerador1
        let novoNumerador2 = (novoDenominador1 / entradaDenominador2) * entradaNumerador2
        novoNumerador1 = novoNumerador1 + novoNumerador2
        simples = simplificarFracao(novoNumerador1, novoDenominador1)
      }
    }
    if (operacao == 2) {
      if (entradaDenominador1 == entradaDenominador2) {
        let novoNumerador1 = entradaNumerador1 - entradaNumerador2
        simples = simplificarFracao(novoNumerador1, entradaDenominador1)
      } else {
        let novoDenominador1 = calcularMMC(entradaDenominador1, entradaDenominador2)
        let novoNumerador1 = (novoDenominador1 / entradaDenominador1) * entradaNumerador1
        let novoNumerador2 = (novoDenominador1 / entradaDenominador2) * entradaNumerador2
        novoNumerador1 = novoNumerador1 - novoNumerador2
        simples = simplificarFracao(novoNumerador1, novoDenominador1)
      }
    }
    if (operacao == 3) {
      let novoNumerador1 = entradaNumerador1 * entradaNumerador2
      let novoDenominador1 = entradaDenominador1 * entradaDenominador2
      simples = simplificarFracao(novoNumerador1, novoDenominador1)
    }
    if (operacao == 4) {
      if (entradaDenominador1 == entradaDenominador2) {
        let novoNumerador1 = entradaNumerador1
        let novoDenominador1 = entradaNumerador2
        simples = simplificarFracao(novoNumerador1, novoDenominador1)
      } else {
        let novoNumerador1 = entradaNumerador1 * entradaDenominador2
        let novoDenominador1 = entradaNumerador2 * entradaDenominador1
        simples = simplificarFracao(novoNumerador1, novoDenominador1)
      }
    }
    setValorResultadoNumerador(simples[0])
    setValorResultadoDenominador(simples[1])
    setMostrarResposta(true)
  }

  return (
    <View style={stylesGlobal.container}>
      <View style={styles.localBotao}>
        <MenuBtn navigation={navigation} />
      </View>
      <View style={stylesGlobal.row}>
        <Text style={[stylesGlobal.tituloApp, stylesGlobal.tituloCor1]}>Bhaskar</Text>
        <Text style={[stylesGlobal.tituloApp, stylesGlobal.tituloCor2]}>App</Text>
      </View>
      <Text style={stylesGlobal.subtitulo}>Calculadora de frações</Text>
      <View style={stylesGlobal.row}>
        <View style={styles.formaEntradaFracao}></View>
        <View style={styles.formaEntradaFracao}></View>
      </View>
      <View style={stylesGlobal.row}>
        <View>
          <TextInput
            style={[stylesGlobal.inputDefault, stylesGlobal.shadow, styles.entrada]}
            ref={refEntrada1}
            keyboardType="numeric"
            maxLength={4}
            returnKeyType="next"
            onSubmitEditing={() => refEntrada2.current.focus()}
            placeholderTextColor="#7e7e7e"
            onChangeText={(val) => setEntradaNumerador1(parseInt(val))}
          />
          <TextInput
            style={[stylesGlobal.inputDefault, stylesGlobal.shadow, styles.entrada]}
            ref={refEntrada2}
            keyboardType="numeric"
            maxLength={4}
            returnKeyType="next"
            onSubmitEditing={() => refEntrada3.current.focus()}
            placeholderTextColor="#7e7e7e"
            onChangeText={(val) => setEntradaDenominador1(parseInt(val))}
          />
        </View>
        <View>
        </View>
        <View>
          <TextInput
            style={[stylesGlobal.inputDefault, stylesGlobal.shadow, styles.entrada]}
            ref={refEntrada3}
            keyboardType="numeric"
            maxLength={20}
            returnKeyType="next"
            onSubmitEditing={() => refEntrada4.current.focus()}
            placeholderTextColor="#7e7e7e"
            onChangeText={(val) => setEntradaNumerador2(parseInt(val))}
          />
          <TextInput
            style={[stylesGlobal.inputDefault, stylesGlobal.shadow, styles.entrada]}
            ref={refEntrada4}
            keyboardType="numeric"
            maxLength={20}
            returnKeyType="next"
            placeholderTextColor="#7e7e7e"
            onChangeText={(val) => setEntradaDenominador2(parseInt(val))}
          />
        </View>
      </View>
      <View style={[styles.iconeView, stylesGlobal.row]}>
        {/* Adição */}
        <TouchableOpacity
          style={[
            styles.icone,
            stylesGlobal.shadow,
            { backgroundColor: botao1 ? "#fff" : "#ff6600" },
          ]}
          onPress={() => operacaoBtn(1)}
          key={1}
        >
          {botao1 ? (
            <Icon name="plus" size={40} color="#ff6600" />
          ) : (
            <Icon name="plus" size={40} color="#fff" />
          )}
        </TouchableOpacity>
        {/* Subtração */}
        <TouchableOpacity
          style={[
            styles.icone,
            stylesGlobal.shadow,
            { backgroundColor: botao2 ? "#fff" : "#ff6600" },
          ]}
          onPress={() => operacaoBtn(2)}
          key={2}
        >
          {botao2 ? (
            <Icon name="minus" size={40} color="#ff6600" />
          ) : (
            <Icon name="minus" size={40} color="#fff" />
          )}
        </TouchableOpacity>
        {/* Multiplicacão */}
        <TouchableOpacity
          style={[
            styles.icone,
            stylesGlobal.shadow,
            { backgroundColor: botao3 ? "#fff" : "#ff6600" },
          ]}
          onPress={() => operacaoBtn(3)}
          key={3}
        >
          {botao3 ? (
            <Icon name="close" size={40} color="#ff6600" />
          ) : (
            <Icon name="close" size={40} color="#fff" />
          )}
        </TouchableOpacity>
        {/* Divisão */}
        <TouchableOpacity
          style={[
            styles.icone,
            stylesGlobal.shadow,
            { backgroundColor: botao4 ? "#fff" : "#ff6600" },
          ]}
          onPress={() => operacaoBtn(4)}
          key={4}
        >
          {botao4 ? (
            <Icon name="division" size={40} color="#ff6600" />
          ) : (
            <Icon name="division" size={40} color="#fff" />
          )}
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={[stylesGlobal.buttonDefault, stylesGlobal.shadow]}
          onPress={() => calcularFracao()}
        >
          <Text style={stylesGlobal.buttonDefaultText}>Calcular</Text>
        </TouchableOpacity>
      </View>
      {mostrarResposta && (
        <View style={styles.resposta}>
          <View style={stylesGlobal.row}>
            <Text style={styles.textoNomeResposta}>Resultado</Text>
            <View>
              <View style={styles.valorNumero}>
                <Text style={[styles.textoValorResposta, styles.numeradorValue]}>{valorResultadoNumerador}</Text>
                <View style={styles.formaRespostaFracao}></View>
                <Text style={[styles.textoValorResposta, styles.valorDenominador]}>{valorResultadoDenominador}</Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>

  );
}

const styles = StyleSheet.create({
  localBotao: {
    position: "absolute",
    right: 20,
    bottom: 20,
  },
  entrada: {
    width: 90,
    height: 50,
    marginVertical: 10,
    marginHorizontal: 18,

  },
  formaEntradaFracao: {
    position: "relative",
    top: 73,
    backgroundColor: "#ff6600",
    width: 90,
    height: 6,
    borderRadius: 4,
    marginHorizontal: 18,
  },
  resposta: {
    marginTop: 20,
  },
  formaRespostaFracao: {
    backgroundColor: "#000",
    width: 96,
    height: 6,
    borderRadius: 4,
    marginVertical: 2,
    position: "absolute",
    top: 62,
    left: 17,
  },
  textoNomeResposta: {
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
    left: -40,
    zIndex: 0,
  },
  textoValorResposta: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    margin: 4,
    borderRadius: 5,
  },
  valorNumero: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "left",
    backgroundColor: "#fff",
    margin: 4,
    width: 130,
    height: 130,
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 5,
    position: "absolute",
    left: -100,
    zIndex: 0,
  },
  numeradorValue: {
    position: "absolute",
    top: 10,
    left: 20,
  },
  valorDenominador: {
    position: "absolute",
    top: 75,
    left: 20,
  },
  iconeView: {
    justifyContent: "space-between",
    padding: 2,
  },
  icone: {
    backgroundColor: "#ff6600",
    marginHorizontal: 4,
    padding: 4,
    borderRadius: 10,
  },
});
