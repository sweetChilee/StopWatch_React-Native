import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import BottomTab from "./screen/BottomTab";

export default function App() {
  return (
    <>
      <BottomTab />
      <StatusBar style="auto" />
    </>
  );
}
