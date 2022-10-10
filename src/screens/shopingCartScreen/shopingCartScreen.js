import { View, Text } from 'react-native'
import React from 'react'
import style from './style'
import Lottie from 'lottie-react-native';
import colors from 'assets/colors/colors';
import { FocusAwareStatusBar } from 'components/focusAwareStatusBar';
import { ShopingCartScreenButton } from 'components/customButtons';
import { RecommendedProducts } from 'components/cards';

export function ShopingCartScreen() {
  return (
    <View style={style.container}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor={colors.statusBarBackground} />
      <View style={style.header}>
        <Text style={style.title}>Sepetim</Text>
      </View>
      <View style={style.content}>
        <Text style={style.contentText}>Sepetiniz Boş Görünüyor</Text>
        <Lottie style={style.lottie} source={require('assets/images/shoping.json')} autoPlay loop />
        <ShopingCartScreenButton title={"Favorilerime Git"} />
      </View>
      <Text style={style.text}>İlginizi Çekebilecek Ürünler</Text>
      <View style={style.productsView}>
        <RecommendedProducts />
      </View>
    </View>
  )
}