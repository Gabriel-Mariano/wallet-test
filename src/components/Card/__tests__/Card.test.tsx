import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Card } from '../../Card';

jest.mock('../../../utils/formatMaskCardNumber', () => ({
  formatMaskedCardNumber: jest.fn(num => `**** ${num.slice(-4)}`),
}));

describe('Card component', () => {
  it('Deve renderizar o card info corretamente', () => {
    const { getByText } = render(
      <Card
        cardHolder="John Doe"
        cardNumber="1234567890123456"
        expirationDate="12/30"
        nameCard="Test Card"
        colorCard="#ff0000"
      />,
    );

    expect(getByText('Test Card')).toBeTruthy();
    expect(getByText('John Doe')).toBeTruthy();
    expect(getByText('**** 3456')).toBeTruthy();
    expect(getByText('Validade 12/30')).toBeTruthy();
  });

  it('Deve aplicar cor black quande o nameCard for GreenCard', () => {
    const { getByText } = render(
      <Card
        cardHolder="Jane Doe"
        cardNumber="9876543210987654"
        expirationDate="11/29"
        nameCard="Green Card"
      />,
    );

    const title = getByText('Green Card');
    expect(title.props.style).toEqual(
      expect.arrayContaining([expect.objectContaining({ color: 'black' })]),
    );
  });

  it('Deve chamar a fn quando clicada', () => {
    const mockPress = jest.fn();

    const { getByText } = render(
      <Card
        cardHolder="John Doe"
        cardNumber="1234567890123456"
        expirationDate="12/30"
        nameCard="Clickable Card"
        onPress={mockPress}
      />,
    );

    fireEvent.press(getByText('Clickable Card'));
    expect(mockPress).toHaveBeenCalledTimes(1);
  });
});
