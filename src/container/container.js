import { Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from 'assets/colors/colors';
import IconI from "react-native-vector-icons/Ionicons";
import { Home, HomeFocused, Search, User, UserFocused } from 'assets'
import SystemNavigationBar from 'react-native-system-navigation-bar';
import { AccountSettingsPages, CouponPages, FeedbackPages, FollowStorePages, HelpPages, MyComments, MyFriendsPages, MyGaragePages, MyOrders, MyQuestionsPages, NotificationSettingsPages, NotificationsPages, ProductsFromAbroadPages, ShareWinPages } from 'pages';
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
          name="Hesabım"
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
          title: "Hesap Ayarlarım",
          headerShown: "true"
        }}
        name="AccountSettingsPages"
        component={AccountSettingsPages}
      />
      <AccountStack.Screen
        options={{
          title: "Kuponlarım",
          headerShown: "true"
        }}
        name="CouponPages"
        component={CouponPages}
      />
      <AccountStack.Screen
        options={{
          title: "Siparişlerim",
          headerShown: "true"
        }}
        name="MyOrders"
        component={MyOrders}
      />
      <AccountStack.Screen
        options={{
          title: "Yorumlarım",
          headerShown: "true"
        }}
        name="MyComments"
        component={MyComments}
      />
      <AccountStack.Screen
        options={{
          title: "Paylaş Kazan",
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
          title: "Garajım",
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
          title: "pet11'e Kayıtlı Dostlarım",
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
          title: "Ürün Sorularım",
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
          title: "Takip Ettiğim Mağazalar",
          headerShown: "true",
        }}
        name="FollowStorePages"
        component={FollowStorePages}
      />
      <AccountStack.Screen
        options={{
          title: "Hakkımızda",
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
          title: "Yardım",
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
          title: "Bildirim Ayarların",
          headerShown: "true",
        }}
        name="NotificationSettingsPages"
        component={NotificationSettingsPages}
      />
      <AccountStack.Screen

        name="ProductsFromAbroadPages"
        component={ProductsFromAbroadPages}
      />
    </AccountStack.Navigator>);
}