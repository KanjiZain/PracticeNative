import { StyleSheet, Text, View } from "react-native";

export default function Header({style,abc}) {
  return (
    <View style={[styles.appHeader, style]}>
      <Text>
        <Text style={styles.headingText}>React Native App</Text> &nbsp;
        <Text style={styles.sloganText}>
          Build once, run anywhere! Build by {abc}
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({

});
