import React, { Component } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
const Product = (props) => {
  const { title, price, image, id } = props;

  const pressHandler = () => {
    props.pressHandler(id);
  };

  return (
    <TouchableOpacity onPress={() => pressHandler()}>
      <View style={styles.container}>
        {/* <Image
          style={styles.image}
          source={require("../assets/logo-red.png")}
          resizeMode="contain"
        ></Image> */}
        <Text>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 16,
    marginTop: 16,
    borderRadius: 10,
    borderColor: "#bbb",
    borderStyle: "dashed",
  },
  price: {
    color: "green",
  },
});
export default Product;
