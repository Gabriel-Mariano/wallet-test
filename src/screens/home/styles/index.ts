import { StyleSheet } from 'react-native';
import { Colors } from '../../../themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    lineHeight: 32,
    marginVertical: 32,
  },
  areaButtons: {
    gap: 20,
  },
  buttonViewCard: {
    backgroundColor: Colors.blueLight,
  },
  buttonRegisterCard: {
    backgroundColor: Colors.greenLight,
  },
});
