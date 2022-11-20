import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();
  const signUpNavigate = () => {
    navigation.navigate("SignUp");
  };
  const dashboardNavigate = () => {
    navigation.navigate("Dashboard");
  };
  return (
    <View>
      <View style={styles.topWrapper} />
      <Image
        style={styles.signupImage}
        source={require("../assets/images/login.png")}
      />
      <View style={{height: "10%"}}/>
      <Text style={styles.started}>Login</Text>
      <TextInput style={styles.input} placeholder="Enter email" />
      <TextInput style={styles.input} placeholder="Enter Password" />
      <View style={{height: "5%"}}/>
      <Pressable style={styles.btn} onPress={dashboardNavigate}>
        <Text>Login</Text>
      </Pressable>
      <View style={styles.alreadyHaveAccount}>
        <Text>Don't have an account?</Text>
        <Pressable style={styles.btnQuestion} onPress={signUpNavigate}>
          <Text style={{color: "blue"}}>  Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  topWrapper: {
    height: 40,
    width: "100%",
    backgroundColor: "#92E3A9",
  },
  started: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
    textAlign: "center",
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginLeft: "5%",
    borderRadius: 5,
    borderColor: "grey",
  },
  signupImage: {
    width: 250,
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "25%",
    marginTop: "10%",
  },
  googleImage: {
    width: 20,
    height: 20,
  },
  btn: {
    backgroundColor: "#92E3A9",
    padding: 15,
    width: "90%",
    alignItems: "center",
    marginLeft: "5%",
    borderRadius: 5,
  },
  alreadyHaveAccount:{
    flexDirection: "row",
    textAlign: 'center',
    justifyContent: "center",
    marginTop: 30
  },
  btnQuestion:{
    width: "15%"
  }
});
