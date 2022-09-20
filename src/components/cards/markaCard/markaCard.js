import { View, Text, Image } from 'react-native'
import React from 'react'
import style from './style'
import IconI from "react-native-vector-icons/Ionicons";
import colors from 'assets/colors/colors';
import IconF from 'react-native-vector-icons/Fontisto';
import Stars from 'react-native-stars';
import Lottie from 'lottie-react-native';
export default function MarkaCard({ products }) {
    const random = Math.floor(Math.random() * 10)
    return (
        <View style={style.container}>
            <Image source={{ uri: products.image }} style={style.cardImage} />
            <View style={style.favoriContainer}>
                <IconI
                    name="heart"
                    size={18}
                    color={colors.lightGrey}
                />
            </View>
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
            <Text style={style.price}>{products.price} TL</Text>
            <Lottie style={style.lottie} source={require('assets/images/colorOptions.json')} autoPlay loop />
            <Text style={style.random}>({random})</Text>
        </View>
    )
}