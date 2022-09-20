import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import colors from 'assets/colors/colors'
import IconI from "react-native-vector-icons/Ionicons";
import IconE from "react-native-vector-icons/Entypo";
import style from './style';
export default function Adress() {
  return (
    <TouchableWithoutFeedback onPress={() => { console.log("asdas") }}>
      <View style={style.adressContainer}>
        <IconI
          name="md-location-outline"
          size={20}
          color={colors.black}
          style={{ marginLeft: 8 }} />
        <Text style={style.adressTxt}>
          Düzce - Düzce Merkez
        </Text>
        <IconE
          name="chevron-small-right"
          size={22}
          color={colors.black}
          style={style.iconE} />
      </View>
    </TouchableWithoutFeedback>
  )
}