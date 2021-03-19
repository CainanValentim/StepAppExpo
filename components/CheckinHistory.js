import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";

import { COLORS, SIZES, FONTS, icons } from "../constants";

const CheckinHistory = ({ customContainerStyle, history }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: SIZES.base,
      }}
      onPress={() => console.log(item)}
    >
      <Image
        source={icons.transaction}
        style={{
          width: 30,
          height: 30,
          tintColor: COLORS.primary,
        }}
      />

      <View style={{ flex: 1, marginLeft: SIZES.radius }}>
        <Text
          style={{ fontSize: 16, color: COLORS.lightGray, fontWeight: "bold" }}
        >
          {item.data}
        </Text>
        <Text style={{ color: COLORS.gray, fontSize: 12 }}>{item.hora}</Text>
      </View>

      <View
        style={{ flexDirection: "row", height: "100%", alignItems: "center" }}
      >
        <Text style={{ color: COLORS.lightGray, fontSize: 16 }}>
          {item.nome}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        marginTop: SIZES.padding,
        marginHorizontal: SIZES.padding,
        padding: 20,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.secondary,
        ...customContainerStyle,
      }}
    >
      <Text
        style={{ color: COLORS.lightGray, fontSize: 22, fontWeight: "bold" }}
      >
        Histórico de Check-in
      </Text>
      <FlatList
        contentContainerStyle={{ marginTop: SIZES.radius }}
        scrollEnabled={false}
        data={history}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{
                width: "100%",
                height: 1,
                backgroundColor: COLORS.lightGray,
              }}
            ></View>
          );
        }}
      />
    </View>
  );
};

export default CheckinHistory;