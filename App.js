import { StyleSheet, Text, View } from "react-native";
import Footer from "./footer";
import Header from "./header";
import Login from "./login";
import Flatlistt from "./flatlistt";
import Sectionlistt from "./sectionlistt";
import Hooker from "./hooker";
import HomeScreen from "./HomeScreen"
import DetailsScreen from "./DetailsScreen.js"
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default function App() {
  const greeting = "Welcome to React";
  return (
    <NavigationContainer>
      <Header style={styles.appHeader} abc={greeting} />
      <Stack.Navigator>
        <Stack.Screen name="Hooker" component={Hooker} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
      <Footer style={styles.appFooter} />
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
