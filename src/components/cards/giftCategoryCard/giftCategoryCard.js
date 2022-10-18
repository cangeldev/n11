import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import style from './style'
export default function GiftCategoryCard({ list }) {
    return (
        <View style={style.cardContainer}>
            <Text style={style.title}>
                {list.name}
            </Text>
            <Image
                source={list.image}
                style={style.image}
            />
            <TouchableOpacity >
                <Text style={style.touchableText}>
                    Alışverişe Başla
                </Text>
            </TouchableOpacity>
        </View>
    )
}