import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import style from './style'
export function ShopingCartScreenButton({ title }) {
  return (
    <TouchableOpacity
      style={style.touchableOpacity}>
      <Text
        style={style.touchableText}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}