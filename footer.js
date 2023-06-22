import { StyleSheet, Text, View } from "react-native";

export default function Footer({style}) {
   var date = new Date().getDate();
   var month = new Date().getMonth();
   var year = new Date().toLocaleString();
  return (
    <View style={[styles.appFooter,style]}>
      
        <Text style={styles.footerText}>
          © {date + "-" + month + "-" + year} My App. All rights reserved.
        </Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  
});
