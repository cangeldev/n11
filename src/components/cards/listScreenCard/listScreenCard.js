import { View, Text } from 'react-native'
import React from 'react'
import style from './style'
import IconF from "react-native-vector-icons/Fontisto";
import IconI from "react-native-vector-icons/Ionicons";
import colors from 'assets/colors/colors';
export function ListScreenCard({ title, textOne, textTwo, icon }) {
    return (
        <View
            style={style.container}>
            <View
                style={{ paddingLeft: 15, }} >
                <View
                    style={style.contentViewTitle}>
                    <Text
                        style={style.contentViewTitleText}>
                        {title}
                    </Text>
                    <Text
                        style={style.contentViewTitleTextInfo}>
                        (0 ürün)
                    </Text>
                </View>
                <View
                    style={style.titleContent}>
                    <IconF
                        name={"locked"}
                        color={colors.red}
                        size={12} />
                    <Text
                        style={style.titleContentText}>
                        Sadece Ben
                    </Text>
                </View>
            </View>
            <View
                style={style.contentView}>
                <IconI
                    style={style.contentIcon}
                    name={icon}
                    color={"#e3e3e3"}
                    size={60} />
                <Text
                    style={{ fontFamily: "OpenSans-Bold" }}>
                    {textOne}
                </Text>
                <Text
                    style={{
                        color: "#939090",
                        fontFamily: "OpenSans-Regular"
                    }}>
                    {textTwo}
                </Text>
                <Text
                    style={style.text}>
                    Haydi ilk ürününü hemen ekle!
                </Text>
            </View>
        </View>
    )
}