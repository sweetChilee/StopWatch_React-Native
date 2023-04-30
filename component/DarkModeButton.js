import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Home from "../screen/Home";

export default function DarkModeButton() {
  const [dark, setDark] = useState(false);

  const MainColors = dark ? "rgb(44, 44, 44)" : "white";
  const TextColor = dark ? "white" : "rgb(44, 44, 44)";

  return (
    <TouchableOpacity
      style={styles.btn}
      activeOpacity={0.8}
      onPress={() => {
        setDark((prev) => !prev);
      }}
    >
      <Home color={TextColor}></Home>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    position: "absolute",
    top: 0,
    width: 150,
    height: 60,
    backgroundColor: "lightcoral",
    borderRadius: 100,
    borderWidth: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
