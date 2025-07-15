import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedStack from "./FeedStack";
import ProfileStack from "./ProfileStack";
import SearchScreen from "./SearchScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Feed") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "grey",
      })}
    >
      <Tab.Screen
        name="Feed"
        component={FeedStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
