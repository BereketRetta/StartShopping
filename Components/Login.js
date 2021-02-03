import React, { useState } from "react";
import { Text, Image, StyleSheet, Alert } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import AppButton from "../Components/AppButton";
import Screen from "../Components/Screen";
import AppText from "../Components/AppText";
import AppTextInput from "../Components/AppTextInput";
import Error from "../Components/Error";
import firebase from "firebase";
import ActivityIndicator from "./ActivityIndicator";

function Login({ navigation }) {
  const [loading, setLoading] = useState(false);

  const Validation = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(5).label("Password"),
  });

  const onSubmitApp = ({ email, password }) => {
    setLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
        navigation.navigate("AppNav");
      })
      .catch((error) => {
        setLoading(false);
        Alert.alert("Error", JSON.stringify(error.message));
      });
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={onSubmitApp}
        validationSchema={Validation}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <AppTextInput
              placeholder="email"
              icon="email"
              autoCorrect={false}
              onChangeText={handleChange("email")}
              keyboardType={"email-address"}
              autoCapitalize="none"
            />
            <Error error={errors.email} />
            <AppTextInput
              icon="lock"
              autoCorrect={false}
              placeholder="password"
              onChangeText={handleChange("password")}
              autoCapitalize="none"
              secureTextEntry
            />
            <AppText style={styles.textDanger}>{errors.password}</AppText>
            <ActivityIndicator visible={loading} />

            <AppButton title="Log In" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    height: 70,
    width: 70,
    alignSelf: "center",
    margin: 50,
  },
  textDanger: {
    color: "red",
  },
});
export default Login;
