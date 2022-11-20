import { View, Pressable, Text, StyleSheet, TextInput } from "react-native";
import { AntDesign} from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function AccountScreen() {
  const navigation = useNavigation();

  const logOut = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <View style={styles.topWrapper1} />
      <View style={styles.searchBar}>
        <AntDesign
          name="search1"
          size={24}
          color="black"
          style={{ marginLeft: 10 }}
        />
        <TextInput style={styles.input} placeholder="Search" />
      </View>
      <View style={styles.ExternalComponents}>
        <Pressable style={styles.LogOut} onPress={logOut}>
          <Text>Log Out</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#92E3A9",
  },
  topWrapper1: {
    height: 30,
    backgroundColor: "#86c497",
    width: "100%",
  },
  searchBar: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  input: {
    fontSize: 15,
    marginLeft: 10,
    width: "90%",
  },
  ExternalComponents: {
    backgroundColor: "#fff",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  LogOut:{
    backgroundColor: "#92E3A9",
    padding: 10,
    borderRadius: 4
  }
});
