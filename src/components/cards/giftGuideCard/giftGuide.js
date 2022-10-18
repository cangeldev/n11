import { View, Text } from 'react-native'
import React from 'react'
import { GiftGuideImages } from 'utils/helper'
import GiftGuideCard from './giftGuideCard'
import style from './style'
export function GiftGuide() {
    return (
        <View style={style.container}>
            {
                GiftGuideImages.slice(0, 5).map((item) => <GiftGuideCard key={item.id} list={item} color="white" />)
            }
            <View style={style.line} />
            <Text style={style.divider}>
                ya da
            </Text>
            <Text style={style.viewTitle}>
                Kategori seç, hediyeni bulalım
            </Text>
            {
                GiftGuideImages.slice(5, 7).map((item) => <GiftGuideCard key={item.id} list={item} color="white" />)
            }
        </View>
    )
}