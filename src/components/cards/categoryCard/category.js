import { View } from 'react-native'
import React from 'react'
import { M1, M10, M12, M13, M14, M15, M16, M17, M18, M19, M2, M20, M21, M22, M23, M24, M25, M3, M4, M5, M6, M7, M8, M9 } from 'assets'
import CategoryCard from './categoryCard'
import style from './style'
export default function Category() {
    const deneme = [
        { key: 1, value: M1, text: "Moda & Giyim" },
        { key: 2, value: M2, text: "Elektronik" },
        { key: 3, value: M3, text: "Ev & Yaşam" },
        { key: 4, value: M4, text: "Anne & Bebek" },
        { key: 5, value: M5, text: "Kozmetik" },
        { key: 6, value: M6, text: "Saat & Takı" },
        { key: 7, value: M7, text: "Spor" },
        { key: 8, value: M8, text: "Kitap & Hobi" },
        { key: 9, value: M9, text: "Otomotiv" },
        { key: 10, value: M10, text: "Oyun & Hobi" },
        { key: 11, value: M17, text: "Gözlük & Lens" },
        { key: 12, value: M12, text: "Film & Dizi " },
        { key: 13, value: M13, text: "Kırtasiye & Ofis" },
        { key: 14, value: M14, text: "Müzik Aletleri" },
        { key: 15, value: M15, text: "Beyaz Eşya" },
        { key: 16, value: M16, text: "Yetişkin Hobi" },
        { key: 17, value: M18, text: "Oyuncak" },
        { key: 18, value: M19, text: "Ayakkabı Giyim" },
        { key: 19, value: M20, text: "Erkek Bakım" },
        { key: 20, value: M21, text: "2. El & Antika" },
        { key: 21, value: M22, text: "Bisiklet" },
        { key: 22, value: M23, text: "Sağlık" },
        { key: 23, value: M24, text: "Çocuk Bakım" },
        { key: 24, value: M25, text: "Süpermarket" },
    ]
    return (
        <View style={style.container}>
            {
                deneme.map((item) => <CategoryCard key={item.key} category={item} />)
            }
        </View>
    )
}