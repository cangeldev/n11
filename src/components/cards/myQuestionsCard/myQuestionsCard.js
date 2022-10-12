import { View, Text, Image } from 'react-native'
import React from 'react'
import style from './style'
import IconE from "react-native-vector-icons/Entypo";
import colors from 'assets/colors/colors';
export default function MyQuestionsCard({ list }) {
    return (
        <View style={style.cardContainer}>
            <View style={style.row}>
                <Image
                    source={list.value}
                    style={style.image}
                />
                <View>
                    <Text
                        numberOfLines={2}
                        style={style.title}>
                        {list.text}
                    </Text>
                    <View style={style.row}>
                        <Text>Mağaza: </Text>
                        <Text style={style.brand}>
                            {list.brand}
                        </Text>
                    </View>
                </View>

            </View>
            <View style={style.line} />
            <View style={style.infoView}>
                <Text style={style.text}>
                    Hata
                </Text>
                <Text style={style.info}>
                    {list.question}
                </Text>
                <IconE
                    name="chevron-small-right"
                    size={30}
                    color={colors.lightGrey}
                    style={style.left}
                />
                <View style={style.row}>
                    <Image
                        source={list.status}
                        style={style.icon}
                    />
                    <Text style={style.status}>
                        Cevaplandı
                    </Text>
                    <Text style={style.date}>
                        {list.date}
                    </Text>
                </View>
            </View>
        </View>
    )
}