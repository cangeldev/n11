import { View, Text } from 'react-native'
import style from './style'
import React, { useState } from 'react';
import IconE from "react-native-vector-icons/Entypo";
import Accordion from 'react-native-collapsible-accordion';
import colors from 'assets/colors/colors';
export default function HelpCard({ list }) {
    const [showMoreInfo, setShowMoreInfo] = useState(false);
    return (
        <View style={style.cardContainer}>
            <Accordion
                onChangeVisibility={(value) => {
                    setShowMoreInfo(value)
                }}
                renderHeader={() => (
                    <View
                        style={style.wrapDropDownHeader}>
                        <Text
                            style={style.title}>
                            {list.title}
                        </Text>
                        <IconE
                            size={20}
                            color={colors.grey}
                            name={!showMoreInfo ? 'chevron-thin-down' : 'chevron-thin-up'}
                        />
                    </View>
                )}
                renderContent={() => (
                    <View style={{ backgroundColor: 'white', }}>
                        <Text style={style.text}>
                            {list.text}
                        </Text>
                    </View>
                )}
            />
        </View>
    )
}