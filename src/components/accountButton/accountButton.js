import { Text, TouchableOpacity, Image, } from 'react-native'
import React from 'react'
import IconO from "react-native-vector-icons/Octicons";
import colors from 'assets/colors/colors';
import style from './style';
import { useNavigation } from '@react-navigation/native';
export default function AccountButton({ category }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity activeOpacity={1} style={style.container} onPress={() => navigation.navigate(category.navigationPath)} >
            <Image source={category.value} style={[style.image, { tintColor: category.colorsPath }]} />
            <Text style={style.title}>{category.text}</Text>
            <IconO style={[style.icon]} name={"chevron-right"} color={colors.grey} size={24} />
        </TouchableOpacity>
    )
}