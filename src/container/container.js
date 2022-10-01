import { Image, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CategoryScreen from 'screens/categoryScreen/categoryScreen';
import ShopingCartScreen from 'screens/shopingCartScreen/shopingCartScreen';
import ListsScreen from 'screens/listsScreen/listsScreen';
import AccountScreen from 'screens/accountScreen/accountScreen';
import colors from 'assets/colors/colors';
import IconI from "react-native-vector-icons/Ionicons";
import { Home, HomeFocused, User, UserFocused } from 'assets'
import SystemNavigationBar from 'react-native-system-navigation-bar';
import HomeScreen from 'screens/homeScreen/homeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
SystemNavigationBar.setNavigationColor(colors.white);
export default function Container() {
  const stack = createNativeStackNavigator();
  return (
    <View style={{ height: "100%", paddingTop: 24 }}>
      <NavigationContainer>
        <stack.Navigator screenOptions={{
          headerShown: false
        }}
          initialRouteName='TabNavigator'>
          <stack.Screen
            name='TabNavigator'
            component={TabNavigator}
          />
        </stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
function TabNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarActiveTintColor: colors.tabBarIconBackground,
        tabBarInactiveTintColor: colors.tabBarIconBackground,
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 2,
          fontFamily: "OpenSans-Medium",
        },
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopWidth: 0.5,
          borderTopColor: colors.fafafa,
        },
      }}>
      <Tab.Screen name="Ana Sayfa" component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => focused ?
            <Image source={HomeFocused} style={{ width: 22, height: 22, tintColor: color }} /> :
            <Image source={Home} style={{ width: 22, height: 22, tintColor: color }} />,
        }} />
      <Tab.Screen name="Kategoriler" component={CategoryScreen}
        options={{
          tabBarIcon: ({ color, focused }) => focused ?
            (<IconI name="grid" color={color} size={24} />) :
            (<IconI name="grid-outline" color={color} size={24} />),
        }} />
      <Tab.Screen name="Sepetim" component={ShopingCartScreen}
        options={{
          tabBarIcon: ({ color, focused }) => focused ?
            (<IconI name="cart" color={color} size={26} />) :
            (<IconI name="cart-outline" color={color} size={26} />),
        }} />
      <Tab.Screen name="Listelerim" component={ListsScreen}
        options={{
          tabBarIcon: ({ color, focused }) => focused ?
            (<IconI name="heart-sharp" color={color} size={26} />) :
            (<IconI name="heart-outline" color={color} size={26} />),
        }} />
      <Tab.Screen name="Hesabım" component={AccountScreen}
        options={{
          tabBarIcon: ({ color, focused }) => focused ?
            <Image source={UserFocused} style={{ width: 22, height: 22, tintColor: color }} /> :
            <Image source={User} style={{ width: 22, height: 22, tintColor: color }} />,
        }} />
    </Tab.Navigator>
  )
}