import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  ActivityIndicator,
} from 'react-native';
import { Colors } from '../../themes/colors';
import { styles } from './styles';

type TButtonProps = TouchableOpacityProps & {
  title: string;
  titleColor?: string;
  isLoading?: boolean;
};

export function Button({
  title,
  titleColor,
  isLoading,
  ...rest
}: TButtonProps) {
  const backgroundColor = rest.disabled ? Colors.white : Colors.blueLight;

  return (
    <TouchableOpacity
      {...rest}
      style={[styles.container, { backgroundColor }, rest.style]}
    >
      {isLoading ? (
        <ActivityIndicator size="small" />
      ) : (
        <Text style={[styles.title, { color: titleColor ?? Colors.white }]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
