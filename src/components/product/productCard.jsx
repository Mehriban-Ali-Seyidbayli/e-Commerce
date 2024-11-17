import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import {height, width} from '../../utils/constants';
import {Heart} from 'iconsax-react-native';
import {AppColors} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTDETAIL} from '../../utils/routes';
import Button from '../ui/button';

const ProductCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(PRODUCTDETAIL, {item: item})}
      style={styles.container}>
      <Image
        source={{uri: item.image}}
        style={{width: width * 0.4, height: width * 0.3, resizeMode: 'contain'}}
      />
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <Text
          numberOfLines={3}
          style={{fontWeight: '700', fontSize: 14, marginVertical: 5}}>
          {item.title}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 2}}>
          <Text>{item.category}</Text>
          <Text style={{fontWeight: '700', fontSize: 14, marginVertical: 5}}>
            ${item.price}
          </Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity>
            <Heart size={20} color={AppColors.RED} variant="Bold" />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Button title="Add to cart" />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width / 2,
    margin: 5,
    marginVertical: 20,
  },
});

export default ProductCard;
