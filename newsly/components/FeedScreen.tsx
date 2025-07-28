import { articles } from "../data";
import { FlatList, View, TouchableOpacity, Text } from "react-native";
import { styles } from "../styles/styles";
import * as Device from "expo-device";
import useOrientation from "../../orientation/hooks/useOrientation";
import { useTheme } from "@react-navigation/native";

const FeedScreen = ({ navigation }) => {
  const { isPortrait } = useOrientation();
  const isTablet = Device.deviceType === Device.DeviceType.TABLET;
  const theme = useTheme() as unknown as "light" | "dark";
  const s = styles(theme);

  return (
    <View
      style={[
        s.container,
        isPortrait ? s.portrait : s.landscape,
        isTablet ? s.tablet : s.phone,
      ]}
    >
      <FlatList
        data={articles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("News Details", { article: item })
            }
          >
            <Text style={s.item}>
              {item.id}. {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default FeedScreen;
