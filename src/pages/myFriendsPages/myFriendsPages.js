import { View, Text, Image } from 'react-native'
import React from 'react'
import style from './style'
import { FocusAwareStatusBar } from 'components'
import colors from 'assets/colors/colors'
import { friendPages } from 'assets'
import { ShopingCartScreenButton } from 'components/customButtons'
export function MyFriendsPages() {
    return (
        <View style={style.container}>
            <FocusAwareStatusBar
                barStyle="dark-content"
                backgroundColor={colors.white}
            />
            <Image
                style={style.image}
                source={friendPages}
            />
            <Text style={style.title}>
                Henüz pet11'e kayıtlı dostun yok.
            </Text>
            <Text style={style.text}>
                Hemen can dostunu kaydet, ona uygun ürünleri daha kolay bul.
            </Text>
            <View style={style.button}>
                <ShopingCartScreenButton title="Şimdi Kaydet" />
            </View>
        </View>
    )
}