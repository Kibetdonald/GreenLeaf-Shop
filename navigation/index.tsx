/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  FontAwesome,
  FontAwesome5,
  Entypo,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import CategoriesScreen from "../screens/CategoriesScreen";
import MessageScreen from "../screens/MessageScreen";
import AccountScreen from "../screens/AccountScreen";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import SignUpScreen from "../screens/SignUpScreen";
import LoginScreen from "../screens/LoginScreen";
import AddToCartBtn from "../components/AddToCartBtn";
import TabBgColor from "../components/TabBgColor";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Dashboard"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
 
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="HomeScreen"
      
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarBackground: () => (
          <TabBgColor/>
        ),
       
        tabBarStyle: { height:  60, paddingBottom: 10},
      }}
    >
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<"HomeScreen">) => ({
          title: "Home",
          header:()=> null,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={22} color="#4E4E4E" />
          ),
        })}
      />
      <BottomTab.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={{
          title: "Categories",
          header:()=> null,
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="list" size={22} color="#4E4E4E" />
          ),
        }}
      />
    
          <BottomTab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          title: "Cart",
          header:()=> null,
          tabBarButton: () => <AddToCartBtn />,
        }}
      />
      <BottomTab.Screen
        name="MessageScreen"
        component={MessageScreen}
        options={{
          title: "Message",
          header:()=> null,
          tabBarIcon: ({ color }) => (
            <AntDesign name="message1" size={22} color="#4E4E4E" />
          ),
        }}
      />
      <BottomTab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          title: "Account",
          header:()=> null,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="account-circle" size={22} color="#4E4E4E" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
