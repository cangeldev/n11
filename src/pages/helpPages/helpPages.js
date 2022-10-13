import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import style from './style'
import { Help } from 'components/cards'
import { Cargo, CreditCard, Go, GoBackArrow, L13, Man, Padlock, Synchronize } from 'assets'
import colors from 'assets/colors/colors'
export function HelpPages() {
    return (
        <ScrollView style={style.container}>
            <View style={style.headerView}>
                <Text style={style.headerTitle}>
                    Sık Sorular Sorular
                </Text>
                <Text style={style.headerText}>
                    Yardım almak istediğiniz konuyla ilgili bilgiyi Sık Sorulan Sorularda bulabilirsiniz.
                </Text>
            </View>
            <View style={style.contentView}>
                <Help
                    start={0}
                    finish={3}
                    image={Man}
                    title="Üyelik"
                />
            </View>
            <View style={style.contentView}>
                <Help
                    start={3}
                    finish={6}
                    image={Cargo}
                    title="Kargo Teslimat"
                />
            </View>
            <View style={style.contentView}>
                <Help
                    start={6}
                    finish={11}
                    image={GoBackArrow}
                    title="Satın Alma Öncesi"
                />
            </View>
            <View style={style.contentView} >
                <Help
                    start={11}
                    finish={19}
                    image={Synchronize}
                    title="İade, Değişim"
                />
            </View>
            <View style={style.contentView} >
                <Help
                    start={19}
                    finish={23}
                    image={Go}
                    title="Satın Alma Sonrası"
                />
            </View>
            <View style={style.contentView} >
                <Help
                    start={23}
                    finish={24}
                    image={L13}
                    title="Avantajlar, Kampanyalar"
                />
            </View>
            <View style={style.contentView} >
                <Help
                    start={24}
                    finish={26}
                    image={CreditCard}
                    title="Ödeme"
                />
            </View>
            <View style={style.contentView} >
                <Help
                    start={26}
                    finish={28}
                    image={Padlock}
                    title="Kullanıcı Güvenliği"
                />
            </View>
            <View style={style.footerView}>
                <Text style={style.footerTitle}>
                    7/24 Canlı Destek
                </Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={style.footerText}>
                        Alışverişle ilgili tüm sorularınız için
                    </Text>
                    <Text style={([style.footerText, { color: colors.blue }])}>
                        bize ulaşın
                    </Text>
                </View>
            </View>

        </ScrollView>
    )
}