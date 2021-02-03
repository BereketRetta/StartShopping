import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";

function ListItem({ icon, title, subtitle, onPress }) {
  return (
    <TouchableHighlight
      style={{ paddingTop: 45 }}
      underlayColor={"#f9f9f9"}
      onPress={onPress}
    >
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.textTitle}>{title}</Text>
          <Text style={styles.text}>{subtitle}</Text>
        </View>
        <View style={styles.icon}>{icon}</View>
      </View>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
  },
  icon: {
    position: "absolute",
    top: "50%",
    left: "90%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 19,
    fontWeight: "300",
    color: "#6e6969",
  },
  textTitle: {
    fontSize: 23,
    fontWeight: "500",
  },
  titleContainer: {
    alignItems: "flex-start",
  },
});
export default ListItem;
