import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  SafeAreaView,
  Image,
  Button,
  Alert,
  Platform,
  StatusBar,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

// IOS View -> UIView
// Android View -> AndroidView
export default function Tutorial1() {
  // For images thats in the assets folder <Image source={require("./assets/icon.png")} />
  /* For images online, gotta specify dimensions
    <Image source={{
      uri: "https://picsum.photos/200/300",
      width: 200,
      height: 300,
    }} />

*/
  const { landscape } = useDeviceOrientation();
  return (
    <SafeAreaView style={[styles.container]}>
      <View
        style={{
          backgroundColor: "red",
          width: "100%",
          height: landscape ? "100%" : "30%",
        }}
      ></View>
      <Button
        title="Alert Me"
        onPress={() =>
          Alert.alert("My Title", "My Message", [
            { text: "Yes", onPress: () => console.log("Yes") },
            { text: "No", onPress: () => console.log("No") },
          ])
        }
        color="pink"
      />
      <Button
        title="Prompt Me"
        onPress={() =>
          Alert.prompt("My Title", "My Message", (text) => console.log(text))
        }
        color="pink"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // justifyContent: "center",
    // alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
