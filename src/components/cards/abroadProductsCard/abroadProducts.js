import { View } from 'react-native'
import React from 'react'
import style from './style'
import useFetch from 'hooks/useFetch/useFetch'
import AbroadProductsCard from './abroadProductsCard'
export function AbroadProducts() {
    const { products, loading, error } = useFetch()
    return (
        <View style={style.container}>
            {
                products.map((item) => <AbroadProductsCard key={item.id} products={item} />)
            }
        </View>
    )
}