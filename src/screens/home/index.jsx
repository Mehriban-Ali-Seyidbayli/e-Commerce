import {View, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import widgets from '../../widgets';
import {screenStyle} from '../../styles/screenStyle';

const Home = () => {
  const renderItem = ({item}) => {
    return <View>{item.isShown && item.component}</View>;
  };
  return (
    <SafeAreaView style={screenStyle.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={widgets}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default Home;
