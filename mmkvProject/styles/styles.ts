import { StyleSheet } from "react-native";

export const styles = (themeState: string) =>
  StyleSheet.create({
    container: {
      backgroundColor: themeState === "light" ? "white" : "black",
      flex: 0.5,
      justifyContent: "center",
      alignItems: "center",
    },
    textStyle: {
      color: themeState === "light" ? "black" : "white",
      fontSize: 16,
    },
  });
