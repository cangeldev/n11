import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import style from './style'
import { FocusAwareStatusBar } from 'components'
import colors from 'assets/colors/colors'
import { Bug, Idea, L4 } from 'assets'
export function FeedbackPages() {
    return (
        <View style={style.container}>
            <FocusAwareStatusBar
                barStyle="dark-content"
                backgroundColor={colors.white}
            />
            <Text style={style.title}>
                Görüş ve Önerilerinizi paylaşın.
            </Text>
            <TouchableOpacity style={style.touchable}>
                <Image
                    source={Idea}
                    style={{ width: 22, height: 22 }}
                />
                <Text style={style.text}>
                    Öneride Bulun
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.touchable}>
                <Image
                    source={Bug}
                    style={style.icon}
                />
                <Text style={style.text}>
                    Hata Bildir
                </Text>
            </TouchableOpacity>
            <Text style={style.title}>
                Hızlı çözüm için Canlı Destek ile iletişime geçin.
            </Text>
            <TouchableOpacity style={style.touchable}>
                <Image
                    source={L4}
                    style={style.icon}
                />
                <Text style={style.text}>
                    Yardım İste
                </Text>
            </TouchableOpacity>
        </View>
    )
}