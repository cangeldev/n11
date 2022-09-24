import { View } from 'react-native'
import React from 'react'
import style from './style';
import MenuCard from './menuCard';
import { menuImages } from 'utils/helper';
export default function Menu() {
   
    return (
        <View style={style.menu}>
            {
                menuImages.map((item) => <MenuCard item={item} key={item.id} menu={item} />)
            }
        </View>
    )
}