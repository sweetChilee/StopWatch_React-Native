import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import { NavigationContainer } from "@react-navigation/native";
import TotalTime from "./TotalTime";
import {
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import { MainColor, PointColor } from "../config/styles";

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  // const [dark, setDark] = useState(false);

  // const MainColors = dark ? "rgb(44, 44, 44)" : "white";
  // const reverseMainColors = dark ? "white" : "rgb(44, 44, 44)";
  // const TextColor = dark ? "white" : "rgb(44, 44, 44)";
  // const PointColor = dark ? "#8C8CED" : "rgb(44, 44, 44)";
  // const PointColors = dark ? "rgb(44, 44, 44)" : "#8C8CED";

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: MainColor,
          },
          tabBarActiveTintColor: PointColor,
          tabBarInactiveTintColor: "white",
        }}
      >
        <Tab.Screen name="Home" component={Home}></Tab.Screen>
        <Tab.Screen name="Totaltime" component={TotalTime} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  darkBtn: {
    width: 100,
    height: 50,
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    margin: 10,
  },
});
