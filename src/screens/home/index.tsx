import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '../../components/Button';
import { WalletBackgroundLayout } from '../../components/WalletBackground';
import { useNavigate } from '../../hook/useNavigate';
import { Colors } from '../../themes/colors';
import { styles } from './styles';

function HomeScreen() {
  const { navigate } = useNavigate();
  return (
    <WalletBackgroundLayout>
      <Text style={styles.title}>Wallet Test</Text>
      <View style={styles.areaButtons}>
        <Button
          title="Meus cartões"
          onPress={() => navigate('ListCardScreen')}
          style={styles.buttonViewCard}
        />
        <Button
          title="cadastrar cartão"
          onPress={() => navigate('RegisterScreen')}
          style={styles.buttonRegisterCard}
          titleColor={Colors.primary}
        />
      </View>
    </WalletBackgroundLayout>
  );
}

export default HomeScreen;
