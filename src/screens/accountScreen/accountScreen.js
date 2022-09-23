import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import style from './style'
import IconI from "react-native-vector-icons/Ionicons";
import colors from 'assets/colors/colors';
import AccountButton from 'components/accountButton/accountButton';
import { L1, L2, L3, L4, L5, L6, L7, L8, L9 } from 'assets';
export default function AccountScreen() {
  const list = [
    { key: 1, value: L1, text: "Kuponlarım" },
    { key: 2, value: L2, text: "Siparişlerim" },
    { key: 3, value: L3, text: "İstek Listelerim/Favorilerim" },
    { key: 4, value: L4, text: "Yorumlarım" },
    { key: 5, value: L5, text: "Paylaş Kazan" },
    { key: 6, value: L6, text: "Bildirimlerim" },
    { key: 7, value: L7, text: "Garajım" },
    { key: 8, value: L8, text: "Pet11'e Kayıtlı Dostlarım" },
    { key: 9, value: L4, text: "Ürün Yorumlarım" },
    { key: 10, value: L9, text: "Takip Ettiğim Mağazalar" },
    { key: 11, value: L9, text: "Son Baktıklarım" },
    { key: 12, value: L9, text: "Eşle Kazan" },
    { key: 13, value: L9, text: "Kuponmatik" },
    { key: 14, value: L9, text: "Süper Fırsatlar" },
    { key: 15, value: L9, text: "Çok Satanlar" },
    { key: 16, value: L9, text: "Hediye Rehberi" },
    { key: 17, value: L9, text: "Yurt Dışından Ürünler" },
    { key: 18, value: L9, text: "Bildirim Ayarları" },
    { key: 19, value: L9, text: "Canlı Destek" },
    { key: 20, value: L9, text: "Geri Bildirim" },
    { key: 21, value: L9, text: "Yardım" },
    { key: 22, value: L9, text: "Hakkımızda" },
  ]
  return (
    <View style={style.container}>
      <ScrollView>
        <View style={style.header}>
          <Text style={style.headerTitle}>Hesabım</Text>
          <IconI name="search" color={colors.black} size={28} />
        </View>
        <View style={style.accountView}>
          <View>
            <Text style={style.text}>Can Gel {"\n"}can.gel@hotmail.com</Text>
          </View>
          <IconI name="settings-outline" color={colors.grey} size={26} />
        </View>
        <View style={style.listView}>
          {
            list.slice(0,10 ).map((item) => <AccountButton key={item.key} category={item} />)
          }
        </View>
        <Text style={style.title}>Popüler Sayfalar</Text>
        <View style={style.listView}>
          {
            list.slice(10,17 ).map((item) => <AccountButton key={item.key} category={item} />)
          }
        </View>
        <Text style={style.title}>Diğer</Text>
        <View style={[style.listView,{marginBottom:15}]}>
          {
          list.slice(17,22 ).map((item) => <AccountButton key={item.key} category={item} />)
          }
        </View>
      </ScrollView>
    </View>
  )
}