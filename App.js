import { StyleSheet, Text, View } from "react-native";
import Footer from "./footer";
import Header from "./header";
import Login from "./login";
import Flatlistt from "./flatlistt";
import Sectionlistt from "./sectionlistt";

export default function App() {
  const greeting = "Welcome to React";
  return (
    <View style={styles.container}>
      <Header style={styles.appHeader} abc={greeting} />
      <Sectionlistt/>
      <Footer style={styles.appFooter} />
    </View>
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
