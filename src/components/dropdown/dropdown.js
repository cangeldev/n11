import { View, Text } from 'react-native'
import React from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import colors from 'assets/colors/colors'
import { date } from 'utils/helper'
export default function Dropdown() {
    return (
        <SelectDropdown
            defaultButtonText={"Son 30 Gün"}
            dropdownStyle={{ height: 600, width: 110, marginLeft: 12 }}
            buttonStyle={{ width: 130, backgroundColor: colors.white }}
            buttonTextStyle={{ color: colors.grey, fontSize: 17 }}
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