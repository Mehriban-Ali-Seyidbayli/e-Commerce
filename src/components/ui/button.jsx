import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/colors';

const Button = props => {
  const {title} = props;
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 5,
    padding: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
