import React from 'react';
import { View, Text, Pressable, PressableProps } from 'react-native';
import { formatMaskedCardNumber } from '../../utils/formatMaskCardNumber';
import { styles } from './styles';

type TCardProps = PressableProps & {
  cardHolder: string;
  cardNumber: string;
  expirationDate: string;
  nameCard?: string;
  colorCard?: string;
};

export function Card({
  cardHolder,
  cardNumber,
  expirationDate,
  nameCard = 'Green Card',
  colorCard,
  ...rest
}: TCardProps) {
  return (
    <Pressable
      style={[styles.container, { backgroundColor: colorCard }]}
      {...rest}
    >
      <Text
        style={[styles.title, nameCard === 'Green Card' && { color: 'black' }]}
      >
        {nameCard}
      </Text>
      <View style={styles.content}>
        <Text
          style={[styles.text, nameCard === 'Green Card' && { color: 'black' }]}
        >
          {cardHolder}
        </Text>
        <Text
          style={[styles.text, nameCard === 'Green Card' && { color: 'black' }]}
        >
          {formatMaskedCardNumber(cardNumber)}
        </Text>
        <Text
          style={[styles.text, nameCard === 'Green Card' && { color: 'black' }]}
        >
          Validade {expirationDate}
        </Text>
      </View>
    </Pressable>
  );
}
