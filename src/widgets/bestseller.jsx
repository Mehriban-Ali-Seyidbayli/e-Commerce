import {View, StyleSheet, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import WidgetTitle from '../components/widgets/widgetTitle';
import {getRequest} from '../service/verbs';
import {CATEGORY_URL} from '../service/urls';
import WidgetProductCard from '../components/widgets/productCard';
import CategorySelect from '../components/widgets/categorySelect';

function BestSeller() {
  const [products, setProducts] = useState([]);
  const getBestSellerProducts = (category = "women's clothing") => {
    getRequest(CATEGORY_URL + `/${category}`, {limit: 5})
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getBestSellerProducts();
  }, []);
  return (
    <View style={styles.container}>
      <WidgetTitle title="Best Seller" category="men's clothing" />
      <CategorySelect onSelect={value => getBestSellerProducts(value)} />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={products}
        renderItem={({item}) => <WidgetProductCard item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default BestSeller;
