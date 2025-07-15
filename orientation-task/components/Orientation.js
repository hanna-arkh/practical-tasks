import {
  useWindowDimensions,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
} from "react-native";

export default function Orientation() {
  const { width, height } = useWindowDimensions();
  const isPortrait = height >= width;

  return (
    <SafeAreaView
      style={[{ flexDirection: isPortrait ? "column" : "row" }, styles.text]}
    >
      <Text style={{ fontSize: isPortrait ? 8 : 18 }}>
        Lorem ipsum dolor sit amet
      </Text>
      <Text style={{ fontSize: isPortrait ? 8 : 18 }}>
        Nunc malesuada sagittis feugiat
      </Text>
      <Text style={{ fontSize: isPortrait ? 8 : 18 }}>
        Morbi ipsum tellus, dictum ac lorem vel
      </Text>
      <Text style={{ fontSize: isPortrait ? 8 : 18 }}>
        blandit porttitor mauris
      </Text>
      <Text style={{ fontSize: isPortrait ? 8 : 18 }}>sagittis feugiat</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    alignItems: "center",
  },
});
