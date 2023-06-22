import { View, Text, SectionList,Image } from "react-native";

const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"],
    imageurl: require("./assets/abc.jpg"),
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"],
    imageurl: require("./assets/abc.jpg"),
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"],
    imageurl: require("./assets/abc.jpg"),
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"],
    imageurl: require("./assets/abc.jpg"),
  },
];

export default function Sectionlistt() {
  return (
    <View>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View>
            <Text>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View>
            <Text>{title}</Text>
          </View>
        )}
      />
     
    </View>
  );
}
