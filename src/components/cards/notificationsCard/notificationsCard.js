import { View, Text, Image } from 'react-native'
import React from 'react'
import style from './style'
import { Close } from 'assets'
export default function NotificationsCard({ list }) {
    return (
        <View style={style.container}>
            <Text style={style.text}>
                {list.text}
            </Text>
            <Text style={style.date}>
                {list.date}
            </Text>
            <Image
                source={Close}
                style={style.closeIcon}
            />
        </View>
    )
}