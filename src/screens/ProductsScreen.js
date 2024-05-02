//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import products from "../data/products.js";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { productsSlice } from "../store/productsSlice.js";

// create a component
const ProductsScreen = () => {
  const navigation = useNavigation();
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <View style={{ flexDirection: "row" }}></View>
      <FlatList
        data={products}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              // update selected product
              dispatch(productsSlice.actions.setSelectedProduct(item.id));
              navigation.navigate("ProductsDetails");
            }}
            style={styles.itemContainer}
          >
            <Image
              source={{
                uri: item.image,
              }}
              style={styles.image}
            />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  itemContainer: {
    width: "50%",
    padding: 1,
  },
});

//make this component available to the app
export default ProductsScreen;
