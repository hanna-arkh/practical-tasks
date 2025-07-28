import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveTheme = async () => {
  try {
    await AsyncStorage.setItem("theme", "light");
  } catch (e) {
    console.error("Error", e);
  }
};

export const getTheme = async () => {
  try {
    return await AsyncStorage.getItem("theme");
  } catch (e) {
    console.error("Error", e);
    return null;
  }
};
