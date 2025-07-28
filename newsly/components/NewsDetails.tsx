import { Text, View } from "react-native";
import { styles } from "../styles/styles";
import * as Device from "expo-device";
import useOrientation from "../../orientation/hooks/useOrientation";

import { useTheme } from "@react-navigation/native";

const NewsDetails = ({ route }) => {
  const { article } = route.params;
  const { isPortrait } = useOrientation();
  const isTablet = Device.deviceType === Device.DeviceType.TABLET;
  const theme = useTheme() as unknown as "light" | "dark";
  const s = styles(theme);
  return (
    <View
      style={[
        s.containerTextDetails,
        isPortrait ? s.portrait : s.landscape,
        isTablet ? s.tablet : s.phone,
      ]}
    >
      <Text style={[s.textItem, s.articleTitle]}>{article.title}</Text>
      <Text style={[s.textItem, s.content]}>{article.content}</Text>
      <Text style={[s.textItem, s.info]}>Category: {article.category}</Text>
      <Text style={[s.textItem, s.info]}>Author: {article.author}</Text>
    </View>
  );
};

export default NewsDetails;
