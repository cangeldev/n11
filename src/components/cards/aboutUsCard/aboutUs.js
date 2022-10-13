import { View } from 'react-native'
import React from 'react'
import { aboutUsList } from 'utils/helper'
import AboutUsCard from './aboutUsCard'
import style from './style'
export function AboutUs() {
    return (
        <View style={style.container}>
            {
                aboutUsList.map((item) => <AboutUsCard key={item.id} list={item} />)
            }
        </View>
    )
}