import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import style from './style'
export function CouponPagesButton({ title }) {
    return (
        <TouchableOpacity
            style={style.container}>
            <Text
                style={style.text}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}