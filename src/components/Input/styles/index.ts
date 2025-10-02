import { StyleSheet } from 'react-native';
import { Colors } from '../../../themes/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
    borderRadius: 5,
    backgroundColor: Colors.white,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '85%',
    paddingHorizontal: 10,
    fontFamily: 'Poppins-Regular',
  },
  label: {
    alignSelf: 'flex-start',
    color: Colors.label,
  },
  error: {
    alignSelf: 'flex-start',
    color: Colors.danger,
  },
});
