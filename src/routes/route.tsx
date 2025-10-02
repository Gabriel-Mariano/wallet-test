import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  HeaderBackButton,
  HeaderBackButtonProps,
} from '@react-navigation/elements';
import HomeScreen from '../screens/home';
import ListCardScreen from '../screens/listCard';
import RegisterScreen from '../screens/register';
import WalletBackground from '../screens/animate';
import { Colors } from '../themes/colors';
import { TouchableOpacity, Text } from 'react-native';

export type TStackRouteProps = {
  HomeScreen: undefined;
  RegisterScreen: undefined;
  ListCardScreen: undefined;
  WalletBackground: undefined;
};

const Stack = createNativeStackNavigator();

export default function RouteApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ListCardScreen"
          component={ListCardScreen}
          options={({ navigation }: any) => ({
            title: 'Wallet Test',
            headerTitleAlign: 'center',
            headerTintColor: Colors.blueLight,
            headerTitleStyle: { color: Colors.primary },
            headerLeft: (props: HeaderBackButtonProps) => (
              <HeaderBackButton
                {...props}
                onPress={() =>
                  navigation.reset({
                    index: 0,
                    routes: [{ name: 'HomeScreen' }],
                  })
                }
              />
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('RegisterScreen')}
                style={{ marginRight: 10 }}
              >
                <Text style={{ fontSize: 24, color: Colors.blueLight }}>+</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            title: 'Cadastro',
            headerTransparent: true,
            headerTintColor: Colors.blueLight,
            headerShadowVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="WalletBackground"
          component={WalletBackground}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
