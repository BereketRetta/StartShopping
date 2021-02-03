import React from "react";
import firebase from "firebase";
import { Image, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import AppButton from "../Components/AppButton";
import Screen from "../Components/Screen";
import AppText from "../Components/AppText";
import AppTextInput from "../Components/AppTextInput";
import Error from "../Components/Error";

function Register({ navigation }) {
  const Validation = Yup.object().shape({
    name: Yup.string().required().min(2).label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(5).label("Password"),
  });

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={({ name, email, password }) =>
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((result) => {
              firebase
                .firestore()
                .collection("users")
                .doc(firebase.auth().currentUser.uid)
                .set({
                  displayName: name,
                  email,
                });
              console.log(result);
            })
            .catch((error) => {
              console.log(error);
            }) && navigation.navigate("Login")
        }
        validationSchema={Validation}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <AppTextInput
              placeholder="name"
              icon="post"
              autoCorrect={false}
              onChangeText={handleChange("name")}
              keyboardType={"default"}
              autoCapitalize="none"
            />
            <Error error={errors.name} />
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

            <AppButton title="Register" onPress={handleSubmit} />
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
    margin: 30,
  },
  textDanger: {
    color: "red",
  },
});
export default Register;
