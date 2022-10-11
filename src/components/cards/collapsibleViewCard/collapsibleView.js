import { View } from 'react-native'
import React from 'react'
import style from './style'
import CollapsibleViewCard from './collapsibleViewCard'
import { infoCollapsible } from 'utils/helper'
export function CollapsibleView() {
    return (
        <View style={style.cardContainer}>
            {
                infoCollapsible.map((item) => <CollapsibleViewCard key={item.id} info={item} />)
            }
        </View>
    )
}