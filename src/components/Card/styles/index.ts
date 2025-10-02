import { StyleSheet } from 'react-native';
import { Colors } from '../../../themes/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 180,
    padding: 15,
    gap: 10,
    borderRadius: 16,

    justifyContent: 'center',
    backgroundColor: Colors.black,
  },
  content: {
    gap: 10,
  },
  title: {
    color: Colors.white,
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    color: Colors.white,
    fontSize: 16,
  },
});
