import { View } from 'react-native'
import React from 'react'
import CategoryCard from './categoryCard'
import style from './style'
import { categoryListe } from 'utils/helper'
export function Category() {
    return (
        <View style={style.container}>
            {
                categoryListe.map((item) => <CategoryCard key={item.key} category={item} />)
            }
        </View>
    )
}