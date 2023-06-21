import { StyleSheet, Text, View } from 'react-native';
import Footer from './footer';
import Header from './header';

export default function App() {
const greeting = "Welcome to React";
  return (
    <View style={styles.container}>
      <Header style={styles.appHeader} abc={greeting} />
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
    flex: 0.1,
    justifyContent: "flex-end",
  },

  appFooter: {
    backgroundColor: "yellow",
    flex: 1,
    justifyContent:'flex-end'
  },
});
