import React from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import styles from "./styles";
import firebase from "../firebase";
import { COLORS } from "../constants";

const auth = firebase.auth();

const Config = ({ navigation }) => {
  const logOut = () => {
    auth.signOut().then(navigation.navigate("Login"));
  };

  return (
    <View style={styles.container3}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <TouchableOpacity onPress={logOut}>
        <Text style={styles.textmaisum}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Config;
