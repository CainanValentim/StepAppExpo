import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import firebase from "../firebase";
import styles from "./styles";
import { icons, COLORS, FONTS, SIZES } from "../constants";

const auth = firebase.auth();

const ScrollableTab = ({ tabList, selectedTab, onPress }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{ marginHorizontal: SIZES.padding }}
      onPress={() => onPress(item)}
    >
      <Text style={{ color: COLORS.lightGray, fontSize: 18 }}>{item.name}</Text>

      {selectedTab.id == item.id && (
        <View style={{ alignItems: "center", marginTop: SIZES.base }}>
          <View
            style={{ width: 40, height: 5, backgroundColor: COLORS.secondary }}
          ></View>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={tabList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const ScrollableCard = ({ navigation, productList }) => {
  const renderCard = ({ item }) => (
    <TouchableOpacity
      style={{ marginLeft: SIZES.padding }}
      onPress={() => navigation.navigate("ItemDetail", { itemInfo: item })}
    >
      <View
        style={{
          width: SIZES.width / 2,
          backgroundColor: COLORS.secondary,
          borderRadius: 5,
        }}
      >
        <View style={{ width: "100%", height: "90%" }}>
          <View
            style={{ position: "absolute", top: 15, left: "10%", right: "10%" }}
          >
            <Text style={{ color: COLORS.primary, fontSize: 16 }}>
              {item.secao}
            </Text>
            <Text
              style={{
                marginTop: SIZES.base,
                color: COLORS.white,
                fontSize: 22,
              }}
            >
              {item.productName}
            </Text>
          </View>

          <View
            style={{
              position: "relative",
              alignItems: "center",
              paddingTop: 180,
            }}
          >
            <Image
              source={item.img}
              resizeMode="contain"
              style={{
                width: 70,
                height: 70,
              }}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ marginTop: SIZES.padding }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={productList}
        renderItem={renderCard}
        keyExtractor={(item) => item.productId.toString()}
      />
    </View>
  );
};

const Home = ({ navigation }) => {
  const [tabList, setTabList] = React.useState([
    {
      id: 0,
      name: "Pagamento",
      title: "Pagamento",
      productList: [
        {
          productId: 1,
          secao: "Pagamento",
          productName: "Fazer pagamento da mensalidade.",
          img: icons.pagamento,
        },
      ],
    },
    {
      id: 1,
      name: "Solicitação",
      title: "Solicitação",
      productList: [
        {
          productId: 2,
          secao: "Solicitação",
          productName: "Solicitar treino ao Personal Trainer.",
          img: icons.trainer,
        },
        {
          productId: 3,
          secao: "Solicitação",
          productName: "Solicitar vaga em modalidade.",
          price: 10.0,
        },
        {
          productId: 4,
          secao: "Solicitação",
          productName: "Solicitar adiamento de vencimento.",
          img: icons.adiamento,
        },
      ],
    },

    {
      id: 2,
      name: "Incidente",
      title: "Incidente",
      productList: [
        {
          productId: 5,
          secao: "Incidente",
          productName: "Fazer registro de incidentes.",
          img: icons.incidente,
        },
      ],
    },
  ]);

  const [selectedTab, setSelectedTab] = React.useState({
    id: 0,
    name: "Pagamento",
    title: "Pagamento",
    productList: [
      {
        productId: 1,
        secao: "Pagamento",
        productName: "Fazer pagamento da mensalidade.",
        img: icons.pagamento,
      },
    ],
  });

  // Render
  function renderHeader() {
    return (
      <View style={{ paddingHorizontal: SIZES.padding }}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => console.log("Menu on Clicked")}
          >
            <Image
              source={icons.menu}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, alignItems: "flex-end" }}
            onPress={() => navigation.navigate("Configuracao")}
          >
            <Image
              source={icons.configuracao}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderTitle(title) {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
    }

    useEffect(() => {
      const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
      return subscriber;
    }, []);

    if (initializing) return null;

    if (!user) {
      return (
        <View
          style={{
            marginTop: SIZES.padding,
            marginHorizontal: SIZES.padding,
            marginBottom: SIZES.padding,
          }}
        >
          <Text
            style={{
              color: COLORS.lightGray,
              fontSize: 30,
              fontWeight: "bold",
              paddingBottom: 6,
            }}
          >
            Olá, Usuário
          </Text>
        </View>
      );
    }

    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          marginBottom: SIZES.padding,
        }}
      >
        <Text
          style={{
            color: COLORS.lightGray,
            fontSize: 30,
            fontWeight: "bold",
            paddingBottom: 6,
          }}
        >
          Olá, {user.email}
        </Text>
      </View>
    );
  }

  function renderCheckinCard() {
    return (
      <View
        style={[
          styles.shadow,
          {
            flexDirection: "row",
            marginHorizontal: SIZES.padding,
            padding: SIZES.radius,
            height: 110,
            borderRadius: 5,
            backgroundColor: COLORS.white,
          },
        ]}
      >
        <View
          style={{
            width: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={icons.checkin}
            resizeMode="contain"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </View>

        {/* Textos da seção Checkin */}
        <View
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Check-in</Text>
          <Text style={{ fontSize: 14 }}>Entrada e Saída</Text>
        </View>

        {/* Button */}
        <View
          style={{
            marginRight: SIZES.radius,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.secondary,
              justifyContent: "center",
              alignItems: "center",
              height: "70%",
              width: 40,
              borderRadius: 5,
            }}
            onPress={() => navigation.navigate("checkin")}
          >
            <Image
              source={icons.chevron}
              resizeMode="contain"
              style={{
                height: "50%",
                width: "50%",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container2}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      {renderHeader()}

      {renderTitle(selectedTab.title)}

      <ScrollableTab
        tabList={tabList}
        selectedTab={selectedTab}
        onPress={(item) => setSelectedTab(item)}
      />

      <View style={{ flex: 1 }}>
        <ScrollableCard
          navigation={navigation}
          productList={selectedTab.productList}
        />
      </View>

      {/*Footer - Check-in*/}
      <View
        style={{ height: "19%", justifyContent: "flex-end", paddingBottom: 40 }}
      >
        {renderCheckinCard()}
      </View>
    </SafeAreaView>
  );
};

export default Home;
