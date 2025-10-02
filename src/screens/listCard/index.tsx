import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { getCards } from '../../services/cardService';
import { styles } from './styles';

function ListCardScreen() {
  const [cards, setCards] = useState<any>([]);
  const [topCard, setTopCard] = useState<'black' | 'green'>('black');
  const [isExpanded, setIsExpanded] = useState(false);

  const blackCardY = useRef(new Animated.Value(40)).current;
  const greenCardY = useRef(new Animated.Value(-20)).current;

  useEffect(() => {
    getAllCards();
  }, []);

  const getAllCards = async () => {
    const res = await getCards();

    setCards(res);
  };

  const animateCards = (target: 'black' | 'green') => {
    if (topCard === target && isExpanded) return;

    setTopCard(target);

    if (!isExpanded) {
      setIsExpanded(true);

      Animated.parallel([
        Animated.spring(blackCardY, {
          toValue: target === 'black' ? -100 : 260,
          useNativeDriver: true,
          bounciness: 12,
        }),
        Animated.spring(greenCardY, {
          toValue: target === 'green' ? -100 : 260,
          useNativeDriver: true,
          bounciness: 12,
        }),
      ]).start();
    } else {
      setIsExpanded(false);
      Animated.parallel([
        Animated.spring(blackCardY, {
          toValue: target === 'black' ? 40 : -20,
          useNativeDriver: true,
          bounciness: 12,
        }),
        Animated.spring(greenCardY, {
          toValue: target === 'green' ? 40 : -20,
          useNativeDriver: true,
          bounciness: 12,
        }),
      ]).start();
    }
  };

  if (cards.length < 2) {
    return (
      <View style={[styles.container, { paddingTop: 100 }]}>
        <Text style={styles.textHeader}>Adicione pelo menos 2 cartões</Text>
      </View>
    );
  }

  const cardGreen = cards[0];
  const cardBlack = cards[1];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Meus cartões</Text>
      </View>

      <View style={styles.stackContainer}>
        {/* Cartão Verde */}
        <Animated.View
          style={[
            styles.cardWrapper,
            {
              transform: [{ translateY: greenCardY }],
              zIndex: topCard === 'green' ? 2 : 1,
            },
          ]}
        >
          <Card
            cardHolder={cardGreen.name}
            cardNumber={cardGreen.number}
            expirationDate={cardGreen.expiration}
            colorCard={cardGreen.colorCard}
            nameCard={cardGreen.nameCard}
            onPress={() => animateCards('green')}
          />
        </Animated.View>

        {isExpanded && (
          <View style={{ paddingHorizontal: 20, width: '100%' }}>
            <Button
              title="Pagar com este cartão"
              onPress={() => console.log('Pagar com', topCard)}
              style={{ marginTop: 140 }}
            />
          </View>
        )}

        {/* Cartão Preto */}
        <Animated.View
          style={[
            styles.cardWrapper,
            {
              transform: [{ translateY: blackCardY }],
              zIndex: topCard === 'black' ? 2 : 1,
            },
          ]}
        >
          <Card
            cardHolder={cardBlack.name}
            cardNumber={cardBlack.number}
            expirationDate={cardBlack.expiration}
            colorCard={cardBlack.colorCard}
            nameCard={cardBlack.nameCard}
            onPress={() => animateCards('black')}
          />
        </Animated.View>
        {/* Botão aparece somente quando separado */}
        {/* {isExpanded && (
          <View style={styles.middleButtonWrapper}>
            <Button
              title="Pagar com este cartão"
              onPress={() => console.log('Pagar com', topCard)}
            />
          </View>
        )} */}
      </View>
    </View>
  );
}

export default ListCardScreen;
