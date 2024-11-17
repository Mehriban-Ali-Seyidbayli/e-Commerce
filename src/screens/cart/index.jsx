import {Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {AppColors} from '../../theme/colors';

const Cart = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Cart</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.WHITE,
  },
});
export default Cart;
