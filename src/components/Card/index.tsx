import React from 'react';
import { View, Text } from 'react-native';
import { formatMaskedCardNumber } from '../../utils/formatMaskCardNumber';
import { styles } from './styles';

type TCardProps = {
  cardHolder: string;
  cardNumber: string;
  expirationDate: string;
};

export function Card({ cardHolder, cardNumber, expirationDate }: TCardProps) {
  return (
    <View style={[styles.container]}>
      <Text style={styles.title}>Black Card</Text>
      <View style={styles.content}>
        <Text style={styles.text}>{cardHolder}</Text>
        <Text style={styles.text}>{formatMaskedCardNumber(cardNumber)}</Text>
        <Text style={styles.text}>Validade {expirationDate}</Text>
      </View>
    </View>
  );
}
