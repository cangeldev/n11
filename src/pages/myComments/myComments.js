import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import colors from 'assets/colors/colors'
import style from './style'
import IconE from "react-native-vector-icons/Entypo";
import { L11 } from 'assets'
import { Dropdown } from 'components/dropdown'
import { FocusAwareStatusBar } from 'components/focusAwareStatusBar'
import { CommentsCard } from 'components/cards';
export function MyComments() {
    return (
        <ScrollView>
            <FocusAwareStatusBar barStyle="dark-content" backgroundColor={colors.white} />
            <View style={style.headerContainer}>
                <View style={style.dropdownView}>
                    <Dropdown />
                    <IconE
                        name="chevron-down"
                        size={24}
                        color={colors.grey}
                        style={style.icon}
                    />
                </View>
                <View style={style.shortByView}>
                    <Image source={L11} style={style.iconImage} />
                    <Text style={style.headerText}>Sırala</Text>
                </View>
            </View>
            <View style={{ marginBottom: 15 }}>
                <CommentsCard />
            </View>
        </ScrollView>
    )
}