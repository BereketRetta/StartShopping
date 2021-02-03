import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
function ListingsCard({ image, title, subtitle, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.cardView}>
        <Image style={styles.image} source={image} />
        <View style={styles.textContainer}>
          <Text style={{ paddingBottom: 7 }}>{title}</Text>
          <Text>{subtitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardView: {
    borderRadius: 30,
    marginBottom: 20,
    backgroundColor: "#f3f4f4",
  },
  image: {
    height: 200,
    width: "100%",
  },
  textContainer: {
    padding: 15,
  },
});

export default ListingsCard;
