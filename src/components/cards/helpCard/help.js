import { View, Text, Image } from 'react-native'
import React from 'react'
import style from './style'
import { helpList } from 'utils/helper'
import HelpCard from './helpCard'
import { FocusAwareStatusBar } from 'components/focusAwareStatusBar'
import colors from 'assets/colors/colors'
export function Help({ start, finish, image, title }) {
    return (
        <View style={style.container}>
            <FocusAwareStatusBar
                barStyle="dark-content"
                backgroundColor={colors.white}
            />
            <View style={style.headerView}>
                <View style={style.imageView}>
                    <Image
                        source={image}
                        style={style.image}
                    />
                </View>
                <Text style={style.headerViewText}>
                    {title}
                </Text>
            </View>
            {
                helpList.slice(start, finish).map((item) => <HelpCard key={item.id} list={item} />)
            }
        </View>
    )
}