import { View, Image, TextInput, TouchableNativeFeedback, ScrollView } from 'react-native'
import React from 'react'
import colors from 'assets/colors/colors'
import { FocusAwareStatusBar } from 'components'
import { HeaderIcon, Left } from 'assets'
import style from './style'
import IconI from "react-native-vector-icons/Ionicons";
import { AbroadProducts } from 'components/cards'
export function ProductsFromAbroadPages({ navigation }) {
    return (
        <View>
            <ScrollView>
                <FocusAwareStatusBar
                    barStyle="light-content"
                    backgroundColor={colors.statusBarBackground} />
                <View style={style.headerView}>
                    <TouchableNativeFeedback onPress={() => navigation.navigate("AccountScreen")}>
                        <Image
                            source={Left}
                            style={style.headerBackIcon}
                        />
                    </TouchableNativeFeedback>
                    <TextInput
                        placeholder='74.209 ürün'
                        style={style.txtInput}
                    />
                    <View style={style.imageView}>
                        <Image
                            source={HeaderIcon}
                            style={style.image} />
                    </View>
                    <IconI style={style.searchIcon}
                        name="search"
                        color={colors.white}
                        size={20} />
                </View>
                <AbroadProducts />
            </ScrollView>
        </View>
    )
}