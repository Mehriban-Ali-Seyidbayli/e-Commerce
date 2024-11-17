import {View, StyleSheet, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import WidgetTitle from '../components/widgets/widgetTitle';
import {getRequest} from '../service/verbs';
import {CATEGORY_URL} from '../service/urls';
import WidgetProductCard from '../components/widgets/productCard';

function NewArrival() {
  const [products, setProducts] = useState([]);
  const getNewArrivalProducts = () => {
    getRequest(CATEGORY_URL + "/women's clothing", {limit: 5})
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getNewArrivalProducts();
  }, []);
  return (
    <View style={styles.container}>
      <WidgetTitle title="New Arrival" category="women's clothing" />
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
export default NewArrival;