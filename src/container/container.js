import { Image } from 'react-native'
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
SystemNavigationBar.setNavigationColor(colors.white);
export default function Container() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarActiveTintColor: colors.tabBarIconBackground,
          tabBarInactiveTintColor: colors.grey,
          tabBarLabelStyle: {
            fontSize: 12,
            marginTop: 2,
            marginBottom: 4,
          },
          tabBarStyle: {
            backgroundColor: colors.white,
            borderTopWidth: 0.5,
            borderTopColor: colors.fafafa,
            height: 55,
            paddingTop: 5,
          },
        }}>
        <Tab.Screen name="Sepetim" component={ShopingCartScreen}
          options={{
            tabBarIcon: ({ color, focused }) => focused ?
              (<IconI name="cart" color={color} size={26} />) :
              (<IconI name="cart-outline" color={color} size={26} />),
          }} />


        <Tab.Screen name="Ana Sayfa" component={HomeScreen}
          options={{

            tabBarIcon: ({ color, focused }) => focused ?
              <Image source={HomeFocused} style={{ width: 22, height: 22,tintColor:color }} /> :
              <Image source={Home} style={{width:22,height:22,tintColor:color}} />,
          }} />
        <Tab.Screen name="Kategoriler" component={CategoryScreen}
          options={{
            tabBarIcon: ({ color, focused }) => focused ?
              (<IconI name="grid" color={color} size={24} />) :
              (<IconI name="grid-outline" color={color} size={24} />),
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
              <Image source={UserFocused} style={{ width: 23, height: 23,tintColor:color }} /> :
              <Image source={User} style={{ width: 23, height: 23,tintColor:color }} />,
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}