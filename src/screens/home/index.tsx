import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '../../components/Button';
import { Colors } from '../../themes/colors';
import { styles } from './styles';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wallet Test</Text>
      <View style={styles.areaButtons}>
        <Button
          title="Meus cartões"
          onPress={() => {}}
          style={styles.buttonViewCard}
        />
        <Button
          title="cadastrar cartão"
          onPress={() => {}}
          style={styles.buttonRegisterCard}
          titleColor={Colors.primary}
        />
      </View>
    </View>
  );
}

export default HomeScreen;
