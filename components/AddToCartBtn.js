import { View, StyleSheet, Pressable } from "react-native";
import React from "react";
import {
  FontAwesome,
  FontAwesome5,
  Entypo,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function AddToCartBtn() {
  const navigation = useNavigation();
  const dashboardNavigate = () => {
    navigation.navigate("CartScreen");
  };
  return (
    <View style={styles.buttonSpace}>
      <Pressable style={styles.addCart} onPress={dashboardNavigate}>
        <Entypo name="shopping-cart" size={24} color="#555" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  addCart: {
    borderWidth: 4,
    borderColor: "#92E3A9",
    borderRadius: 50,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    width: 45,
    height: 45,
    marginTop: 5,
    marginLeft: 8,
    marginBottom: 5,
  },
  buttonSpace: {
    marginTop: -30,
    backgroundColor: "#fff",
    borderRadius: 50,
    width: 60,
    height: 60,
  },
});
