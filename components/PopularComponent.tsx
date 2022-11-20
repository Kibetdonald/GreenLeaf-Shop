import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function PopularComponent() {
  return (
    <View style={styles.PopularProducts}>
      <View style={styles.PopularHeader}>
        <Text style={styles.PopularText}>Popular</Text>
        <Text style={styles.PopularText}>See All</Text>
      </View>
      {/* Row One */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {/* Popular Product One */}
        <View style={styles.Products}>
          <Image
            style={styles.PopularImage}
            source={require("../assets/images/try.png")}
          />
          <View style={styles.ProductsDetails}>
            <View style={{ flexDirection: "row" }}>
              <MaterialIcons name="star-rate" size={20} color="orange" />
              <MaterialIcons name="star-rate" size={20} color="orange" />
              <MaterialIcons name="star-rate" size={20} color="orange" />
              <MaterialIcons name="star-rate" size={20} color="orange" />
              <MaterialIcons name="star-rate" size={20} color="orange" />
            </View>
            <Text>Grafted three weeks old guava plant</Text>
            <View style={{ flexDirection: "row", paddingTop: 10 }}>
              <Text style={styles.newPrice}>Ksh. 45 </Text>
              <Text style={styles.oldPrice}>Ksh. 75</Text>
            </View>
          </View>
        </View>
        {/* Popular Product Two */}
        <View style={styles.Products}>
          <Image
            style={styles.PopularImage}
            source={require("../assets/images/ovacado.png")}
          />
          <View style={styles.ProductsDetails}>
            <View style={{ flexDirection: "row" }}>
              <MaterialIcons name="star-rate" size={20} color="orange" />
              <MaterialIcons name="star-rate" size={20} color="orange" />
              <MaterialIcons name="star-rate" size={20} color="orange" />
              <MaterialIcons name="star-rate" size={20} color="orange" />
              <MaterialIcons name="star-rate" size={20} color="orange" />
            </View>
            <Text>Grafted three weeks old guava plant</Text>
            <View style={{ flexDirection: "row", paddingTop: 10 }}>
              <Text style={styles.newPrice}>Ksh. 45 </Text>
              <Text style={styles.oldPrice}>Ksh. 75</Text>
            </View>
          </View>
        </View>
      </View>
      {/* Row Two */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {/* Popular Product One */}
        <View style={styles.Products}>
          <Image
            style={styles.PopularImage}
            source={require("../assets/images/orange.png")}
          />
          <View style={styles.ProductsDetails}>
            <View style={{ flexDirection: "row" }}>
              <MaterialIcons name="star-rate" size={20} color="orange" />
              <MaterialIcons name="star-rate" size={20} color="orange" />
              <MaterialIcons name="star-rate" size={20} color="orange" />
              <MaterialIcons name="star-rate" size={20} color="orange" />
              <MaterialIcons name="star-rate" size={20} color="orange" />
            </View>
            <Text>Grafted three weeks old guava plant</Text>
            <View style={{ flexDirection: "row", paddingTop: 10 }}>
              <Text style={styles.newPrice}>Ksh. 45 </Text>
              <Text style={styles.oldPrice}>Ksh. 75</Text>
            </View>
          </View>
        </View>
        {/* Popular Product Two */}
        <View style={styles.Products}>
          <Image
            style={styles.PopularImage}
            source={require("../assets/images/mango.png")}
          />
          <View style={styles.ProductsDetails}>
            <View style={{ flexDirection: "row" }}>
              <MaterialIcons name="star-rate" size={20} color="orange" />
              <MaterialIcons name="star-rate" size={20} color="orange" />
              <MaterialIcons name="star-rate" size={20} color="orange" />
              <MaterialIcons name="star-rate" size={20} color="orange" />
              <MaterialIcons name="star-rate" size={20} color="orange" />
            </View>
            <Text>Grafted three weeks old guava plant</Text>
            <View style={{ flexDirection: "row", paddingTop: 10 }}>
              <Text style={styles.newPrice}>Ksh. 45 </Text>
              <Text style={styles.oldPrice}>Ksh. 75</Text>
            </View>
          </View>
        </View>
      </View>
      {/* Row three */}
      {/* Row Two */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {/* Popular Product One */}
        <View style={styles.Products}>
          <Image
            style={styles.PopularImage}
            source={require("../assets/images/try.png")}
          />
          <View style={styles.ProductsDetails}>
            <View style={{ flexDirection: "row" }}>
              <MaterialIcons name="star-rate" size={20} color="orange" />
              <MaterialIcons name="star-rate" size={20} color="orange" />
              <MaterialIcons name="star-rate" size={20} color="orange" />
              <MaterialIcons name="star-rate" size={20} color="orange" />
              <MaterialIcons name="star-rate" size={20} color="orange" />
            </View>
            <Text>Grafted three weeks old guava plant</Text>
            <View style={{ flexDirection: "row", paddingTop: 10 }}>
              <Text style={styles.newPrice}>Ksh. 45 </Text>
              <Text style={styles.oldPrice}>Ksh. 75</Text>
            </View>
          </View>
        </View>
        {/* Popular Product Two */}
        <View style={styles.Products}>
          <Image
            style={styles.PopularImage}
            source={require("../assets/images/try.png")}
          />
          <View style={styles.ProductsDetails}>
            <View style={{ flexDirection: "row" }}>
              <MaterialIcons name="star-rate" size={20} color="orange" />
              <MaterialIcons name="star-rate" size={20} color="orange" />
              <MaterialIcons name="star-rate" size={20} color="orange" />
              <MaterialIcons name="star-rate" size={20} color="orange" />
              <MaterialIcons name="star-rate" size={20} color="orange" />
            </View>
            <Text>Grafted three weeks old guava plant</Text>
            <View style={{ flexDirection: "row", paddingTop: 10 }}>
              <Text style={styles.newPrice}>Ksh. 45 </Text>
              <Text style={styles.oldPrice}>Ksh. 75</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  PopularProducts: {
    width: "85%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 150
  },
  PopularHeader: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "98%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  PopularText: {
    fontSize: 15,
  },
  Products: {
    marginTop: 10,
    height: 200,
    width: "45%",
    borderColor: "#ddd",
    borderWidth: 1,
  },
  PopularImage: {
    width: 100,
    height: 100,
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
  },
  ProductsDetails: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
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
