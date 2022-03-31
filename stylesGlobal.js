import { StyleSheet } from "react-native";

const _orange = "#ff6600";
const _gray = "#333";

export const stylesGlobal = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: _gray,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.8,
    shadowRadius: 9,
    elevation: 10,
  },
  inputDefault: {
    height: 40,
    width: 240,
    padding: 8,
    margin: 6,
    backgroundColor: "#fff",
    borderRadius: 6,
  },
  buttonDefault: {
    backgroundColor: _orange,
    height: 40,
    width: 240,
    paddingVertical: 4,
    margin: 6,
    textShadowColor: "#000",
    borderRadius: 6,
  },
  buttonDefaultText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    textTransform: "uppercase",
  },
});
