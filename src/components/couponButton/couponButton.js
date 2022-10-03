import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import style from './style'
export default function CouponButton({title}) {
    return (
       
            <TouchableOpacity style={style.button}>
                <Text style={style.text}>{title}</Text>
            </TouchableOpacity>
    
    )
}