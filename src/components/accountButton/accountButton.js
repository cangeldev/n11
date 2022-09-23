import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import IconO from "react-native-vector-icons/Octicons";
import colors from 'assets/colors/colors';
import style from './style';
export default function AccountButton({ category }) {
    return (
        <TouchableOpacity style={style.container}>
            <Image source={category.value} style={style.image} />
            <Text style={style.title}>{category.text}</Text>
            <IconO style={style.icon} name={"chevron-right"} color={colors.grey} size={24} />
        </TouchableOpacity>
    )
}