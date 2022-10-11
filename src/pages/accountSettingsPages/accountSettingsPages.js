import { View, Text, TouchableOpacity, Image, Switch } from 'react-native'
import React, { useState } from 'react'
import { list } from 'utils/helper'
import style from './style'
import IconO from "react-native-vector-icons/Octicons";
import { L1, L26 } from 'assets'
import colors from 'assets/colors/colors'
import { FocusAwareStatusBar } from 'components/focusAwareStatusBar';
import { AccountScreenButton } from 'components/customButtons';
export function AccountSettingsPages() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={colors.white}
      />
      <View style={style.container}>
        {
          list.slice(22, 24).map((item) => <AccountScreenButton key={item.key} category={item} />)
        }
        <TouchableOpacity
          activeOpacity={1}
          style={style.containerTouch}>
          <Image
            source={L1}
            style={style.image}
          />
          <Text style={style.title}>
            Touch ID
          </Text>
          <Switch style={style.switchs}
            trackColor={{ false: "#767577", true: "#03C03C" }}
            thumbColor={isEnabled ? "#228B22" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </TouchableOpacity>
        {
          list.slice(24, 26).map((item) => <AccountScreenButton key={item.key} category={item} />)
        }
      </View>
      <View style={style.container}>
        <TouchableOpacity
          activeOpacity={1}
          style={style.containerTouch}>
          <Image
            source={L26}
            style={style.image}
          />
          <Text style={style.title}>
            Çıkış Yap
          </Text>
          <IconO
            style={style.icon}
            name="chevron-right"
            color={colors.grey}
            size={24} />
        </TouchableOpacity>

      </View>
    </View>
  )
}