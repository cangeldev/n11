import { View, Text } from 'react-native'
import React from 'react'
import style from './style'
import IconF from "react-native-vector-icons/Fontisto";
import IconI from "react-native-vector-icons/Ionicons";
import colors from 'assets/colors/colors';
export default function ListScreenCard({ title, textOne, textTwo, icon }) {
    return (
        <View style={style.container}>
            <View style={{ paddingLeft: 15, }} >
                <View style={style.titleView}>
                    <Text style={style.title}>{title}</Text>
                    <Text style={style.titleText}>(0 ürün)</Text>
                </View>
                <View style={style.titleContent}>
                    <IconF name={"locked"} color={colors.red} size={12} />
                    <Text style={style.titleContentText}>Sadece Ben</Text>
                </View>
            </View>
            <View style={style.contentView}>
                <IconI style={style.contentIcon} name={icon} color={"#e3e3e3"} size={60} />
                <Text style={{ fontWeight: "700" }}>{textOne}</Text>
                <Text style={{ color: "#939090", fontWeight: "300" }}>{textTwo}</Text>
                <Text style={{ color: "#296cae", marginTop: 5 }}>Haydi ilk ürününü hemen ekle!</Text>
            </View>
        </View>
    )
}