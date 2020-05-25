import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import colors from "../config/colors";

function LoginScreen(props) {
  const { navigation } = props;
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView style={styles.background}>
        <Image
          resizeMode="contain"
          style={styles.logo}
          source={require("../assets/logo-red.png")}
        />
        <View style={styles.information}>
          <View style={styles.email}>
            <FontAwesomeIcon style={styles.icon} icon="envelope" />
            <TextInput placeholder="Email" autoFocus={true} />
          </View>
          <View style={styles.password}>
            <FontAwesomeIcon style={styles.icon} icon="lock" />
            <TextInput placeholder="Password" secureTextEntry />
          </View>
          <View style={styles.loginButton}>
            <Button
              onPress={() => navigation.navigate("UserHome")}
              title="Log In"
              color="white"
            />
          </View>
          <View style={styles.registerButton}>
            <Button
              onPress={() => navigation.navigate("UserHome")}
              title="Register"
              color="black"
            />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 0.5,
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  icon: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  logo: {
    width: 100,
    height: 100,
    flex: 4,
  },
  email: {
    borderWidth: 1,
    borderRadius: 30,
    flex: 2,
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 20,
    overflow: "hidden",
    backgroundColor: "lightgrey",
  },
  information: {
    flex: 5,
    flexDirection: "column",
    alignContent: "space-between",
    width: "90%",
  },
  loginButton: {
    backgroundColor: colors.primary,
    flex: 3,
    borderRadius: 30,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  registerButton: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  password: {
    borderWidth: 1,
    borderRadius: 30,
    flex: 2,
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 20,
    overflow: "hidden",
    backgroundColor: "lightgrey",
  },
});
export default LoginScreen;
