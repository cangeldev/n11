import { View } from 'react-native'
import React from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import { date } from 'utils/helper'
import style from './style'
export function Dropdown() {
    return (
        <SelectDropdown
            defaultButtonText={"Son 30 Gün"}
            dropdownStyle={style.dropdownStyle}
            buttonStyle={style.buttonStyle}
            buttonTextStyle={style.buttonTextStyle}
            data={date}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
            }}
            rowTextForSelection={(item, index) => {
                return item
            }}
        />
    )
}