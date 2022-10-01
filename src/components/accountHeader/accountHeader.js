import { View, Text } from 'react-native'
import React from 'react'
import style from './style'
import colors from 'assets/colors/colors'
import IconI from "react-native-vector-icons/Ionicons";
export default function AccountHeader({ title }) {
  return (
    <View style={style.header}>
      <Text style={style.headerTitle}>{title}</Text>
      <IconI name="search" color={colors.black} size={24} />
    </View>
  )
}