import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeComponent from "../screens/HomeScreen/HomeScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function HomeTabsNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "main") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "favourite") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "store") {
            iconName = focused ? "bag" : "bag-outline";
          } else if (route.name === "settings") {
            iconName = focused ? "notifications" : "notifications-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#C67C4E",
        tabBarInactiveTintColor: "#A2A2A2",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
          borderTopLeftRadius: 22,
          borderTopRightRadius: 22,
          paddingHorizontal: 20,
          height: 80,
        },
        tabBarItemStyle: {
          paddingVertical: 20,
        },
      })}
    >
      <Tab.Screen
        name="main"
        component={HomeComponent}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="favourite"
        component={HomeComponent}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="store"
        component={HomeComponent}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="settings"
        component={HomeComponent}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
