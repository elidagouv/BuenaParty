import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";;
import { SafeAreaProvider } from "react-native-safe-area-context";
import TestComp from "./src/screens/TestComp";

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <SafeAreaProvider>
      <NavigationContainer >
        <Stack.Navigator>
          <Stack.Screen 
          name="Test" 
          component={TestComp} 
          options={{
            headerShown: false,
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App;