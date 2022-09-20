import { View, Text, Image } from 'react-native'
import React from 'react'
import style from './style'
import IconF from 'react-native-vector-icons/Fontisto';
import Stars from 'react-native-stars';
export default function RecommendedProductsCard({ products }) {
    const random = Math.floor(Math.random() * 10)
    return (
        <View style={style.container}>
            <Image source={{ uri: products.image }} style={style.cardImage} />

            <Text numberOfLines={2} style={style.productsTitle}>{products.title}</Text>
            <View style={style.rateView}>
                <Stars
                    half={true}
                    default={products.rating.rate}
                    spacing={4}
                    starSize={40}
                    count={5}
                    disabled={true}
                    fullStar={<IconF name={'star'} style={[style.myStarStyle]} />}
                    emptyStar={<IconF name={'star'} style={[style.myStarStyle, style.myEmptyStarStyle]} />}
                    halfStar={<IconF name={'star-half'} style={[style.myStarStyle]} />} />
                <Text style={style.count}>({products.rating.count})</Text>
            </View>
            <Text style={style.lastPrice}>{products.price + (random * 100 + 1)} TL</Text>
            <Text style={style.price}>{products.price} TL</Text>
            <Text style={style.text}>Ücretsiz Kargo</Text>
        </View>
    )
}