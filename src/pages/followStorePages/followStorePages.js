import { View, Text, Image } from 'react-native'
import React from 'react'
import { ShopingCartScreenButton } from 'components/customButtons'
import colors from 'assets/colors/colors'
import { FocusAwareStatusBar } from 'components'
import style from './style'
import { followStorePages } from 'assets'

export function FollowStorePages() {
    return (
        <View style={style.container}>
            <FocusAwareStatusBar
                barStyle="dark-content"
                backgroundColor={colors.white}
            />
            <Image
                style={style.image}
                source={followStorePages}
            />
            <Text style={style.title}>
                Takip Ettiğin Mağaza Yok
            </Text>
            <Text style={style.text}>
                Mağazaları ürün veya ürün veya mağaza sayfasından takip edebilirsin.
            </Text>
            <View style={style.button}>
                <ShopingCartScreenButton title="Hadi Keşfet" />
            </View>
        </View>
    )
}