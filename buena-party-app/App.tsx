import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";;
import { SafeAreaProvider } from "react-native-safe-area-context";
import TestComp from "./src/screens/TestComp";
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
import Guests from "./src/screens/Guests";
import InviteCodeScreen from "./src/screens/InviteCodeScreen";
import EnterEvent from "./src/screens/EnterEvent";
import EventInfo from "./src/screens/EventInfo";
import EventDetails from "./src/screens/EventDetails";

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
            name="HomeScreen"
            component={HomeScreen}
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
            name="Home Screen 2"
            component={HomeScreen2}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen 
            name="Guests"
            component={Guests}
            options={{
            headerShown: false,
            }}
          />
          <Stack.Screen 
            name="Invite Code"
            component={InviteCodeScreen}
            options={{
            headerShown: false,
            }}
          />
          <Stack.Screen 
            name="Enter Event"
            component={EnterEvent}
            options={{
            headerShown: false,
            }}
          />
          <Stack.Screen 
            name="Event Info"
            component={EventInfo}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen 
            name="Event Details"
            component={EventDetails}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
    
  );
};

export default App;