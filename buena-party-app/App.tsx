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
import ManageEvent from "./src/screens/ManageEvent";
import EditEvent from "./src/screens/EditEvent";
import HomeScreen from "./src/screens/HomeScreen";
import HomeScreen2 from "./src/screens/HomeScreen2";

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="FirstScreen"
            component={FirstScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen 
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen 
            name="Register"
            component={Register}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen 
            name="Create Event"
            component={CreateEvent}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen 
            name="Edit Account"
            component={EditAccount}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen 
            name="Edit Event"
            component={EditEvent}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen 
            name="Manage Event"
            component={ManageEvent}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen 
            name="My Account"
            component={MyAccount}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen 
            name="Home Screen"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen 
            name="Home Screen 2"
            component={HomeScreen2}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>


    /*<CreateEvent></CreateEvent>
    <EditAccount></EditAccount>
    <EditEvent></EditEvent>
    <FirstScreen></FirstScreen>
    <Login></Login>
    <ManageEvent></ManageEvent>
    <MyAccount></MyAccount>
    <Register></Register>
    <></>*/


    
  )
}

export default App;