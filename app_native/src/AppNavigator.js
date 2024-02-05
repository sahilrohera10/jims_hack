import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabsNavigation from "./TabsNavigation";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    // <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={TabsNavigation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default AppNavigator;
