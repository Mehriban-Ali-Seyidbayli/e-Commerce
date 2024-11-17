import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/colors';
import {getRequest} from '../../service/verbs';
import {CATEGORIES_URL} from '../../service/urls';
import CategoryCard from '../../components/categories/categoryCard';
import {screenStyle} from '../../styles/screenStyle';

const Categories = ({onSelect}) => {
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

  return (
    <View style={screenStyle.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={({item}) => <CategoryCard item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
export default Categories;
