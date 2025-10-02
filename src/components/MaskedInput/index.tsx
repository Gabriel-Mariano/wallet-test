import { View, Text, TextInputProps } from 'react-native';
import { MaskedTextInput, MaskedTextInputProps } from 'react-native-mask-text';

import { styles } from './styles';

type TMaskedInputProps = TextInputProps &
  MaskedTextInputProps & {
    label?: string;
    errorMessage?: string;
  };

export function MaskedInput({
  label,
  errorMessage,
  ...rest
}: TMaskedInputProps) {
  return (
    <>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.container}>
        <MaskedTextInput {...rest} style={styles.input} />
      </View>
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
    </>
  );
}
