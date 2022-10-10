import { View, Text, Image } from 'react-native'
import React from 'react'
import style from './style'
export function InfoCard({ menu }) {
    return (
        <View style={style.container}>
            <Image source={menu.value} style={style.infoImage} />
            <View style={{ flexDirection: "row" }}>
                <View style={style.infoView}>
                    <Text style={style.title}>
                        {menu.title1}
                    </Text>
                    <Text style={style.text}>
                        {menu.text1}
                    </Text>
                </View>
                <View style={{ width: 175 }}>
                    <Text style={style.title}>
                        {menu.title2}
                    </Text>
                    <Text style={style.text}>
                        {menu.text2}
                    </Text>
                </View>
            </View>
        </View>
    )
}