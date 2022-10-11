import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import style from './style'
import colors from 'assets/colors/colors'
import { FocusAwareStatusBar, Header } from 'components'
import { Category } from 'components/cards'
export function CategoryScreen() {
  return (
    <View style={style.container}>
      <Header />
      <StatusBar backgroundColor={colors.statusBarBackground} />
      <FocusAwareStatusBar
        barStyle="light-content"
        backgroundColor={colors.statusBarBackground} />
      <Text style={style.title}>
        Kategoriler
      </Text>
      <Category />
    </View>
  )
}