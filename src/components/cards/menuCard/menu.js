import { View } from 'react-native'
import React from 'react'
import { M1, M2, M3, M4, M5, M6, M7, M8 } from 'assets';
import style from './style';
import MenuCard from './menuCard';
export default function Menu() {
    const [images, setimages] = React.useState([
        {
            id: 1, image: M1, name: "Moda",
        },
        {
            id: 2, image: M2, name: "Elektronik",
        },
        {
            id: 3, image: M3, name: "Ev & Yaşam",
        },
        {
            id: 4, image: M4, name: "Anne & Bebek",
        },
        {
            id: 5, image: M5, name: "Kozmetik",
        },
        {
            id: 6, image: M6, name: "Mücevher & Saat",
        },
        {
            id: 7, image: M7, name: "Spor & Outdoor",
        },
        {
            id: 8, image: M8, name: "Kitap & Hobi",
        }
    ]);
    return (
        <View style={style.menu}>
            {
                images.map((item) => <MenuCard item={item} key={item.id} menu={item} />)
            }
        </View>
    )
}