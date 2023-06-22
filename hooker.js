import React, { Component, useState } from "react";
import { View, Text, StyleSheet, SectionList, Pressable ,Image,Button} from "react-native";

export default function Hooker({ navigation }) {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

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
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"],
      imageurl: require("./assets/abc.jpg"),
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"],
      imageurl: require("./assets/abc.jpg"),
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"],
      imageurl: require("./assets/abc.jpg"),
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"],
      imageurl: require("./assets/abc.jpg"),
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"],
      imageurl: require("./assets/abc.jpg"),
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"],
      imageurl: require("./assets/abc.jpg"),
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"],
      imageurl: require("./assets/abc.jpg"),
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"],
      imageurl: require("./assets/abc.jpg"),
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"],
      imageurl: require("./assets/abc.jpg"),
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"],
      imageurl: require("./assets/abc.jpg"),
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"],
      imageurl: require("./assets/abc.jpg"),
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"],
      imageurl: require("./assets/abc.jpg"),
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"],
      imageurl: require("./assets/abc.jpg"),
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"],
      imageurl: require("./assets/abc.jpg"),
    },
  ];

  const buttonLabel = isVisible ? "Hide" : "Show";

  return (
    <View>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Home")}
      />
      <Pressable style={styles.container} onLongPress={toggleVisibility}>
        <Text>{buttonLabel}</Text>
      </Pressable>

      {isVisible && (
        <View>
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
              <View>
                <Text>{item}</Text>
                <View style={{ padding: 10 }}>
                  <Image
                    source={item.imageurl}
                    style={{ width: 100, height: 100 }}
                  />
                </View>
              </View>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <View>
                <Text>{title}</Text>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth:1,
    borderStyle:'solid'
  },
});
