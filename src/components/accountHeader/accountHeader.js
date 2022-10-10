import { View, Text } from 'react-native'
import React from 'react'
import style from './style'
import colors from 'assets/colors/colors'
import IconI from "react-native-vector-icons/Ionicons";
export function AccountHeader({ title }) {
  return (
    <View
      style={style.container}>
      <Text
        style={style.headerTitle}>
        {title}
      </Text>
      <IconI
        name="search"
        color={colors.black}
        size={24}
      />
    </View>
  )
}