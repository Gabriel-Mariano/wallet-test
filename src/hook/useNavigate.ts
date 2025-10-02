import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TStackRouteProps } from '../routes/route';

export function useNavigate() {
  const navigation =
    useNavigation<NativeStackNavigationProp<TStackRouteProps>>();

  return navigation;
}
