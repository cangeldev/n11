import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import style from './style'
import IconI from "react-native-vector-icons/Ionicons";
import colors from 'assets/colors/colors';
import AccountButton from 'components/accountButton/accountButton';
import { list } from 'utils/helper';
import AccountHeader from 'components/accountHeader/accountHeader';
export default function AccountScreen() {
  return (
    <View style={style.container}>
      <ScrollView>
      <AccountHeader title={"Hesabım"}/>
        <View style={style.accountView}>
          <View>
            <Text style={style.text}>Can Gel {"\n"}can.gel@hotmail.com</Text>
          </View>
          <IconI name="settings-outline" color={colors.grey} size={24} />
        </View>
        <View style={style.listView}>
          {
            list.slice(0, 10).map((item) => <AccountButton key={item.key} category={item} />)
          }
        </View>
        <Text style={style.title}>Popüler Sayfalar</Text>
        <View style={style.listView}>
          {
            list.slice(10, 17).map((item) => <AccountButton key={item.key} category={item} />)
          }
        </View>
        <Text style={style.title}>Diğer</Text>
        <View style={[style.listView, { marginBottom: 15 }]}>
          {
            list.slice(17, 22).map((item) => <AccountButton key={item.key} category={item} />)
          }
        </View>
      </ScrollView>
    </View>
  )
}