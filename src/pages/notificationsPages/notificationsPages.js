import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import style from './style'
import { FocusAwareStatusBar } from 'components'
import colors from 'assets/colors/colors'
import { Notifications } from 'components/cards'
export function NotificationsPages() {
    return (
        <ScrollView style={style.container} showsVerticalScrollIndicator={false}>
            <FocusAwareStatusBar
                barStyle="dark-content"
                backgroundColor={colors.white}
            />
            <Notifications />
        </ScrollView>
    )
}