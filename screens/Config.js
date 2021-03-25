import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import styles from './styles';



const Config = ({navigation}) =>{
    return(
        <View style={styles.container3}>
            <StatusBar backgroundColor={COLORS.primary} barStyle="light-content"/>
            <TouchableOpacity onPress={() => {navigation.navigate("Login")}}>
                <Text style={styles.textmaisum}>Log Out</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Config;