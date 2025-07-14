import { createStackNavigator } from "@react-navigation/stack";
import NewsDetails from "./NewsDetails";
import SavedScreen from "./SavedScreen";
const Stack = createStackNavigator();
export default function Saved() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Saved Screen" component={SavedScreen} />
      <Stack.Screen name="News Details" component={NewsDetails} />
    </Stack.Navigator>
  );
}
