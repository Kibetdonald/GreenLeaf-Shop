import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Dimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Passion Fruit",
    imgURL: require("../assets/images/mango.png"),
    newPrice: "140",
    oldPrice: "180",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Grafted Mango",
    imgURL: require("../assets/images/Herbs.jpg"),
    newPrice: "140",
    oldPrice: "180",
  },
  {
    id: "1",
    title: "Apple",
    imgURL: require("../assets/images/fruit.jpg"),
    newPrice: "140",
    oldPrice: "180",
  },
  {
    id: "2",
    title: "Flower",
    imgURL: require("../assets/images/flower.jpg"),
    newPrice: "140",
    oldPrice: "180",
  },
  {
    id: "3",
    title: "Guava",
    imgURL: require("../assets/images/Nature.jpg"),
    newPrice: "140",
    oldPrice: "180",
  },
  {
    id: "4",
    title: "Passion Fruit",
    imgURL: require("../assets/images/mango.png"),
    newPrice: "140",
    oldPrice: "180",
  },
  {
    id: "5",
    title: "Grafted Mango",
    imgURL: require("../assets/images/Herbs.jpg"),
    newPrice: "140",
    oldPrice: "180",
  },
  {
    id: "6",
    title: "Apple",
    imgURL: require("../assets/images/fruit.jpg"),
    newPrice: "140",
    oldPrice: "180",
  },
  {
    id: "7",
    title: "Flower",
    imgURL: require("../assets/images/flower.jpg"),
    newPrice: "140",
    oldPrice: "180",
  },
  {
    id: "8",
    title: "Guava",
    imgURL: require("../assets/images/Nature.jpg"),
    newPrice: "140",
    oldPrice: "180",
  },
{
  
  id: "9",
  title: "rt",
  imgURL: require("../assets/images/Nature.jpg"),
  newPrice: "140",
  oldPrice: "180",
},
];
const { width, height } = Dimensions.get("window");

const Item = ({ title, imgURL, newPrice, oldPrice }) => (
  <View style={styles.item}>
    <Image style={{ height: 180, width: width / 3 }} source={imgURL} />
    <Text style={styles.title}>{title}</Text>

    <View style={{ flexDirection: "row" }}>
      <MaterialIcons name="star-rate" size={16} color="orange" />
      <MaterialIcons name="star-rate" size={16} color="orange" />
      <MaterialIcons name="star-rate" size={16} color="orange" />
      <MaterialIcons name="star-rate" size={16} color="orange" />
      <MaterialIcons name="star-rate" size={16} color="orange" />
    </View>
    <View style={{ flexDirection: "row", paddingTop: 10 }}>
      <Text style={styles.newPrice}>{newPrice} </Text>
      <Text style={styles.oldPrice}>{oldPrice}</Text>
    </View>
  </View>
);

const AllCategories = () => {
  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      imgURL={item.imgURL}
      newPrice={item.newPrice}
      oldPrice={item.oldPrice}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={2}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    paddingBottom: 140,
  },
  item: {
    borderColor: "#92E3A9",
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 22,
  },
  newPrice: {
    fontSize: 10,
  },
  oldPrice: {
    fontSize: 10,
    paddingLeft: 10,
    textDecorationLine: "line-through",
  },
});

export default AllCategories;
