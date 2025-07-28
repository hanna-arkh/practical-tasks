import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, SafeAreaView, Text } from "react-native";
import { styles } from "./styles/styles";

export const AsyncTheme = () => {
  const [theme, setTheme] = useState("light");
  const s = styles(theme);

  useEffect(() => {
    const loadTheme = async () => {
      const storedTheme = await AsyncStorage.getItem("theme");
      setTheme(storedTheme || "light");
    };
    loadTheme();
  }, []);

  const toggleTheme = async () => {
    const newTheme = theme === "light" ? "dark" : "light";
    await AsyncStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <SafeAreaView style={s.container}>
      <Text style={s.textStyle}>Current theme from Async storage: {theme}</Text>
      <Button title="Change Theme" onPress={toggleTheme} />
    </SafeAreaView>
  );
};
