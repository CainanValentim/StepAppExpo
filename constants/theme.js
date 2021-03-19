import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  // base de cores
  primary: "#070D2D", //Roxo
  secondary: "#FE5430", //Laranja

  //cores
  black: "#1A1B1C", //Quase-Preto
  white: "#FFFFFF", // Branco Total
  lightGray: "#E0E0E0", //O cinza para algumas palavras
  borderCar: "#35334E", //Borda dos carrossel
  gray: "#BEC1D2", //Cinza-Claro + Azul-Escuro
  blue: "#42B0FF", //Azul mais claro
  darkGray: "#898C95", //Cinza-Escuro + Azul-Escuro
};

export const SIZES = {
  // Global Sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // Font Sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,

  //Dimensões do App
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: "Roboto-Black",
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
  body1: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;