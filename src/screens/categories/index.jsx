import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/colors';
import {getRequest} from '../../service/verbs';
import {CATEGORIES_URL} from '../../service/urls';
import CategoryCard from '../../components/categories/categoryCard';
import {screenStyle} from '../../styles/screenStyle';
import Spinner from '../../components/ui/spinner';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCategories = () => {
    setLoading(true);
    getRequest(CATEGORIES_URL)
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <View style={screenStyle.container}>
      {loading ? (
        <Spinner />
      ) : (
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={({item}) => <CategoryCard item={item} />}
        />
      )}
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
