import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { HeaderBar, TextButton, CheckinHistory } from "../components";
import { dummyData, COLORS, SIZES, FONTS } from "../constants";
import styles from "./styles";

const checkin = ({ route }) => {
  const [trending, setTrending] = React.useState(dummyData.trendingCurrencies);
  const [checkinHistory, setCheckinHistory] = React.useState(
    dummyData.checkinHistory
  );

  function renderTrade() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          padding: SIZES.padding,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
          ...styles.shadow,
        }}
      >
        <View
          style={{
            marginTop: SIZES.padding,
            marginBottom: SIZES.padding * 1.5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>23/02/2021</Text>
          <Text style={{ color: COLORS.gray, fontSize: 22 }}>14:41</Text>
        </View>

        <TouchableOpacity style={styles.mainBtn} onPress={() => {}}>
          <Text style={styles.btnText}>Fazer check-in</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderCheckinHistory() {
    return (
      <CheckinHistory
        customContainerStyle={{ ...styles.shadow }}
        history={checkinHistory}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container2}>
      <HeaderBar right={false} />
      <View style={{ flex: 1 }}>
        {renderTrade()}
        {renderCheckinHistory()}
      </View>
    </SafeAreaView>
  );
};
export default checkin;
