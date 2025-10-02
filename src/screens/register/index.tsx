import React, { useState } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Colors } from '../../themes/colors';
import { Input } from '../../components/Input';
import { MaskedInput } from '../../components/MaskedInput';
import { CardPayload, createCard } from '../../services/cardService';
import { creditCardSchema } from './schema/creditCardSchema';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { styles } from './styles';
import { useNavigate } from '../../hook/useNavigate';

type FormRegisterValues = {
  cardNumber: string;
  cardHolder: string;
  expirationDate: string;
  securityCode: string;
};

const initialValues: FormRegisterValues = {
  cardNumber: '',
  cardHolder: '',
  expirationDate: '',
  securityCode: '',
};

function RegisterScreen() {
  const [userCard, setUserCard] = useState<CardPayload | null>(null); //prettier-ignore
  const [loading, setLoading] = useState(false);

  const { navigate } = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<FormRegisterValues>({
    // @ts-ignore
    resolver: yupResolver(creditCardSchema),
    defaultValues: initialValues,
    mode: 'onChange',
  });

  const onSubmit = async (data: FormRegisterValues) => {
    const payload = {
      number: data.cardNumber,
      cvv: data.securityCode,
      name: data.cardHolder,
      expiration: data.expirationDate,
      nameCard: 'Black Card',
      colorCard: '#000',
    };

    setLoading(true);
    const newCard = await createCard(payload);
    setLoading(false);

    setUserCard(newCard);
  };

  if (userCard) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Wallet Test</Text>
        <Text style={styles.text}>Cartão cadastrado com sucesso</Text>
        <Card
          cardHolder={userCard.name}
          cardNumber={userCard.number}
          expirationDate={userCard.expiration}
          nameCard={userCard.nameCard}
          colorCard={userCard.colorCard}
        />
        <Button
          title="avançar"
          onPress={() => navigate('WalletBackground')}
          style={styles.nextButton}
        />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.title}>Wallet Test</Text>
          <Controller
            control={control}
            name="cardNumber"
            render={({ field: { onChange, value } }) => (
              <MaskedInput
                mask="9999 9999 9999 9999"
                label="número do cartão"
                onChangeText={onChange}
                value={value}
                keyboardType="numeric"
                placeholder="1234 5678 9012 3456"
                style={styles.inputMask}
              />
            )}
          />

          <Controller
            control={control}
            name="cardHolder"
            render={({ field: { onChange, value } }) => (
              <Input
                label="nome do titular do cartão"
                value={value}
                onChangeText={onChange}
                errorMessage={errors?.cardHolder?.message}
              />
            )}
          />

          <View style={styles.row}>
            <View style={styles.flex}>
              <Controller
                control={control}
                name="expirationDate"
                render={({ field: { onChange, value } }) => (
                  <MaskedInput
                    mask="99/99"
                    label="vencimento"
                    onChangeText={onChange}
                    value={value}
                    keyboardType="numeric"
                    placeholder="MM/YY"
                    style={styles.inputMask}
                  />
                )}
              />
            </View>

            <View style={[styles.flex, { marginLeft: 10 }]}>
              <Controller
                control={control}
                name="securityCode"
                render={({ field: { onChange, value } }) => (
                  <Input
                    label="código de segurança"
                    placeholder="***"
                    value={value}
                    onChangeText={onChange}
                    keyboardType="numeric"
                    maxLength={3}
                    errorMessage={errors?.securityCode?.message}
                  />
                )}
              />
            </View>
          </View>

          <Button
            title="avançar"
            onPress={handleSubmit(onSubmit)}
            style={styles.nextButton}
            isLoading={loading}
            titleColor={!isValid ? '#c1c1c1' : Colors.white}
            disabled={!isValid}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default RegisterScreen;
