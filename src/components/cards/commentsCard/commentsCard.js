import { View, Text, Image } from 'react-native'
import React from 'react'
import { delivery, esya, shoping } from 'assets'
import colors from 'assets/colors/colors'
import * as Progress from 'react-native-progress';
import style from './style';
import IconE from "react-native-vector-icons/Entypo";
export function CommentsCard() {
    return (
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
                <View style={style.info}>
                    <Text style={style.marka}>
                        korayspor
                    </Text>
                    <Progress.Bar
                        progress={0.77}
                        width={80}
                        style={style.progress}
                        color={colors.lightGreen}
                        borderColor={colors.white}
                        height={4} />
                    <Text style={style.infoText}>%77</Text>
                </View>
                <Text style={[style.commentViewText, { marginLeft: 80 }]}>
                    Yorum Yap
                </Text>
                <IconE
                    name="chevron-small-right"
                    size={24}
                    color={colors.blue}
                />
            </View>
            <View style={[style.line, { marginVertical: 20 }]} />
            <View style={style.infoView}>
                <View style={style.favoriContainer}>
                    <Image source={delivery} style={style.contentIcon} />
                </View>
                <View style={style.info}>
                    <Text style={style.marka}>
                        Yurtiçi Kargo
                    </Text>
                </View>
                <Text style={[style.commentViewText, { marginLeft: 80 }]}>
                    Yorum Yap
                </Text>
                <IconE
                    name="chevron-small-right"
                    size={24}
                    color={colors.blue}
                />
            </View>
        </View>
    )
}