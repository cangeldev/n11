import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import style from './style'
import IconI from "react-native-vector-icons/Ionicons";
import colors from 'assets/colors/colors';
import { list } from 'utils/helper';
import { AccountHeader } from 'components/accountHeader';
import { AccountScreenButton } from 'components/customButtons';
import { FocusAwareStatusBar } from 'components';
import AccountButtonMap from 'components/customButtons/accountScreenButton/accountButtonMap';
export function AccountScreen({ navigation }) {
  return (
    <View style={style.container}>
      <ScrollView>
        <FocusAwareStatusBar
          barStyle="dark-content"
          backgroundColor={colors.white} />
        <AccountHeader title={"Hesabım"} />
        <View style={style.accountView}>
          <View>
            <Text style={style.text}>
              Can Gel {"\n"}can.gel@hotmail.com
            </Text>
          </View>
          <IconI
            name="settings-outline"
            color={colors.black}
            size={24}
            onPress={() => navigation.navigate("AccountSettingsPages")}
          />
        </View>
        <AccountButtonMap start={0} finish={10} />
        <Text style={style.title}>Popüler Sayfalar</Text>
        <AccountButtonMap start={10} finish={17} />
        <Text style={style.title}>
          Diğer
        </Text>
        <View style={{ marginBottom: 15 }}>
          <AccountButtonMap start={17} finish={22} />
        </View>
      </ScrollView>
    </View>
  )
}