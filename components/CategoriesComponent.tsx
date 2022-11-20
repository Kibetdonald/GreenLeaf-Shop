import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";

export default function CategoriesComponent() {
  return (
    <View>
      <View style={styles.CategoryHeader}>
        <Text style={styles.CategoryText}>Categories</Text>
        <Text style={styles.CategoryText}>See All</Text>
      </View>
      <View>
        <ScrollView>
          <View style={styles.CategoryList}>
            <Image
              style={styles.CategoryImage}
              source={require("../assets/images/Vegetable.jpg")}
            />
            <Image
              style={styles.CategoryImage}
              source={require("../assets/images/Herbs.jpg")}
            />
            <Image
              style={styles.CategoryImage}
              source={require("../assets/images/fruit.jpg")}
            />
            <Image
              style={styles.CategoryImage}
              source={require("../assets/images/Nature.jpg")}
            />
            <Image
              style={styles.CategoryImage}
              source={require("../assets/images/flower.jpg")}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  CategoryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  CategoryList: {
    flexDirection: "row",
    paddingTop: 10,
  },
  CategoryImage: {
    borderRadius: 50,
    width: 80,
    height: 80,
    marginLeft: "4%",
  },
  CategoryText: {
    fontSize: 15,
  },
});
