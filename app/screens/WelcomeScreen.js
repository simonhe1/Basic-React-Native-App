import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  Button,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function WelcomeScreen(props) {
  const { navigation } = props;
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>The Marketplace of the future</Text>
      </View>
      <View style={styles.loginButton}>
        <Button
          onPress={() => navigation.navigate("Login")}
          title="Login"
          color="white"
        />
      </View>
      <View style={styles.registerButton}>
        <Button
          onPress={() => console.log("Sign up pressed")}
          title="Sign up"
          color="white"
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "red",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
    alignItems: "center",
    fontSize: 35,
    fontWeight: "bold",
    justifyContent: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    fontSize: 35,
    fontWeight: "bold",
    backgroundColor: "#4ecdc4",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});
export default WelcomeScreen;
