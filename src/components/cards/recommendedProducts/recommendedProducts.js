import { View, Text } from 'react-native'
import React from 'react'
import RecommendedProductsCard from './recommendedProductsCard'
import useFetch from 'hooks/useFetch/useFetch'
export default function RecommendedProducts() {
    const { products, error, loading } = useFetch()
    return (
        <View style={{ flexDirection: "row" }}>
            {
                products.slice(18, 20).map((item) => <RecommendedProductsCard key={item.id} products={item} />)
            }
        </View>
    )
}