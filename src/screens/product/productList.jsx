import {useState, useEffect} from 'react';
import {FlatList, View, ActivityIndicator} from 'react-native';
import {getRequest} from '../../service/verbs';
import {PRODUCTS_URL} from '../../service/urls';
import ProductCard from '../../components/product/productCard';
import {screenStyle} from '../../styles/screenStyle';
import {AppColors} from '../../theme/colors';
import Spinner from '../../components/ui/spinner';
import CategorySelect from '../../components/widgets/categorySelect';

const ProductList = ({route}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const productCategory = route?.params?.category;

  const getAllProducts = category => {
    const url = category
      ? PRODUCTS_URL + `/category/${category}`
      : PRODUCTS_URL;
    setLoading(true);
    getRequest(url)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getAllProducts(productCategory);
  }, []);
  return (
    <View style={screenStyle.container}>
      <CategorySelect onSelect={value => getAllProducts(value)} />
      {loading ? (
        <Spinner />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 50}}
          numColumns={2}
          data={products}
          renderItem={({item}) => <ProductCard item={item} />}
        />
      )}
    </View>
  );
};
export default ProductList;
