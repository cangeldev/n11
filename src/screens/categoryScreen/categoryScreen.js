import { View, Text, StatusBar, Image } from 'react-native'
import React from 'react'
import style from './style'
import colors from 'assets/colors/colors'
import Header from 'components/header/header'
export default function CategoryScreen() {
  return (
    <View style={style.container}>      
      <Header/>
      <StatusBar backgroundColor={colors.statusBarBackground} />
      <Text style={style.title}>Kategoriler</Text>
      <View style={{flexDirection:"row"}}>
    
      
      </View>
    </View>
  )
}