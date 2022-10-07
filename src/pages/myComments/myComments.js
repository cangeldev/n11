import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import FocusAwareStatusBar from 'components/focusAwareStatusBar/focusAwareStatusBar'
import colors from 'assets/colors/colors'
import Dropdown from 'components/dropdown/dropdown'
import style from './style'
import IconE from "react-native-vector-icons/Entypo";
import { esya, L11, shoping } from 'assets'
export function MyComments() {
    return (
        <View style={style.container}>
            <FocusAwareStatusBar barStyle="dark-content" backgroundColor={colors.white} />
            <View style={style.headerContainer}>
                <View style={style.dropdownView}>
                    <Dropdown />
                    <IconE
                        name="chevron-down"
                        size={24}
                        color={colors.grey}
                        style={style.icon}
                    />
                </View>
                <View style={style.shortByView}>
                    <Image source={L11} style={style.iconImage} />
                    <Text style={style.headerText}>Sırala</Text>
                </View>
            </View>
            <View style={style.contentView}>
                <View style={style.productView}>
                    <Image style={style.image} source={esya} />
                    <View style={style.productTitleView}>
                        <Text style={style.productTitle}>
                            adidas Vs Pace Erkek Günlük Spor Ayakkabısı
                        </Text>
                        <Text style={style.productDate}>
                            Sipariş Tarihi: 17.02.2022
                        </Text>
                    </View>
                </View>
                <Text style={style.evaluation}>
                    Henüz değerlendirmen yok
                </Text>
                <View style={style.commentView}>
                    <Text style={style.commentViewText}>
                        Yorum Yap
                    </Text>
                    <IconE
                        name="chevron-small-right"
                        size={24}
                        color={colors.blue}
                    />
                </View>
                <View style={style.line} />
                <View style={style.infoView}>
                    <View style={style.favoriContainer}>
                        <Image source={shoping} style={style.contentIcon} />
                    </View>
                   <View>
                   <Text>
                        korayspor
                    </Text>
                   </View>
                    
                </View>
            </View>
        </View>
    )
}