import React, { useState, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  View,
} from "react-native";
import ListItem from "./ListItem";
import ListSeparator from "./ListSeparator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import firebase from "firebase";

function Listing() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    listingss();
  }, []);
  const listingss = () => {
    firebase
      .firestore()
      .collection("posts")
      .doc("theMainDocID")
      .collection("userPosts")
      .where("email", "==", firebase.auth().currentUser.email)
      .get()
      .then(function (querySnapshot) {
        const user = [];
        querySnapshot.forEach(function (documentSnapshot) {
          user.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
          setMessages(user);
          // console.log(doc.id, " => ", doc.data());
        });
      });
  };

  const onDeleteIconPress = (item) => {
    {
      firebase
        .firestore()
        .collection("posts")
        .doc("theMainDocID")
        .collection("userPosts")
        .doc(item.key)
        .delete()
        .then(() => console.log("deleted"))
        .catch((error) => console.log("there is an error", error)) &&
        firebase
          .firestore()
          .collection("posts")
          .doc("theMainDocID")
          .collection("userPosts")
          .where("email", "==", firebase.auth().currentUser.email)
          .get()
          .then(function (querySnapshot) {
            const user = [];
            querySnapshot.forEach(function (documentSnapshot) {
              user.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.id,
              });
              setMessages(user);
            });
          });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.key.toString()}
        renderItem={({ item }) => (
          <ListItem
            subtitle={"$ " + item.price}
            title={item.title}
            icon={
              <MaterialCommunityIcons
                onPress={() => onDeleteIconPress(item)}
                name="trash-can-outline"
                size={40}
              />
            }
          />
        )}
        ItemSeparatorComponent={ListSeparator}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default Listing;
