import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import FocusAwareStatusBar from 'components/focusAwareStatusBar/focusAwareStatusBar'
import colors from 'assets/colors/colors'
import { advertising } from 'assets'
import style from './style'
import { infoList } from 'utils/helper'
import InfoCard from 'components/cards/infoCard/infoCard'
import TouchButton from 'components/button/button'
export function ShareWinPages() {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: colors.white }} showsVerticalScrollIndicator={false}>
            <FocusAwareStatusBar barStyle="dark-content" backgroundColor={colors.white} />
            <Image source={advertising} style={style.image} />
            <Text style={style.text}>5.000 TL'ye Varan Kupon Kazanmak için {"\n"} Hemen Paylaşmaya Başla!</Text>
            <View style={style.line} />
            <Text style={style.text}>Ürünleri Paylaşarak Kupon Kazan </Text>
            <Text style={style.textInfo}>n11'deki ürünleri arkadaşlarınla paylaş, {"\n"} paylaştığın ürünler satıldıkça indirim kuponu kazan.</Text>
            {
                infoList.slice(0, 2).map((item) => <InfoCard key={item.id} menu={item} />)
            }
            <TouchButton title={"Ürünlere Git"} />
            <Text style={style.text}>Listeleri Paylaşarak Kupon Kazan </Text>
            <Text style={style.textInfo}>n11'de listeler yap ve arkadaşlarınla paylaş, listedeki{"\n"}ürünler satıldıkça indirim kuponu kazan.</Text>
            {
                infoList.slice(2, 4).map((item) => <InfoCard key={item.id} menu={item} />)
            }
            <TouchButton title={"Listelere Git"} />
        </ScrollView>
    )
}