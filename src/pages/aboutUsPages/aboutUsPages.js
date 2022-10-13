import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import style from './style'
import { N11 } from 'assets'
import { AboutUs } from 'components/cards'
import { FocusAwareStatusBar } from 'components'
import colors from 'assets/colors/colors'
import { ShopingCartScreenButton } from 'components/customButtons'
export function AboutUsPages() {
    return (
        <View style={style.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <FocusAwareStatusBar
                    barStyle="dark-content"
                    backgroundColor={colors.white}
                />
                <View style={style.headerView}>
                    <Image
                        source={N11}
                        style={style.image}
                    />
                    <Text style={style.headerViewText}>
                        Can Gel tarafından Eğitim amaçlı hazırlanmıştır.
                    </Text>
                    <Text style={style.headerViewText}>
                        Versiyon:14.4.0
                    </Text>
                </View>
                <View style={style.contentView}>
                    <Text style={style.contentViewTitle}>
                        n11, Doğuş Grubu ile Güney Kore'nin en büyük teknoloji gruplarından SK Group'un ortaklığında kurulmuştur.
                    </Text>
                    <AboutUs />
                </View>
                <Text style={style.text}>
                    © Telif hakkı 2012-2022 n11
                </Text>
                <Text style={style.infoText}>
                    Gizlilik Politikası
                </Text>
                <Text style={[style.infoText, { marginBottom: 15 }]}>
                    Yatırımcı İlişkileri
                </Text>
            </ScrollView>
            <View style={style.buttonView}>
                <ShopingCartScreenButton title="n11 Uygulamasını Değerlendir" />
            </View>
        </View>
    )
}