import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import style from './style'
import colors from 'assets/colors/colors'
import { Header } from 'components/header'
import { FocusAwareStatusBar } from 'components/focusAwareStatusBar'
import Category from 'components/cards/categoryCard/category'
export function CategoryScreen() {
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