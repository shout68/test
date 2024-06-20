import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PaperProvider } from 'react-native-paper';
import PostPage from './page/PostPage.jsx/PostPage';
import LoginPage from './page/login/LoginPage';
import OnePage from './page/onePage/OnePage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Post"
            component={PostPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OnePost"
            component={OnePage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
