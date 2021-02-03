import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import AppText from "./AppText";
import AccountListItem from "./AccountListItem";
import ListSeparator from "./ListSeparator";
import firebase from "firebase";

const menuItems = [
  {
    title: "My Listing",
    icon: require("../assets/list.png"),
    targetScreen: "Listing",
  },
];

function Account({ navigation }) {
  const onLogoutPress = () => {
    firebase.auth().signOut();
    navigation.navigate("WelcomeScreen");
  };
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>Account</Text>
      </View>
      <FlatList
        data={menuItems}
        keyExtractor={(menuItems) => menuItems.title}
        ItemSeparatorComponent={ListSeparator}
        renderItem={({ item }) => (
          <AccountListItem
            options={{ headerShown: false }}
            onPress={() => navigation.navigate(item.targetScreen)}
            title={item.title}
            image={item.icon}
          />
        )}
      />
      <Text style={{ padding: 10, fontSize: 14 }}>
        {firebase.auth().currentUser.email}
      </Text>
      <TouchableOpacity onPress={onLogoutPress} style={styles.button}>
        <Text style={styles.buttonText}> Log Out </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  button: {
    marginVertical: 80,
    backgroundColor: "#333",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    fontSize: 24,
    color: "#333",

    padding: 30,
  },
});
export default Account;
