import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import DiscoverScreen from './screens/DiscoverScreen';
import AccountScreen from './screens/AccountScreen';
import PaymentScreen from './screens/PaymentScreen';
import WalletScreen from './screens/WalletScreen';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <TailwindProvider>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home-outline';
              } else if (route.name === 'Account') {
                iconName = focused 
                ? 'person-circle'
                : 'person-circle-outline';
              } else if (route.name === 'Discover') {
                iconName = focused 
                ? 'compass'
                : 'compass-outline';
              } else if (route.name === 'Pay') {
                iconName = focused 
                ? 'scan'
                : 'scan-outline';
              } else if (route.name === 'Wallet') {
                iconName = focused 
                ? 'wallet'
                : 'wallet-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Discover" component={DiscoverScreen} />
          <Tab.Screen name="Pay" component={PaymentScreen} />
          <Tab.Screen name="Wallet" component={WalletScreen} />
          <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
