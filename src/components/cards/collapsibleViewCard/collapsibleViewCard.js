import colors from 'assets/colors/colors';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Accordion from 'react-native-collapsible-accordion';
import IconE from "react-native-vector-icons/Entypo";
import style from './style';
const CollapsibleViewCard = ({ info }) => {
    const [showMoreInfo, setShowMoreInfo] = useState(false);
    return (
        <View style={style.container}>
            <Accordion
                onChangeVisibility={(value) => {
                    setShowMoreInfo(value)
                }}
                renderHeader={() => (
                    <View
                        style={style.wrapDropDownHeader}>
                        <Text
                            style={style.title}>
                            {info.title}
                        </Text>
                        <IconE
                            size={24}
                            color={colors.grey}
                            name={!showMoreInfo ? 'chevron-down' : 'chevron-up'}
                        />
                    </View>
                )}
                renderContent={() => (
                    <View style={{ backgroundColor: 'white', }}>
                        <Text
                            style={style.text}>
                            {info.text}
                        </Text>
                    </View>
                )}
            />
            <View style={style.line} />
        </View>
    );
}
export default CollapsibleViewCard;
