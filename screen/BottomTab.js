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
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "md-home-sharp" : "md-home-outline";
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === "Totaltime") {
              iconName = focused ? "stopwatch" : "stopwatch-outline";
              return <Ionicons name={iconName} size={size} color={color} />;
            }
          },
          headerShown: false,
          tabBarStyle: {
            backgroundColor: MainColor,
          },
          tabBarActiveTintColor: PointColor,
          tabBarInactiveTintColor: "white",
        })}
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
