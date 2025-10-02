import { StyleSheet } from 'react-native';
import { Colors } from '../../../themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingTop: 110,
  },

  header: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 80,
    backgroundColor: Colors.white,

    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  textHeader: {
    color: Colors.blueLight,
    fontSize: 20,
  },

  stackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  cardWrapper: {
    position: 'absolute',
    width: '90%',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    bottom: -40,
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    zIndex: 3,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  middleButtonWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    // top: '50%', // meio da pilha
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
