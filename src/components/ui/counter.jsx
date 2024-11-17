import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {AppColors} from '../../theme/colors';
import {AddCircle, MinusCirlce} from 'iconsax-react-native';
import {useState} from 'react';

const Counter = ({onChange}) => {
  const [count, setCount] = useState(0);

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
      onChange(count - 1);
    }
  };

  const increase = () => {
    if (count < 5) {
      setCount(count + 1);
      onChange(count + 1);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={decrease} style={styles.button}>
        <MinusCirlce size={30} variant="Outline" color={AppColors.BLACK} />
      </TouchableOpacity>
      <Text style={{fontSize: 18, flex: 1, textAlign: 'center'}}>{count}</Text>
      <TouchableOpacity onPress={increase} style={styles.button}>
        <AddCircle size={30} variant="Bold" color={AppColors.BLACK} />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.SOFTGRAY,
    borderRadius: 5,
    paddingVertical: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
