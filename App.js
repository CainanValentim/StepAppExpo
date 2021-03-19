import "react-native-gesture-handler";
import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

// Screens
import { Cadastro, Login, Home, ItemDetail, checkin, Config } from "./screens/";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#070D2D" }}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"Login"}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ItemDetail" component={ItemDetail} options={{headerShown: true, headerStyle:{height: 70, backgroundColor: '#070D2D'}, headerTitleStyle: { color: '#070D2D' }, headerTintColor: '#FE5430'}} />
          <Stack.Screen name="checkin" component={checkin} />
          <Stack.Screen name="Configuracao" component={Config} options={{headerShown: true, headerStyle:{height: 70, backgroundColor: '#070D2D'}, headerTitleStyle: { color: '#070D2D' }, headerTintColor: '#FE5430'}} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default () => {
  return <App />;
};