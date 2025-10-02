import { View, Text, TextInput, TextInputProps } from 'react-native';

import { styles } from './styles';

type TButtonProps = TextInputProps & {
  label?: string;
  errorMessage?: string;
};

export function Input({ label, errorMessage, ...rest }: TButtonProps) {
  return (
    <>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.container}>
        <TextInput {...rest} style={styles.input} />
      </View>
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
    </>
  );
}
