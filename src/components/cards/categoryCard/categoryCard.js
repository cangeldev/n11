import { View, Text, Image } from 'react-native'
import React from 'react'
import style from './style'
export default function CategoryCard({ category }) {
  return (
    <View>
      <Image
        source={category.value}
        style={style.image}
      />
      <Text
        style={style.text}>
        {category.text}
      </Text>
    </View>
  )
}