import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {AppColors} from '../../theme/colors';

const Spinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={AppColors.GRAY} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Spinner;
