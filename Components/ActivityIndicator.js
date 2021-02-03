import React from "react";
import LottieView from "lottie-react-native";

function ActivityIndicator({ visible }) {
  if (!visible) return null;

  return <LottieView autoPlay loop source={require("../assets/loader.json")} />;
}

export default ActivityIndicator;
