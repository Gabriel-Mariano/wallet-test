// Button.test.tsx
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { Button } from '../index';
import { ActivityIndicator } from 'react-native';

describe('Button Component', () => {
  it('renderiza o título corretamente quando não está carregando', () => {
    render(<Button title="Salvar" />);
    expect(screen.getByText('Salvar')).toBeTruthy();
  });

  it('renderiza o ActivityIndicator quando isLoading é true', () => {
    // Buscar component
    const { UNSAFE_queryByType } = render(<Button title="Salvar" isLoading />);
    expect(UNSAFE_queryByType(ActivityIndicator)).toBeTruthy();
  });

  it('não renderiza o título quando isLoading é true', () => {
    render(<Button title="Salvar" isLoading />);
    expect(screen.queryByText('Salvar')).toBeNull();
  });

  it('chama a função onPress quando clicado', () => {
    const onPressMock = jest.fn();
    render(<Button title="Salvar" onPress={onPressMock} />);
    fireEvent.press(screen.getByTestId('ButtonTouchable'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('não chama a função onPress quando está desabilitado', () => {
    const onPressMock = jest.fn();
    render(<Button title="Salvar" onPress={onPressMock} disabled />);
    fireEvent.press(screen.getByTestId('ButtonTouchable'));
    expect(onPressMock).not.toHaveBeenCalled();
  });
});
