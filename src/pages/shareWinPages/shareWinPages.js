import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import colors from 'assets/colors/colors'
import { advertising } from 'assets'
import style from './style'
import { infoCollapsible, infoList, rulesList } from 'utils/helper'
import CollapsibleViewCard from 'components/cards/collapsibleViewCard/collapsibleViewCard'
import { FocusAwareStatusBar } from 'components/focusAwareStatusBar'
import { ShopingCartScreenButton } from 'components/customButtons'
import { InfoCard, RulesCard } from 'components/cards'
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
            <ShopingCartScreenButton title={"Ürünlere Git"} />
            <Text style={style.text}>Listeleri Paylaşarak Kupon Kazan </Text>
            <Text style={style.textInfo}>n11'de listeler yap ve arkadaşlarınla paylaş, listedeki{"\n"}ürünler satıldıkça indirim kuponu kazan.</Text>
            {
                infoList.slice(2, 4).map((item) => <InfoCard key={item.id} menu={item} />)
            }
            <ShopingCartScreenButton title={"Listelere Git"} />
            <View style={style.infoView}>
                <Text style={style.infoViewTitle}>Sıkça Sorulan Kampanya Soruları</Text>
                <Text style={style.infoViewText}>Kampanya hakkındaki bütün detaylar ve aklınıza{"\n"}takılabilecek soruların cevaplarına aşağıdan{"\n"}ulaşabilirsiniz.</Text>
            </View>
            <View style={style.card}>
                {
                    infoCollapsible.map((item) => <CollapsibleViewCard info={item} />)
                }
            </View>
            <View style={style.rulesCard}>
                {
                    rulesList.map((item) => <RulesCard rules={item} />)
                }
            </View>
        </ScrollView>
    )
}