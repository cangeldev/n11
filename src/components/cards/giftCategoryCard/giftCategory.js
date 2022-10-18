import { View, Text } from 'react-native'
import React from 'react'
import style from './style'
import { GiftCategoryList } from 'utils/helper'
import GiftCategoryCard from './giftCategoryCard'
export function GiftCategory() {
    return (
        <View style={style.container}>
            <Text style={style.name}>
                Tüm Hediye Kategorileri
            </Text>
            {
                GiftCategoryList.map((item) => <GiftCategoryCard key={item.id} list={item} />)
            }
        </View>
    )
}