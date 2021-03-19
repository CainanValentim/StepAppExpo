import { StyleSheet } from "react-native";
import { icons, COLORS, FONTS, SIZES } from "../constants";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: COLORS.primary,
  },
  container2: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 30 : 0,
    backgroundColor: COLORS.primary,
  },
  container3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  middle: {
    width: "100%",
    height: "100%",
    flex: 1,
    position: "absolute",
    zIndex: 2,
    backgroundColor: "transparent",
    paddingLeft: 26.3,
    paddingRight: 26.3,
  },
  middleCadastro: {
    width: "100%",
    height: "100%",
    flex: 1,
    position: "absolute",
    top: "-15%",
    zIndex: 2,
    backgroundColor: "transparent",
    paddingLeft: 26.3,
    paddingRight: 26.3,
  },
  textContainer: {
    color: "#FCFDFF",
    fontSize: 24,
    marginBottom: 30,
    position: "relative",
    top: "20%",
    alignSelf: "center",
  },
  textmaisum: {
    color: COLORS.secondary,
    fontSize: 40,
    fontWeight: 'bold',
  },
  ImgContainer: {
    marginBottom: -550,
    top: "-5%",
    alignItems: "center",
  },
  formArea: {
    alignSelf: "center",
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 5,
    top: "20%",
    paddingBottom: 40,
  },
  signin: {
    top: 0,
    color: COLORS.primary,
    marginTop: 15,
    fontWeight: "bold",
  },

  formItems: {
    marginTop: 15,
  },
  formItemsCadastro: {
    marginTop: -5,
  },
  formInput: {
    alignItems: "center",
  },
  Input: {
    width: "85%",
    marginBottom: 15,
    fontSize: 20,
    borderColor: "#CDCDCD",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },

  Button: {
    padding: 29,
  },
  mainBtn: {
    backgroundColor: COLORS.secondary,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  btnText: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold",
  },
  BtnResgistro: {
    marginTop: 15,
    alignSelf: "flex-end",
  },
  BtnTextResgistro: {
    color: "#000000",
    fontWeight: "bold",
  },
  ButtonCadastro: {
    padding: 29,
    paddingBottom: 0,
  },
  mainBtnCadastro: {
    backgroundColor: COLORS.secondary,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  btnTextCadastro: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default styles;