import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import DiscoverScreen from './screens/DiscoverScreen';
import AccountScreen from './screens/AccountScreen';
import PaymentScreen from './screens/PaymentScreen';
import WalletScreen from './screens/WalletScreen';
import HomeStackScreen from './screens/HomeStackScreen';
import NotificationsScreen from './screens/homeScreen/NotificationsScreen';
import { SearchFlightContextProvider } from './context/SearchFlightContext';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <SearchFlightContextProvider>
    <NavigationContainer>
      <Provider store={store}>
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
                  ? 'qr-code'
                  : 'qr-code-outline';
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
              headerShown: false,
            })}
            
          >
            <Tab.Screen 
                name="Home" 
                component={HomeStackScreen}
                options={({ route }) => ({
                  tabBarStyle: ((route) => {
                    const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                    if (routeName === 'Notifications') {
                      return { display: "none" }
                    } else if (routeName === 'Login') {
                      return { display: "none" }
                    } else if (routeName === 'CountrySelection') {
                      return { display: "none" }
                    } else if (routeName === 'Search') {
                      return { display: "none" }
                    } else if (routeName === 'MerchantPage') {
                      return { display: "none" }
                    } else if (routeName === 'MerchantItemScreen') {
                      return { display: "none" } 
                    } else if (routeName === 'BuyItemScreen') {
                      return { display: "none" } 
                    } else if (routeName === 'ItemCart') {
                      return { display: "none" } 
                    } else if (routeName === 'CheckoutScreen') {
                      return { display: "none" } 
                    } else if (routeName === 'FlightDeals') {
                      return { display: "none" } 
                    } else if (routeName === 'MembershipScreen') {
                      return { display: "none" } 
                    } else if (routeName === 'ItemRedemptionScreen') {
                      return { display: "none" } 
                    } else if (routeName === 'MembershipSelctionScreen') {
                      return { display: "none" } 
                    } return
                  })(route),
                })}
            />
            <Tab.Screen name="Discover" component={DiscoverScreen} />
            <Tab.Screen name="Pay" component={PaymentScreen} />
            <Tab.Screen name="Wallet" component={WalletScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />
          </Tab.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
    </SearchFlightContextProvider>
  );
}
