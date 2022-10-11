import { View } from 'react-native'
import React from 'react'
import { RulesCard } from './rulesCard'
import { rulesList } from 'utils/helper'
import style from './style'
style
export function Rules() {
    return (
        <View style={style.rulesCard}>
            {
                rulesList.map((item) => <RulesCard key={item.id} rules={item} />)
            }
        </View>
    )
}