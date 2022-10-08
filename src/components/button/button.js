import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import style from './style'
export default function TouchButton({title}) {
  return (
    <TouchableOpacity style={style.touchableOpacity}>
    <Text style={style.touchText}>
      {title}
    </Text>
  </TouchableOpacity>
  )
}