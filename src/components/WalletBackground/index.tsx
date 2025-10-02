import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';
import { Colors } from '../../themes/colors';

type Props = ViewProps & {
  children: ReactNode;
};

export function WalletBackgroundLayout({ children, ...rest }: Props) {
  return (
    <View style={[styles.container, rest.style]}>
      <View style={[styles.square, styles.squareLeft]} />

      <View style={[styles.square, styles.squareRight]} />

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
    gap: 10,
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
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
