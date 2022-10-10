import { View, TextInput, Image } from 'react-native'
import React from 'react'
import IconI from "react-native-vector-icons/Ionicons";
import style from './style'
import colors from 'assets/colors/colors';
import { HeaderIcon } from 'assets';
export function Header() {
    return (
        <View style={style.container}>
            <TextInput placeholder='Ürün, kategori, marka ara' style={style.txtInput} />
            <View style={style.notificationsView}>
                <IconI name="notifications" color={colors.white} size={26} />
            </View>
            <View style={style.imageView}>
                <Image source={HeaderIcon} style={style.image} />
            </View>
            <IconI style={style.search} name="search" color={colors.white} size={20} />
        </View>
    )
}