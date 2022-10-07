import { View, Text, Image } from 'react-native'
import React from 'react'
import style from './style'
import AccountHeader from 'components/accountHeader/accountHeader'
import { L1 } from 'assets'
import colors from 'assets/colors/colors'
import IconO from "react-native-vector-icons/Octicons";
import LinearGradient from 'react-native-linear-gradient';
import ListScreenCard from 'components/cards/listScreenCard/listScreenCard'
import FocusAwareStatusBar from 'components/focusAwareStatusBar/focusAwareStatusBar'
export function ListsScreen() {
    return (
        <View style={style.container}>
            <AccountHeader title={"Listelerim"} />
            <FocusAwareStatusBar barStyle="dark-content" backgroundColor={colors.white} />
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#c9ddfe', '#d8e8ff', '#e3f0ff']} style={style.linearGradient}>
                <Image source={L1} style={style.image} />
                <View style={{ marginLeft: 15 }}>
                    <Text style={style.linearText}>"Paylaş Kazan" ile listelerini istediğin  {"\n"} kişilerle paylaş, kupon kazanma fırsatını  {"\n"} yakala.</Text>
                    <View style={style.linearView}>
                        <Text style={style.linearViewText}>Detayları Gör</Text>
                        <IconO style={style.linearViewIcon} name={"chevron-right"} color={colors.grey} size={17} />
                    </View>
                </View>
            </LinearGradient>
            <ListScreenCard
                title={"Favori Listem"}
                icon={"heart"}
                textOne={"Favorilerinizde ürün bulunmuyor."}
                textTwo={"Beğendiğiniz ürünleri hemen eklemeye başlayın."} />
            <ListScreenCard
                title={"Alarm Listem"}
                icon={"notifications"}
                textOne={"Fiyat Alarmı Kurun Fırsatları Kaçırmayın."}
                textTwo={"Beğendiğiniz ürün için fiyat belirleyip alarm kurun, \n ürün belirlediğiniz fiyata gelince haberiniz olsun."} />
        </View>
    )
}