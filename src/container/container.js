import { Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from 'assets/colors/colors';
import IconI from "react-native-vector-icons/Ionicons";
import { Home, HomeFocused, Search, User, UserFocused } from 'assets'
import SystemNavigationBar from 'react-native-system-navigation-bar';
import { AccountSettingsPages, CouponPages, FeedbackPages, FollowStorePages, GiftGuidePages, HelpPages, MyComments, MyFriendsPages, MyGaragePages, MyOrders, MyQuestionsPages, NotificationSettingsPages, NotificationsPages, ProductsFromAbroadPages, ShareWinPages } from 'pages';
import { AccountScreen, CategoryScreen, HomeScreen, ListsScreen, ShopingCartScreen } from 'screens';
import { AboutUsPages } from 'pages/aboutUsPages';
SystemNavigationBar.setNavigationColor(colors.white);
export function Container() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
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
              <Image
                source={HomeFocused}
                style={{
                  width: 22,
                  height: 22,
                  tintColor: color
                }} /> :
              <Image
                source={Home}
                style={{
                  width: 22,
                  height: 22,
                  tintColor: color
                }} />,
          }} />
        <Tab.Screen
          name="Kategoriler"
          component={CategoryScreen}
          options={{
            tabBarIcon: ({ color, focused }) => focused ?
              (<IconI
                name="grid"
                color={color}
                size={24}
              />) :
              (<IconI
                name="grid-outline"
                color={color}
                size={24}
              />),
          }} />
        <Tab.Screen
          name="Sepetim"
          component={ShopingCartScreen}
          options={{
            tabBarIcon: ({ color, focused }) => focused ?
              (<IconI
                name="cart"
                color={color}
                size={26}
              />) :
              (<IconI
                name="cart-outline"
                color={color}
                size={26}
              />),
          }} />
        <Tab.Screen
          name="Listelerim"
          component={ListsScreen}
          options={{
            tabBarIcon: ({ color, focused }) => focused ?
              (<IconI
                name="heart-sharp"
                color={color}
                size={26}
              />) :
              (<IconI
                name="heart-outline"
                color={color}
                size={26}
              />),
          }} />
        <Tab.Screen
          name="Hesab??m"
          component={AccountStackScreen}
          options={{
            tabBarIcon: ({ color, focused }) => focused ?
              <Image
                source={UserFocused}
                style={{
                  width: 22,
                  height: 22,
                  tintColor: color
                }} /> :
              <Image
                source={User}
                style={{
                  width: 22,
                  height: 22,
                  tintColor: color
                }} />,
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
const AccountStack = createNativeStackNavigator();
function AccountStackScreen() {
  return (
    <AccountStack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <AccountStack.Screen
        name="AccountScreen"
        component={AccountScreen}
      />
      <AccountStack.Screen
        options={{
          title: "Hesap Ayarlar??m",
          headerShown: "true"
        }}
        name="AccountSettingsPages"
        component={AccountSettingsPages}
      />
      <AccountStack.Screen
        options={{
          title: "Kuponlar??m",
          headerShown: "true"
        }}
        name="CouponPages"
        component={CouponPages}
      />
      <AccountStack.Screen
        options={{
          title: "Sipari??lerim",
          headerShown: "true"
        }}
        name="MyOrders"
        component={MyOrders}
      />
      <AccountStack.Screen
        options={{
          title: "Yorumlar??m",
          headerShown: "true"
        }}
        name="MyComments"
        component={MyComments}
      />
      <AccountStack.Screen
        options={{
          title: "Payla?? Kazan",
          headerTitleAlign: "center",
          headerShown: "true"
        }}
        name="ShareWinPages"
        component={ShareWinPages}
      />
      <AccountStack.Screen
        options={{
          title: "Bildirimlerim",
          headerShown: "true",
          headerRight: () => (
            <Image
              source={Search}
              style={{
                width: 21,
                height: 21,
                tintColor: colors.black
              }} />),
        }}
        name="NotificationsPages"
        component={NotificationsPages}
      />
      <AccountStack.Screen
        options={{
          title: "Garaj??m",
          headerShown: "true",
          headerRight: () => (
            <Image
              source={Search}
              style={{
                width: 21,
                height: 21,
                tintColor: colors.black
              }} />),
        }}
        name="MyGaragePages"
        component={MyGaragePages}
      />
      <AccountStack.Screen
        options={{
          title: "pet11'e Kay??tl?? Dostlar??m",
          headerShown: "true",
          headerRight: () => (
            <Image
              source={Search}
              style={{
                width: 21,
                height: 21,
                tintColor: colors.black
              }} />),
        }}
        name="MyFriendsPages"
        component={MyFriendsPages}
      />
      <AccountStack.Screen
        options={{
          title: "??r??n Sorular??m",
          headerShown: "true",
          headerRight: () => (
            <Image
              source={Search}
              style={{
                width: 21,
                height: 21,
                tintColor: colors.black
              }} />),
        }}
        name="MyQuestionsPages"
        component={MyQuestionsPages}
      />
      <AccountStack.Screen
        options={{
          title: "Takip Etti??im Ma??azalar",
          headerShown: "true",
        }}
        name="FollowStorePages"
        component={FollowStorePages}
      />
      <AccountStack.Screen
        options={{
          title: "Hakk??m??zda",
          headerShown: "true",
          headerRight: () => (
            <Image
              source={Search}
              style={{
                width: 21,
                height: 21,
                tintColor: colors.black
              }} />),
        }}
        name="AboutUsPages"
        component={AboutUsPages}
      />
      <AccountStack.Screen
        options={{
          title: "Yard??m",
          headerShown: "true",
          headerRight: () => (
            <Image
              source={Search}
              style={{
                width: 21,
                height: 21,
                tintColor: colors.black
              }} />),
        }}
        name="HelpPages"
        component={HelpPages}
      />
      <AccountStack.Screen
        options={{
          title: "Geri Bildirim",
          headerShown: "true",
          headerRight: () => (
            <Image
              source={Search}
              style={{
                width: 21,
                height: 21,
                tintColor: colors.black
              }} />),
        }}
        name="FeedbackPages"
        component={FeedbackPages}
      />
      <AccountStack.Screen
        options={{
          title: "Bildirim Ayarlar??n",
          headerShown: "true",
        }}
        name="NotificationSettingsPages"
        component={NotificationSettingsPages}
      />
      <AccountStack.Screen

        name="ProductsFromAbroadPages"
        component={ProductsFromAbroadPages}
      />
      <AccountStack.Screen
        options={{
          title: "Hediye Rehberi",
          headerShown: "true",
          headerRight: () => (
            <Image
              source={Search}
              style={{
                width: 21,
                height: 21,
                tintColor: colors.black
              }} />),
        }}
        name="GiftGuidePages"
        component={GiftGuidePages}
      />
    </AccountStack.Navigator>);
}