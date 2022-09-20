import { View, StatusBar, ScrollView, Image } from 'react-native'
import React from 'react'
import style from './style'
import colors from 'assets/colors/colors'
import Header from 'components/header/header'
import Adress from 'components/adress/adress'
import { Firsat, Kampanya, Kupon, Ma1, Ma2, Ma3, Ma4, Ma5, Reklam, Saatlik } from 'assets'
import Slider from 'components/slider/slider'
import Menu from 'components/cards/menuCard/menu'
import HeaderMenuCard from 'components/cards/headerMenuCard/headerMenuCard'
import Products from 'components/cards/productsCard/products'
import Marka from 'components/cards/markaCard/marka'

export default function HomeScreen() {
    return (
        <View style={style.container}>
            <ScrollView stickyHeaderIndices={[0]}>
                <Header />
                <StatusBar backgroundColor={colors.statusBarBackground} />
                <Adress />
                <View style={style.headerMenu}>
                    <HeaderMenuCard path={Kupon} text={"Kuponlar"} />
                    <HeaderMenuCard path={Saatlik} text={"Saatlik Fırsat"} />
                    <HeaderMenuCard path={Kampanya} text={"Kampanyalar"} />
                    <HeaderMenuCard path={Firsat} text={"Fırsat Ürünleri"} />
                </View>
                <Slider />
                <View style={{ backgroundColor: "#eeeff3" }}>
                    <Image source={Reklam} style={style.reklam} />
                </View>
                <Menu />
                <Products title={"Süper Fırsatlar"} />
                <Marka backgroundPath={Ma1} />
                <Products title={"Sana Özel Önerilerimiz"} />
                <Marka backgroundPath={Ma2} />
                <Marka backgroundPath={Ma3} />
                <Products title={"Süper Fırsatlar"} />
                <Marka backgroundPath={Ma4} />
                <Marka backgroundPath={Ma5} />
            </ScrollView>
        </View>
    )
}