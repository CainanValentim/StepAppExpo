import React, { useState } from "react";
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
  Alert,
} from "react-native";
import firebase from "../firebase";
import { greaterThan } from "react-native-reanimated";
import { icons, COLORS, FONTS, SIZES } from "../constants";

const auth = firebase.auth();

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const fazerLogin = () => {
    navigation.navigate("Home");
  };

  const FazerLogin = async () => {
    if (email === "" || pwd === "") {
      Alert.alert("Erro", "Campo vazio", [
        { text: "Ok", onPress: () => console.log("Erro: Campo vazio") },
      ]);
    } else if (email.length < 11) {
      Alert.alert("Erro", "Email muito curto.", [
        { text: "Ok", onPress: () => console.log("Erro: Email Errado") },
      ]);
    } else if (pwd.length < 6) {
      Alert.alert("Erro", "Senha muito curta.", [
        { text: "Ok", onPress: () => console.log("Erro: Senha curta") },
      ]);
    } else {
      await auth
        .signInWithEmailAndPassword(email, pwd)
        .then(fazerLogin)
        .catch((error) => {
          if (error.code === "auth/invalid-email") {
            Alert.alert("Erro", "Email Inválido.", [
              { text: "Ok", onPress: () => console.log("Erro: Email Errado") },
            ]);
          } else if (error.code === "auth/user-not-found") {
            Alert.alert("Erro", "Email não encontrado.", [
              {
                text: "Ok",
                onPress: () => console.log("Erro: Email Inexistente"),
              },
            ]);
          } else if (error.code === "auth/wrong-password") {
            Alert.alert("Erro", "Senha Inválida.", [
              { text: "Ok", onPress: () => console.log("Erro: Senha Errada") },
            ]);
          } else {
            Alert.alert("Erro", error.toString(), [
              { text: "Ok", onPress: () => console.log(error.toString()) },
            ]);
          }
        });
    }
  };

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
                  onChangeText={(x) => setEmail(x)}
                />
                <TextInput
                  style={styles.Input}
                  placeholder="Senha"
                  textContentType={"password"}
                  secureTextEntry={true}
                  autoCorrect={false}
                  onChangeText={(x) => setPwd(x)}
                />
              </View>
              <View style={styles.Button}>
                <TouchableOpacity style={styles.mainBtn} onPress={FazerLogin}>
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
