import { View, Text, Image } from 'react-native'
import React from 'react'
import style from './style'
import { Garage } from 'assets'
import { FocusAwareStatusBar } from 'components'
import colors from 'assets/colors/colors'
import { ShopingCartScreenButton } from 'components/customButtons'
export function MyGaragePages() {
    return (
        <View style={style.container}>
            <FocusAwareStatusBar
                barStyle="dark-content"
                backgroundColor={colors.white}
            />
            <Image
                source={Garage}
                style={style.image}
            />
            <Text style={style.title}>
                Garajınızda Araç{"\n"}Bulunmuyor.
            </Text>
            <Text style={style.text}>
                Aracınızın özelliklerini girin, uyumlu parçaları kolayca bulun.
            </Text>
            <View style={style.button}>
                <ShopingCartScreenButton title="Yeni Araç Ekle" />
            </View>
        </View>
    )
}