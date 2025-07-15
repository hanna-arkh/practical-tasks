import { createStackNavigator } from "@react-navigation/stack";
import FeedScreen from "./FeedScreen";
import NewsDetails from "./NewsDetails";

const Stack = createStackNavigator();
export default function Feed() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed Screen" component={FeedScreen} />
      <Stack.Screen name="News Details" component={NewsDetails} />
    </Stack.Navigator>
  );
}
