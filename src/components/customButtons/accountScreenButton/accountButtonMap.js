import { View, Text } from 'react-native'
import React from 'react'
import style from './style'
import { list } from 'utils/helper'
import { AccountScreenButton } from './accountScreenButton'
export default function AccountButtonMap({ start, finish }) {
    return (
        <View style={style.listView}>
            {
                list.slice(start, finish).map((item) => <AccountScreenButton key={item.key} category={item} />)
            }
        </View>
    )
}