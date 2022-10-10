import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from 'assets/colors/colors'
import style from './style'
import { FocusAwareStatusBar } from 'components/focusAwareStatusBar'
import { CouponPagesButton } from 'components/customButtons'
export function CouponPages() {
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
                <CouponPagesButton title="Aktif Kuponlarım (3)" />
                <CouponPagesButton title="Aktif Olacak Kuponlarım (0)" />
            </View>
        </View>
    )
}