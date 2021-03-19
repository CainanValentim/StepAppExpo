import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES, FONTS, icons } from "../constants";

const HeaderBar = ({ right }) => {
  const navigation = useNavigation();

  return (
    <View style={{ paddingHorizontal: SIZES.padding, flexDirection: "row" }}>
      <View style={{ flex: 1, alignItems: "flex-start" }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={icons.back_arrow}
            resizeMode="contain"
            style={{
              width: 22,
              height: 22,
              tintColor: COLORS.white,
            }}
          />
          <Text
            style={{
              marginLeft: SIZES.base,
              fontSize: 20,
              fontWeight: "bold",
              color: COLORS.lightGray,
            }}
          >
            {" "}
            Voltar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderBar;
