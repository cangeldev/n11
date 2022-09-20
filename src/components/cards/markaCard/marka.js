import { View, ImageBackground, ScrollView, Image } from 'react-native'
import React from 'react'
import style from './style'
import useFetch from 'hooks/useFetch/useFetch'
import MarkaCard from './markaCard'
import { Adidas, Flo, Hasbro, Mavi, Nivea, Nike } from 'assets'
export default function Marka({ backgroundPath }) {
    const deneme = [{ key: 1, value: Hasbro },
    { key: 2, value: Nike },
    { key: 3, value: Nivea },
    { key: 4, value: Flo },
    { key: 5, value: Mavi },
    { key: 6, value: Hasbro }]
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
                    deneme.map((item) => <Image key={item.key} source={item.value} style={{ width: 100, height: 100,margin:6 }} />)
                }
            </ScrollView>

        </ImageBackground>
    )
}