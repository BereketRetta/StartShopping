import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";

function AccountListItem({ image, title, onPress }) {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View style={styles.titleContainer}>
          <Text style={styles.textTitle}>{title}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: "row",
    backgroundColor: "#f4f4f4",
  },
  image: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  textTitle: {
    fontSize: 23,
    fontWeight: "500",
  },
});

export default AccountListItem;
