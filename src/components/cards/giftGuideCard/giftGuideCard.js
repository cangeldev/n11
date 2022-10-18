import { View, Text, Image } from 'react-native'
import React from 'react'
import style from './style'
export default function GiftGuideCard({ list, color }) {
    return (
        <View style={style.cardContainer}>
            <Image
                style={style.image}
                source={list.image}
            />
            <Text style={[style.name, { color: color }]}>
                {list.name}
            </Text>
        </View>
    )
}