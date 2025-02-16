import "@expo/metro-runtime";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingComponent from "../screens/InitialScreen/index";
import HomeTabsNavigation from "../navigation/TabNavigator";
import CoffeDetailComponent from "../screens/DetailScreen/DetailScreen1";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Onboarding">
      <Stack.Screen
        name="Onboarding"
        component={OnboardingComponent}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeTabsNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CoffeeDetail"
        component={CoffeDetailComponent}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
