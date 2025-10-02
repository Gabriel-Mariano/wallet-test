import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../../themes/colors';

type Props = {
  children: ReactNode;
};

export function WalletBackgroundLayout({ children }: Props) {
  return (
    <View style={styles.container}>
      {/* Quadrado esquerdo */}
      <View style={[styles.square, styles.squareLeft]} />

      {/* Quadrado direito */}
      <View style={[styles.square, styles.squareRight]} />

      {/* Conteúdo da tela */}
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 30,
    opacity: 0.1,
    backgroundColor: '#fff',
  },
  squareLeft: {
    top: -200,
    left: -80,
    transform: [{ rotate: '-30deg' }, { scale: 1.2 }],
  },
  squareRight: {
    bottom: -200,
    right: -80,
    transform: [{ rotate: '-30deg' }, { scale: 1.2 }],
  },
  content: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
