import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {AppColors} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTLIST} from '../../utils/routes';

function WidgetTitle({title, category}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(PRODUCTLIST, {category: category, title: title})
        }>
        <Text style={{color: AppColors.GRAY}}>See All</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
});
export default WidgetTitle;
