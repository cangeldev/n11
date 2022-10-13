import { View, Text, Image } from 'react-native'
import React from 'react'
import { AboutUsList1 } from 'assets'
import style from './style'
export default function AboutUsCard({ list }) {
    return (
        <View style={style.cardContainer}>
            <Image
                source={AboutUsList1}
                style={style.image} />
            <View style={{ width: 300 }}>
                <Text style={style.title}>
                    {
                        list.title
                    }
                </Text>
                <Text style={style.text}>
                    {
                        list.text
                    }
                </Text>
            </View>
        </View>
    )
}