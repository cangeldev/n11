import { View, Text, Image } from 'react-native'
import React from 'react'
import style from './style'
export default function MenuCard({ menu }) {
  return (
    <View style={style.container}>
      <Image source={menu.image} style={style.image} />
      <Text style={style.text}>{menu.name}</Text>
    </View>
  )
}