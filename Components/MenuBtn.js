import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Keyboard } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useRoute } from "@react-navigation/native";
//Styles Global
import { stylesGlobal } from "../stylesGlobal";

export default function MenuBtn({ navigation }) {
  const [menuBtn, setMenuBtn] = useState(false);
  const route = useRoute();

  const openMenu = () => {
    if (menuBtn) {
      setMenuBtn(false);
    } else {
      setMenuBtn(true);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.menuBtnGeneral, stylesGlobal.shadow]}
        onPress={() => openMenu()}
      >
        <Icon name="menu" size={35} color="#fff" />
      </TouchableOpacity>
      {menuBtn && (
        <View>
          {route.name != "BhaskaraFunction" && (
            <View style={[styles.subViewBtnBack, styles.iconBack]}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="chevron-left" size={35} color="#fff" />
              </TouchableOpacity>
            </View>
          )}
          <View style={[styles.subViewBtnFunc, styles.icons]}>
            <TouchableOpacity
              onPress={() => navigation.navigate("CalculatorFunction")}
            >
              <Icon name="calculator-variant" size={40} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("MathFunction")}
            >
              <Icon name="function-variant" size={40} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  menuBtnGeneral: {
    backgroundColor: "#ff6600",
    alignItems: "center",
    height: 60,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  subViewBtnFunc: {
    backgroundColor: "#fff",
    position: "absolute",
    flexDirection: "row",
    height: 60,
    width: 180,
    right: 40,
    bottom: -6,
    paddingVertical: 4,
    margin: 6,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  icons: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 1,
  },

  subViewBtnBack: {
    backgroundColor: "#ff6600",
    position: "absolute",
    flexDirection: "row",
    height: 60,
    width: 50,
    right: 205,
    bottom: -6,
    paddingVertical: 4,
    margin: 6,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  iconBack: {
    alignItems: "center",
    flex: 1,
  },
});
