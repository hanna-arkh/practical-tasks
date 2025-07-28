import { MMKV } from "react-native-mmkv";

export const storage = new MMKV();

if (!storage.contains("theme")) {
  storage.set("theme", "light");
}
