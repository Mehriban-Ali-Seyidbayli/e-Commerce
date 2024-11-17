import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {height, width} from '../utils/constants';
import {AppColors} from '../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTLIST} from '../utils/routes';

function Introduction() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/images/int1.png')}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate(PRODUCTLIST)}
        style={styles.button}>
        <Text style={styles.text}>Shop now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: width - 30,
    height: height / 4,
    resizeMode: 'cover',
  },
  button: {
    position: 'absolute',
    bottom: 30,
    right: 15,
    backgroundColor: AppColors.PRIMARY,
    width: width * 0.4,
    height: height * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
  },
});
export default Introduction;
