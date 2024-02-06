import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabsNavigation from "./TabsNavigation";
import PaymentGateway from "./screens/Pay2";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={TabsNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="pay"
        component={PaymentGateway}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
