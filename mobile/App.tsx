import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';

// Screen components will be imported here
import HomeScreen from './src/screens/HomeScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import FarmerRegistrationScreen from './src/screens/FarmerRegistrationScreen';
import DeliveryRegistrationScreen from './src/screens/DeliveryRegistrationScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
              title: 'Farm Fresh',
            }}
          />
          <Stack.Screen 
            name="Products" 
            component={ProductsScreen}
            options={{
              title: 'Fresh Produce',
            }}
          />
          <Stack.Screen 
            name="FarmerRegistration" 
            component={FarmerRegistrationScreen}
            options={{
              title: 'Register as Farmer',
            }}
          />
          <Stack.Screen 
            name="DeliveryRegistration" 
            component={DeliveryRegistrationScreen}
            options={{
              title: 'Join Delivery Network',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
}
