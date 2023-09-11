import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";;
import { SafeAreaProvider } from "react-native-safe-area-context";
import TestComp from "./src/screens/TestComp";
import { Text, View } from "react-native";
import GradientButtonM from "./src/components/GradientButtonM";
import GradientButtonS from "./src/components/GradientButtonS";
import { Colors } from "react-native/Libraries/NewAppScreen";
import FirstScreen from "./src/screens/FirstScreen";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import NavBar from "./src/components/NavBar";
import EditAccount from "./src/screens/EditAccount";
import MyAccount from "./src/screens/MyAccount";
import CreateEvent from "./src/screens/CreateEvent";



const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <CreateEvent></CreateEvent>
  )
}

export default App;