import { View, Text } from 'react-native'
import React from 'react'
import style from './style'
import IconE from "react-native-vector-icons/Entypo";
import colors from 'assets/colors/colors';
import { Dropdown } from 'components/dropdown';
import { FocusAwareStatusBar } from 'components/focusAwareStatusBar';
import { RecommendedProducts } from 'components/cards';
export function MyOrders() {
  return (
    <View style={style.container}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <View style={style.headerView}>
        <Text style={style.text}>Tarihe göre listeleyin</Text>
        <Dropdown />
        <IconE
          name="chevron-thin-down"
          size={20}
          color={colors.grey}
          style={style.icon}
        />
      </View>
      <View style={style.orderView}>
        <Text style={style.orderTextInfo}>Siparişiniz{"\n"}bulunmuyor.</Text>
        <Text style={style.orderText}>Hemen alışveriş yapıp siparişlerinizi{"\n"}bu sayfadan takip edebilirsiniz.</Text>
      </View>
      <View style={style.contentView}>
        <Text style={style.productsText}>Bu Ürünler İlginizi Çekebilir</Text>
        <View style={style.productsView}>
          <RecommendedProducts />
        </View>
      </View>
    </View>

  )
}