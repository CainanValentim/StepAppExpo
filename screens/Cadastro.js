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

const Cadastro = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />

      <View style={styles.middleCadastro}>
        <View style={styles.formArea}>
          <Text style={[styles.textContainer, styles.signin]}>Cadastro</Text>
          <View style={styles.mainForm}>
            <View style={styles.formItemsCadastro}>
              <View style={styles.formInput}>
                <TextInput
                  style={styles.Input}
                  placeholder="Nome e sobrenome"
                  autoCorrect={false}
                  onChangeText={() => {}}
                />
                <TextInput
                  style={styles.Input}
                  placeholder="CPF"
                  autoCorrect={false}
                  keyboardType="numeric"
                  onChangeText={() => {}}
                  maxLength={11}
                />
                <TextInput
                  style={styles.Input}
                  placeholder="Data de nascimento"
                  autoCorrect={false}
                  keyboardType="numeric"
                  onChangeText={() => {}}
                />
                <TextInput
                  style={styles.Input}
                  placeholder="nome@email.com.br"
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
                <TextInput
                  style={styles.Input}
                  placeholder="Confirmar senha"
                  textContentType={"password"}
                  secureTextEntry={true}
                  autoCorrect={false}
                  onChangeText={() => {}}
                />
                <TextInput
                  style={styles.Input}
                  placeholder="Possui alguma doença?"
                  textContentType={"password"}
                  secureTextEntry={true}
                  autoCorrect={false}
                  onChangeText={() => {}}
                />
              </View>
              <View style={styles.ButtonCadastro}>
                <TouchableOpacity
                  style={styles.mainBtnCadastro}
                  onPress={() => navigation.navigate("Home")}
                >
                  <Text style={styles.btnTextCadastro}>Finalizar cadastro</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Cadastro;