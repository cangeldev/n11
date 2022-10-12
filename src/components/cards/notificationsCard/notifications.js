import { View } from 'react-native'
import React from 'react'
import { notificationsList } from 'utils/helper'
import NotificationsCard from './notificationsCard'
export function Notifications() {
    return (
        <View >
            {
                notificationsList.map((item) => <NotificationsCard key={item.id} list={item} />)
            }
        </View>
    )
}