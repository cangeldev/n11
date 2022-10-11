import { View } from 'react-native'
import React from 'react'
import { infoList } from 'utils/helper'
import { InfoCard } from './infoCard'
export function Info({ a, b }) {
    return (
        <View>
            {
                infoList.slice(a, b).map((item) => <InfoCard key={item.id} menu={item} />)
            }
        </View>
    )
}