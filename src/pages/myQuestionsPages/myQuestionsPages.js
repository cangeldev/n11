import { View, TextInput, Image } from 'react-native'
import React from 'react'
import { FocusAwareStatusBar } from 'components'
import colors from 'assets/colors/colors'
import style from './style'
import { Search } from 'assets'
import { MyQuestions } from 'components/cards'
export function MyQuestionsPages() {
    return (
        <View style={style.container}>
            <FocusAwareStatusBar
                barStyle="dark-content"
                backgroundColor={colors.white}
            />
            <View style={style.searchView}>
                <Image
                    source={Search}
                    style={style.image}
                />
                <TextInput
                    placeholder='Ürün veya mağaza ara'
                    style={style.txtInput}
                />
            </View>
            <MyQuestions />
        </View>
    )
}