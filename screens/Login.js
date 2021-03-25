import React from "react";
import styles from "./styles";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { greaterThan } from "react-native-reanimated";
import { icons, COLORS, FONTS, SIZES } from "../constants";

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />

      <View style={styles.middle}>
        <View style={styles.ImgContainer}>
          <Image
            source={icons.logotipo}
            resizeMode="contain"
            style={{
              height: "50%",
              width: "50%",
            }}
          />
        </View>

        <View style={styles.formArea}>
          <Text style={[styles.textContainer, styles.signin]}>Login</Text>
          <View style={styles.mainForm}>
            <View style={styles.formItems}>
              <View style={styles.formInput}>
                <TextInput
                  style={styles.Input}
                  placeholder="E-mail"
                  autoCorrect={false}
                  onChangeText={() => {}}
                />
                <TextInput
                  style={styles.Input}
                  placeholder="Senha"
                  textContentType={"password"}
                  secureTextEntry={true}
                  autoCorrect={false}
                  onChangeText={() => {}}
                />
              </View>
              <View style={styles.Button}>
                <TouchableOpacity
                  style={styles.mainBtn}
                  onPress={() => navigation.navigate("Home")}
                >
                  <Text style={styles.btnText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.BtnResgistro}
                  onPress={() => navigation.navigate("Cadastro")}
                >
                  <Text style={styles.BtnTextResgistro}>Criar uma conta</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;