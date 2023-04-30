import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Home from "./screen/Home";
import BottomTab from "./screen/BottomTab";
import { useState } from "react";
import Test from "./screen/Test";

export default function App() {
  return (
    <>
      <BottomTab />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
