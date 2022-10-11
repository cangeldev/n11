import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import style from './style'
import IconE from "react-native-vector-icons/Entypo";
import colors from 'assets/colors/colors';
import ProductsCard from './productsCard';
import useFetch from 'hooks/useFetch/useFetch';
export function Products({ title }) {
  const { products, error, loading } = useFetch()
  return (
    <View style={style.container}>
      <Text style={style.title}>
        {title}
      </Text>
      <View style={style.allProducts}>
        <Text style={style.text}>
          Tümünü Gör
        </Text>
        <IconE
          name="chevron-small-right"
          size={21}
          color={colors.statusBarBackground}
        />
      </View>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {
            products.slice(5, 9).map((item) => <ProductsCard key={item.id} products={item} />)
          }
        </ScrollView>
      </View>
    </View>
  )
}