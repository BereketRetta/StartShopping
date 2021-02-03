import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Listing from "../Listing";
import Account from "../Account";

const Stack = createStackNavigator();

const AccountNav = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{ headerShown: false }}
      name="Account"
      component={Account}
    />
    <Stack.Screen
      screenOptions={{ headerShown: false }}
      name="Listing"
      component={Listing}
    />
  </Stack.Navigator>
);

export default AccountNav;
