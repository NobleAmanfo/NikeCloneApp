import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ProductsScreen from "../screens/ProductsScreen";
import ProductsDetails from "../screens/ProductsDetails";
import ShoppingCart from "../screens/ShoppingCart";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

// create a component
const Routes = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={ProductsScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("ShoppingCart")}
                style={{ marginRight: 20, flexDirection: "row" }}
              >
                <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                <Text style={{ marginLeft: 2, fontWeight: "500" }}>2</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ProductsDetails"
          component={ProductsDetails}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default Routes;
