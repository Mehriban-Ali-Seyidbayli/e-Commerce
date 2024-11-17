import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CART, PRODUCTDETAIL, PRODUCTLIST, TAB} from '../utils/routes';
import Cart from '../screens/cart';
import TabNavigator from './tabNavigator';
import ProductList from '../screens/product/productList';
import ProductDetail from '../screens/product/productDetail';
import HeaderTabRight from '../components/router/headerTabRight';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={TAB}
        component={TabNavigator}
      />
      <Stack.Screen name={CART} component={Cart} />
      <Stack.Screen
        options={({route, navigation}) => ({
          headerRight: () => <HeaderTabRight />,
          title: route?.params?.title,
        })}
        name={PRODUCTLIST}
        component={ProductList}
      />
      <Stack.Screen
        options={({route, navigation}) => ({
          headerRight: () => <HeaderTabRight />,
        })}
        name={PRODUCTDETAIL}
        component={ProductDetail}
      />
    </Stack.Navigator>
  );
}

export default RootNavigator;
