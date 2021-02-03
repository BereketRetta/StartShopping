import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../Login";
import Register from "../Register";
import WelcomeScreen from "../WelcomeScreen";
import AppNav from "./AppNav";

const Stack = createStackNavigator();

const Auth = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="WelcomeScreen"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name="Login"
      component={Login}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name="Register"
      component={Register}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name="AppNav"
      component={AppNav}
    />
  </Stack.Navigator>
);

export default Auth;
