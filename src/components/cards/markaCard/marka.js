import { ImageBackground, ScrollView, Image } from 'react-native'
import React from 'react'
import style from './style'
import useFetch from 'hooks/useFetch/useFetch'
import MarkaCard from './markaCard'
import { marka } from 'utils/helper'
export default function Marka({ backgroundPath }) {

    const { products, error, loading } = useFetch()
    return (
        <ImageBackground style={style.image} source={backgroundPath}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    products.slice(15, 20).map((item) => <MarkaCard key={item.id} products={item} />)
                }
            </ScrollView>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    marka.map((item) => <Image key={item.key} source={item.value} style={{ width: 100, height: 100, margin: 6 }} />)
                }
            </ScrollView>
        </ImageBackground>
    )
}