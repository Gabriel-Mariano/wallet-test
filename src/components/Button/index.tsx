import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';
import { Colors } from '../../themes/colors';
import { styles } from './styles';

type TButtonProps = TouchableOpacityProps & {
  title: string;
  titleColor?: string;
};

export function Button({ title, titleColor, ...rest }: TButtonProps) {
  return (
    <TouchableOpacity {...rest} style={[styles.container, rest.style]}>
      <Text style={[styles.title, { color: titleColor ?? Colors.white }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
