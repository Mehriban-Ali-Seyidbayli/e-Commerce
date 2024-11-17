import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import {AppColors} from '../../theme/colors';
import {SearchNormal, ShoppingCart} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {CART} from '../../utils/routes';

function HeaderTabRight() {
  const navigation = useNavigation();
  const [count, setCount] = useState(2);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <SearchNormal size={24} color={AppColors.BLACK} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(CART)}
        style={styles.button}>
        {count > 0 && (
          <View style={styles.badgeContainer}>
            <Text style={styles.badge}>{count}</Text>
          </View>
        )}
        <ShoppingCart size={24} color={AppColors.BLACK} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  button: {
    marginHorizontal: 8,
  },
  badgeContainer: {
    backgroundColor: AppColors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    borderRadius: 100,
    position: 'absolute',
    zIndex: 99,
    right: -10,
    top: -8,
  },
  badge: {
    color: AppColors.WHITE,
    fontSize: 12,
    fontWeight: '500',
  },
});
export default HeaderTabRight;
