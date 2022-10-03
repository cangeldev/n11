import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import FocusAwareStatusBar from 'components/focusAwareStatusBar/focusAwareStatusBar'
import colors from 'assets/colors/colors'
import style from './style'
import CouponButton from 'components/couponButton/couponButton'
export default function CouponPages() {
    return (
        <View style={style.container}>
            <View style={style.header}>
                <FocusAwareStatusBar barStyle="dark-content" backgroundColor={colors.white} />
                <TextInput style={style.txtInput} placeholder="Kupon kodu girin" />
                <TouchableOpacity style={style.headerButton}>
                    <Text style={style.headerText}>Ekle</Text>
                </TouchableOpacity>
            </View>
           <View style={style.contentView}>
           <CouponButton title={"Aktif Kuponlarım (3)"}/>
            <CouponButton title={"Aktif Olacak Kuponlarım (0)"}/>
           </View>
        </View>
    )
}