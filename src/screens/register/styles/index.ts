import { StyleSheet } from 'react-native';
import { Colors } from '../../../themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    gap: 10,
  },
  title: {
    color: Colors.white,
    fontSize: 28,
    lineHeight: 32,
  },
  text: {
    color: Colors.white,
    fontSize: 18,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  inputMask: {
    width: '100%',
    paddingHorizontal: 10,
    fontFamily: 'Poppins-Regular',
    backgroundColor: Colors.white,
    height: 48,
    borderRadius: 5,
    borderWidth: 1,
  },

  flex: {
    flex: 1,
  },
  nextButton: {
    marginTop: 10,
  },
});
