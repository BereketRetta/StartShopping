import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Listings from "../Listings";
import ListDetail from "../ListDetail";
import ListingEditScreen from "../ListingEditScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={Listings} />
    <Stack.Screen name="ListDetail" component={ListDetail} />
    <Stack.Screen name="ListingEditScreen" component={ListingEditScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
