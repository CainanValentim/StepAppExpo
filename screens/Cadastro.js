import React, {useState} from "react";
import styles from "./styles";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  CheckBox,
  Alert,
} from "react-native";
import { greaterThan } from "react-native-reanimated";
import DateTimePicker from '@react-native-community/datetimepicker';
import firebase from '../firebase';
import { icons, COLORS, FONTS, SIZES } from "../constants";

const auth = firebase.auth();

function anosAtras(dataparam){
  return (dataparam.setFullYear(dataparam.getFullYear() - 10));
}

function dataFormat(dataparam) {
  var dia = "" + dataparam.getDate();
  var mes = "" + (dataparam.getMonth() + 1);
  var ano = "" + dataparam.getFullYear();

  if (mes.length < 2) mes = "0" + mes;

  if (dia.length < 2) dia = "0" + dia;

  return [dia, mes, ano].join("/");
};

function Cadastro({navigation}) {

  const [visible, setVisible] = useState(false);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [datanasc, setDatanasc] = useState(new Date());
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [saude, setSaude] = useState(false);
  const [saude_detail, setSaudeD] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdCon, setPwdCon] = useState("");

  const datafinal = dataFormat(datanasc);

  const showDatePicker = () => {
    setVisible(true);
  };

  const ConfirmSubmit = (event, selectedDate) => {
    if (event.type === "set"){
      setVisible(false);
      setDatanasc(selectedDate);
    }else{
      setVisible(false);
    }
  };

  const navigateToLogin = () => {
    navigation.navigate('Login');
  }

  const TLogs = async () => {
    if(nome === ""|| email === "" || telefone === "" || cpf === "" || pwd === ""){
      Alert.alert(
        "Erro",
        "Campo vazio",
        [{ text: "Ok", onPress: () => console.log("Ok2") }]
      );
    }else if (saude === true && saude_detail === ""){
      Alert.alert(
        "Erro",
        "Nada especificado no problema de saúde",
        [{ text: "Ok", onPress: () => console.log("Ok2") }]
      );
    }else if (pwd.length < 6){
      Alert.alert(
        "Erro",
        "Senha muito curta, deve ter pelo menos 6 caracteres",
        [{ text: "Ok", onPress: () => console.log("Ok3") }]
      );
    }else if (pwd !== pwdCon){
      Alert.alert(
        "Erro",
        "As senhas não coincidem.",
        [{ text: "Ok", onPress: () => console.log("Ok") }]
      );
    }else{
      console.log("Deu Certo!");
      firebase.firestore().collection('users').add({
        cpf: cpf,
        datanasc: datanasc,
        email: email,
        nome: nome,
        saude: saude,
        saude_detail: saude_detail,
        telefone: telefone,
      });
      await auth.createUserWithEmailAndPassword(email, pwd).then(navigateToLogin);
    };
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <ScrollView style={styles.middleCadastro}>
        <View style={styles.formArea} >
          <Text style={[styles.textContainer, styles.signin]}>Cadastro</Text>
          <View style={styles.mainForm}>
            <View style={styles.formItemsCadastro}>
              <View style={styles.formInput}>
                <TextInput
                  style={styles.Input}
                  placeholder="Nome e sobrenome"
                  autoCorrect={false}
                  onChangeText={(x) => setNome(x)}
                />
                
                <TextInput
                  style={styles.Input}
                  placeholder="CPF"
                  autoCorrect={false}
                  keyboardType="numeric"
                  onChangeText={(x) => setCpf(x)}
                  maxLength={11}
                />
                <TextInput
                  style={styles.Input}
                  placeholder="Telefone"
                  autoCorrect={false}
                  keyboardType="numeric"
                  onChangeText={(x) => setTelefone(x)}
                  maxLength={11}
                />
                <TextInput
                  style={styles.Input}
                  placeholder="nome@email.com.br"
                  autoCorrect={false}
                  onChangeText={(x) => setEmail(x)}
                />
                <Text style={styles.InputTexto}>Data de nascimento:</Text>
                <View style={styles.containerCadastro}>
                  {visible &&
                    <DateTimePicker
                      value = {datanasc}
                      minimumDate = {new Date(1911, 0, 1)}
                      maximumDate = {anosAtras(new Date())}
                      mode = "date"
                      onChange = {ConfirmSubmit}
                    />
                  }
                  <Text style={styles.InputTexto2}> {datafinal}</Text>
                  <TouchableOpacity style={styles.mainBtnCadastro2} onPress={showDatePicker}>
                    <Text style={styles.btnTextCadastro}>Selecionar</Text>
                  </TouchableOpacity> 
                </View>
                <View style={styles.containerCadastro}>
                  <Text style={styles.InputTexto3}>Tem algum problema de saúde?</Text>
                  <CheckBox
                    tintColors={{ true: "#FE5430" }}
                    value={saude}
                    onValueChange={setSaude}
                  />
                </View>
                {saude &&
                  <TextInput
                    style={styles.Input}
                    placeholder="Cite-os"
                    autoCorrect={false}
                    onChangeText={(x) => setSaudeD(x)}
                  />
                }
                <TextInput
                  style={styles.Input}
                  placeholder="Senha"
                  textContentType={"password"}
                  secureTextEntry={true}
                  autoCorrect={false}
                  onChangeText={(x) => setPwd(x)}
                />
                <TextInput
                  style={styles.Input}
                  placeholder="Confirmar senha"
                  textContentType={"password"}
                  secureTextEntry={true}
                  autoCorrect={false}
                  onChangeText={(x) => setPwdCon(x)}
                />
                <TouchableOpacity
                  style={styles.mainBtnCadastro}
                  onPress={TLogs}
                >
                  <Text style={styles.btnTextCadastro}>Finalizar cadastro</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cadastro;