import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import TabsNavigation from "./src/TabsNavigation";
import AppNavigator from "./src/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: "100%",
    backgroundColor: "#121212",
    paddingHorizontal: 15,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
