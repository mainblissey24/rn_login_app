import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Switch } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingsScreen = ({ onThemeChange }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = async () => {
    const newTheme = !isDarkTheme ? "dark" : "light";
    setIsDarkTheme(!isDarkTheme);
    await AsyncStorage.setItem("theme", newTheme);
    onThemeChange(newTheme);
  };

  return (
    <View style={styles.container}>
      <Switch value={isDarkTheme} onValueChange={toggleTheme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SettingsScreen;
