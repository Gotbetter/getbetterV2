import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

/** Navigator Type */
type RootStackParamList = {
  AuthRoutes: undefined;
  HomeRoutes: undefined;
};

type AuthStackParamList = {
  HomeRoutes: undefined;
  LoginScreen: undefined;
};

type HomeStackParamList = {
  AuthRoutes: undefined;
  HomeScreen: undefined;
};

export { RootStackParamList, AuthStackParamList, HomeStackParamList };

/** useNavigation Type */
type AutoLoginManagerNavigationType = NativeStackNavigationProp<RootStackParamList, 'AutoLoginManager'>;

/** Screen Props Type*/
type LoginScreenProps = NativeStackScreenProps<AuthStackParamList, 'LoginScreen'>;

type HomeScreenProps = NativeStackScreenProps<HomeStackParamList, 'HomeScreen'>;

export { AutoLoginManagerNavigationType, LoginScreenProps, HomeScreenProps };
