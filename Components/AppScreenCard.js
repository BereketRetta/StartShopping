import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableHighlight,
} from "react-native";

function AppScreenCard({ image, title, subtitle }) {
  return (
    <SafeAreaView style={styles.Statusbar}>
      <TouchableHighlight>
        <View style={styles.cardView}>
          <Image style={styles.image} source={image} />
          <View style={styles.textContainer}>
            <Text style={styles.titles}>{title}</Text>
            <Text style={styles.subtitles}>{subtitle}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardView: {
    padding: 15,
    flexDirection: "row",
    backgroundColor: "#f1f1f1",
    borderRadius: 30,
    marginBottom: 20,
    backgroundColor: "#f3f4f4",
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginHorizontal: 10,
    marginTop: 10,
  },
  Statusbar: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  textContainer: {
    padding: 15,
  },
  titles: {
    fontSize: 22,
    fontWeight: "300",
    color: "#6e6969",
  },
  subtitles: {
    fontSize: 19,
    fontWeight: "300",
    color: "#6e6969",
  },
});

export default AppScreenCard;
