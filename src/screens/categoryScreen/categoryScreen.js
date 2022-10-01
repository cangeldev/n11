import { View, Text, StatusBar, Image } from 'react-native'
import React from 'react'
import style from './style'
import colors from 'assets/colors/colors'
import Header from 'components/header/header'
import Category from 'components/cards/categoryCard/category'
import FocusAwareStatusBar from 'components/focusAwareStatusBar/focusAwareStatusBar'
export default function CategoryScreen() {
  return (
    <View style={style.container}>
      <Header />
      <StatusBar backgroundColor={colors.statusBarBackground} />
      <FocusAwareStatusBar barStyle="light-content" backgroundColor={colors.statusBarBackground} />
      <Text style={style.title}>Kategoriler</Text>
      <Category />
    </View>
  )
}