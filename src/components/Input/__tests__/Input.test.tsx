// Input.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Input } from '../index';

describe('Input Component', () => {
  it('renderiza o label quando fornecido', () => {
    render(<Input label="Nome" />);
    expect(screen.getByText('Nome')).toBeTruthy();
  });

  it('renderiza o campo de input', () => {
    render(<Input placeholder="Digite seu nome" />);
    expect(screen.getByPlaceholderText('Digite seu nome')).toBeTruthy();
  });

  it('renderiza a mensagem de erro quando fornecida', () => {
    render(<Input errorMessage="Campo obrigatório" />);
    expect(screen.getByText('Campo obrigatório')).toBeTruthy();
  });

  it('não renderiza label nem erro quando não são fornecidos', () => {
    const { queryByText } = render(<Input />);
    expect(queryByText('Nome')).toBeNull();
    expect(queryByText('Campo obrigatório')).toBeNull();
  });
});
