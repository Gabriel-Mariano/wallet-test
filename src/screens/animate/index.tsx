import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Dimensions, Image } from 'react-native';
import { useNavigate } from '../../hook/useNavigate';
import Group from '../../assets/Group.png';

const { width, height } = Dimensions.get('window');

export default function WalletBackground() {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const { navigate } = useNavigate();

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
        }),
      ]),
    ).start();

    const timer = setTimeout(() => navigate('ListCardScreen'), 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <View style={styles.container}>
      {/* Quadrado superior */}
      <Animated.View
        style={[
          styles.block,
          {
            top: -height * 0.15,
            left: -width * 0.2,
            transform: [{ rotate: '-30deg' }, { scale: scaleAnim }],
          },
        ]}
      />
      {/* Quadrado inferior */}
      <Image source={Group} width={20} height={60} />
      <Animated.View
        style={[
          styles.block,
          {
            bottom: -height * 0.15,
            right: -width * 0.2,
            transform: [{ rotate: '-30deg' }, { scale: scaleAnim }],
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12127d', // azul principal
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  block: {
    position: 'absolute',
    width: width * 1.2,
    height: height * 0.3,
    backgroundColor: 'rgba(255,255,255,0.1)', // azul mais claro
    borderRadius: 40,
  },
});
