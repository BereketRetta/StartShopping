import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

import ImageInput from "./Components/ImageInput";
import ImageInputList from "./Components/ImageInputList";
import ListingEditScreen from "./Components/ListingEditScreen";

import Login from "./Components/Login";
import Register from "./Components/Register";
import WelcomeScreen from "./Components/WelcomeScreen";
import Auth from "./Components/Navigation/Auth";
import AppNav from "./Components/Navigation/AppNav";
import * as firebase from "firebase";
import AccountNav from "./Components/Navigation/AccountNav";
import Account from "./Components/Account";
import ActivityIndicator from "./Components/ActivityIndicator";

const config = {
  apiKey: "AIzaSyAbhMHhvnKAyLyogG30ibzT6BN3FuJQe4w",
  authDomain: "startshopping-723de.firebaseapp.com",
  projectId: "startshopping-723de",
  storageBucket: "startshopping-723de.appspot.com",
  messagingSenderId: "278699402924",
  appId: "1:278699402924:web:c97cfd969555d771f56109",
  measurementId: "G-L155QVES6W",
};
firebase.initializeApp(config);

export default function App() {
  const [Logged, setlogged] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        setlogged(false);
      } else {
        setlogged(true);
      }
    });
  }, []);

  if (!Logged) {
    return (
      <NavigationContainer>
        <Auth />
      </NavigationContainer>
    );
  }
  if (Logged) {
    return (
      <NavigationContainer>
        <AppNav />
      </NavigationContainer>
    );
  }
}
