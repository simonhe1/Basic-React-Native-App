import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Platform,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TextInput,
} from "react-native";
import Product from "../components/Product";

function UserHomeScreen(props) {
  const [categories, setCategories] = useState([
    { name: "Books", id: "1" },
    { name: "Cameras", id: "2" },
    { name: "Cars", id: "3" },
    { name: "Clothings", id: "4" },
    { name: "Electronics", id: "5" },
    { name: "Food", id: "6" },
    { name: "Furniture", id: "7" },
  ]);

  const [list, setList] = useState([
    {
      title: "hello",
      id: "1",
      image: "../assets/background.jpg",
      price: "200",
    },
    { title: "good", id: "2", image: "../assets/background.jpg", price: "200" },
    { title: "bye", id: "3", image: "../assets/background.jpg", price: "200" },
    { title: "my", id: "4", image: "../assets/background.jpg", price: "200" },
    {
      title: "madame",
      id: "5",
      image: "../assets/background.jpg",
      price: "200",
    },
    { title: "my", id: "6", image: "../assets/background.jpg", price: "200" },
    {
      title: "title",
      id: "7",
      image: "../assets/background.jpg",
      price: "200",
    },
    { title: "is", id: "8", image: "../assets/background.jpg", price: "200" },
    {
      title: "simon",
      id: "9",
      image: "../assets/background.jpg",
      price: "200",
    },
  ]);

  const pressHandler = (id) => {
    setList((prevState) => {
      return prevState.filter((product) => product.id != id);
    });
  };

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.categories}>
        <FlatList
          keyExtractor={(item) => item.id}
          horizontal={true}
          data={categories}
          renderItem={({ item }) => {
            return (
              <View style={styles.category}>
                <Text>{item.name}</Text>
              </View>
            );
          }}
        />
      </View>
      <View style={styles.products}>
        <FlatList
          data={list}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            const { title, image, price, id } = item;
            return (
              <Product
                style={{ width: 50, height: 50 }}
                id={id}
                title={title}
                image={image}
                price={price}
                pressHandler={pressHandler}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "lightgrey",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  categories: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 20,
  },
  category: {
    backgroundColor: "white",
    borderRadius: 30,
    width: 90,
    height: 50,
    marginHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  products: {
    flex: 9,
  },
});
export default UserHomeScreen;
