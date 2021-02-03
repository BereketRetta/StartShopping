import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";

import AppButton from "./AppButton";
function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.container}
    >
      <View style={styles.header}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.headerText}>Start Shopping!</Text>
      </View>
      <View style={styles.SignIn}>
        <AppButton
          title={"Sign in"}
          onPress={() => navigation.navigate("Login")}
        />
      </View>
      <View style={styles.register}>
        <AppButton
          title={"register"}
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  header: {
    position: "absolute",
    top: 5,
    paddingTop: 40,
  },
  headerText: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#943B01",
  },
  register: {
    width: "100%",
    height: 60,
    paddingHorizontal: 13,
  },
  logo: {
    alignSelf: "center",
    height: 80,
    width: 80,
  },
  SignIn: {
    width: "100%",
    height: 60,
    paddingHorizontal: 13,
  },
});
export default WelcomeScreen;
