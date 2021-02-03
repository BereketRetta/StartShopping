import React, { useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import ListItem from "./ListItem";
import firebase from "firebase";

function ListDetail({ route }) {
  const [uri, seturi] = useState("");

  const listing = route.params;

  const storageRef = firebase.storage().ref();
  const imagesRef = storageRef.child("images/" + listing.title);
  imagesRef
    .getDownloadURL()
    .then((uri) => {
      seturi(uri);
      console.log("successfully fetched");
    })
    .catch((error) => console.log("error fetching image", error));

  const urll = { uri: uri };

  return (
    <View>
      <Image source={urll} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>$ {listing.price}</Text>
        <Text style={styles.desc}>{listing.description}</Text>
      </View>
      <ListItem title={"Email me at " + listing.email} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  textContainer: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "400",
  },
  price: {
    color: "green",
    fontSize: 25,
    fontWeight: "400",
    paddingTop: 4,
  },
  desc: {
    color: "black",
    fontSize: 25,
    fontWeight: "400",
    paddingTop: 4,
  },
});

export default ListDetail;
