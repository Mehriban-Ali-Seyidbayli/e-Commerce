import {View, Text, StyleSheet} from 'react-native';

const CategoryCard = ({item}) => {
  console.log(item);
  //   const renderItem = ({item}) => {
  //     return (
  //       <TouchableOpacity
  //         onPress={() => selectCategory(item)}
  //         style={
  //           selectedCategory == item
  //             ? styles.activeCategory
  //             : styles.inactiveCategory
  //         }>
  //         <Text style={{fontWeight: 300}}>{item}</Text>
  //       </TouchableOpacity>
  //     );
  //   };
  return (
    <View style={styles.container}>
      <Text>cate</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
});
export default CategoryCard;
