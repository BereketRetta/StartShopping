import React, { useState, useEffect } from "react";
import { Text, View, Image, FlatList, VirtualizedList } from "react-native";
import ListItem from "../Components/ListItem";
import firebase from "firebase";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Listings({ navigation }) {
  const [listing, setlisting] = useState([]);

  useEffect(() => {
    listingss();
  }, []);
  const listingss = () => {
    firebase
      .firestore()
      .collection("posts")
      .doc("theMainDocID")
      .collection("userPosts")
      .onSnapshot((snapshot) => {
        const user = [];
        snapshot.forEach((documentSnapshot) => {
          user.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setlisting(user);
      });
  };

  console.log(listing);
  return (
    <FlatList
      data={listing}
      keyExtractor={(listing) => listing.key.toString()}
      renderItem={({ item }) => (
        <ListItem
          icon={
            <MaterialCommunityIcons
              name="shopping-outline"
              size={40}
              color="black"
            />
          }
          title={item.title}
          subtitle={"$ " + item.price}
          onPress={() => navigation.navigate("ListDetail", item)}
        />
      )}
    />
  );
}

export default Listings;
