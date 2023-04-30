import React, { useState, useEffect } from "react";
import { View, Switch, Text, StyleSheet, SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from "react-native-paper";

const Test = () => {
  const { colors } = useTheme();
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  useEffect(() => {
    // 사용자 설정 불러오기
    AsyncStorage.getItem("isDarkModeEnabled").then((value) => {
      setIsDarkModeEnabled(value === "true");
    });
  }, []);

  const toggleSwitch = () => {
    // 사용자 설정 저장하기
    setIsDarkModeEnabled((previousState) => !previousState);
    AsyncStorage.setItem("isDarkModeEnabled", (!isDarkModeEnabled).toString());
  };
  console.log(isDarkModeEnabled);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <View style={styles.row}>
        <Text style={[styles.label, { color: colors.text }]}>Dark Mode</Text>
        <Switch
          trackColor={{ false: "black", true: colors.backdrop }}
          thumbColor={isDarkModeEnabled ? colors.background : colors.background}
          ios_backgroundColor={colors.placeholder}
          onValueChange={toggleSwitch}
          value={isDarkModeEnabled}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
  },
});

export default Test;
