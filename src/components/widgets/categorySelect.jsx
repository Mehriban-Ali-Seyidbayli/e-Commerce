import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/colors';
import {getRequest} from '../../service/verbs';
import {CATEGORIES_URL} from '../../service/urls';

const CategorySelect = ({onSelect}) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  const getCategories = () => {
    getRequest(CATEGORIES_URL)
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const selectCategory = category => {
    setSelectedCategory(category);
    onSelect(category);
  };
  useEffect(() => {
    getCategories();
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => selectCategory(item)}
        style={
          selectedCategory == item
            ? styles.activeCategory
            : styles.inactiveCategory
        }>
        <Text style={{fontWeight: 300}}>{item}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={categories}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  activeCategory: {
    padding: 10,
    backgroundColor: AppColors.GRAY,
    marginRight: 8,
    borderRadius: 100,
  },
  inactiveCategory: {
    padding: 10,
    backgroundColor: AppColors.SOFTGRAY,
    marginRight: 8,
    borderRadius: 100,
  },
});
export default CategorySelect;
