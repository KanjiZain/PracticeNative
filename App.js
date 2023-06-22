import { StyleSheet, Text, View } from "react-native";
import Footer from "./footer";
import Header from "./header";
import Login from "./login";
import Flatlistt from "./flatlistt";
import Sectionlistt from "./sectionlistt";
import Hooker from "./hooker";
import HomeScreen from "./HomeScreen"
import DetailsScreen from "./DetailsScreen"
import FontAwesome from "react-native-vector-icons/FontAwesome";


import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  const greeting = "Welcome to React";
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          "tabBarActiveTintColor": "red",
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Details") {
              iconName = "user";
            }
            return <FontAwesome name={iconName} color={color} size={size} />;

          },
        })}
        
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          
        />
        <Tab.Screen
          name="Details"
          component={DetailsScreen}
          
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  appHeader: {
    backgroundColor: "red",
    marginTop: 40,
  },

  appFooter: {
    backgroundColor: "yellow",
    flex: 1,
    justifyContent: "flex-end",
  },
});
