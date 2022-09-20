import { View, Text, Image } from 'react-native'
import React from 'react'
import style from './style'
export default function HeaderMenuCard({ path, text }) {
  return (
    <View style={style.container}>
      <Image source={path} style={style.image} />
      <Text style={style.text}>{text}</Text>
    </View>
  )
}