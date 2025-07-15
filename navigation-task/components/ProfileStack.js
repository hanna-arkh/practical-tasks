import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "./ProfileScreen";
import SettingsScreen from "./SettingsScreen";

const Stack = createStackNavigator();
export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings Screen" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
