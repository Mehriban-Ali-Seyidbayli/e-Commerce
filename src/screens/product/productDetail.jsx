import {
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import Button from '../../components/ui/button';
import {height, width} from '../../utils/constants';
import {AppColors} from '../../theme/colors';
import {screenStyle} from '../../styles/screenStyle';
import Counter from '../../components/ui/counter';
import {getRequest} from '../../service/verbs';
import {PRODUCTS_URL} from '../../service/urls';
import {useEffect, useState} from 'react';
import Spinner from '../../components/ui/spinner';
import {Heart} from 'iconsax-react-native';

const ProductDetail = ({route}) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const {item} = route?.params;

  const getProductDetail = () => {
    setLoading(true);
    getRequest(PRODUCTS_URL + `/${item.id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={screenStyle.container}>
        {loading ? (
          <Spinner />
        ) : (
          <ScrollView>
            <View>
              <Image
                source={{uri: product?.image}}
                style={{
                  width: width,
                  height: width * 0.55,
                  resizeMode: 'contain',
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View style={{flex: 3, marginVertical: 20}}>
                  <Text
                    numberOfLines={2}
                    style={{fontWeight: '700', fontSize: 22}}>
                    {product?.title}
                  </Text>
                  <Text
                    numberOfLines={2}
                    style={{
                      fontWeight: '500',
                      fontSize: 14,
                      color: AppColors.GRAY,
                      marginVertical: 5,
                    }}>
                    {product?.category}
                  </Text>
                  <Text
                    numberOfLines={2}
                    style={{
                      fontWeight: '700',
                      fontSize: 22,
                      marginVertical: 5,
                    }}>
                    ${product?.price}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    padding: 5,
                  }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: AppColors.SOFTGRAY,
                      borderRadius: 100,
                      padding: 5,
                    }}>
                    <Heart size={28} color={AppColors.RED} variant="Bold" />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 14,
                    color: AppColors.BLACK,
                    marginVertical: 5,
                  }}>
                  {product?.description}
                </Text>
              </View>
            </View>
          </ScrollView>
        )}
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          paddingBottom: 20,
          paddingHorizontal: 10,
          height: height * 0.1,
          width: width,
          backgroundColor: AppColors.WHITE,
          flexDirection: 'row',
          borderTopWidth: 1,
          borderColor: AppColors.SOFTGRAY,
        }}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Counter onChange={value => console.warn(value)} />
        </View>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <Button title={'Add to cart'} />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ProductDetail;
