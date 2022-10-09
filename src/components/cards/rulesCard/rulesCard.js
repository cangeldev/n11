import { View, Text } from 'react-native'
import React from 'react'
import style from './style'
export default function RulesCard({ rules }) {
    return (
        <View style={style.container}>
            <Text style={style.marker}>
                •
            </Text>
            <Text style={style.text}>
                {rules.text}
            </Text>
        </View>
    )
}