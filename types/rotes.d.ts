import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

/** Navigator Type */
type RootStackParamList = {
  AuthRoutes: undefined;
  HomeRoutes: undefined;
};

type AuthStackParamList = {
  LoginScreen: undefined;
};

type HomeStackParamList = {
  HomeScreen: undefined;
  RoomCreateRoutes: undefined;
  RoomCodeScreen: undefined;
};

export { RootStackParamList, AuthStackParamList, HomeStackParamList };

/** useNavigation Type */
type AutoLoginManagerNavigationType = NativeStackNavigationProp<RootStackParamList, 'AutoLoginManager'>;

type HomeScreenNavigationType = NativeStackNavigationProp<RootStackParamList & HomeStackParamList, 'HomeRoutes'>;

export { AutoLoginManagerNavigationType, HomeScreenNavigationType };

/** Screen Props Type*/
type LoginScreenProps = NativeStackScreenProps<AuthStackParamList, 'LoginScreen'>;

type HomeScreenProps = NativeStackScreenProps<HomeStackParamList, 'HomeScreen'>;

export { LoginScreenProps, HomeScreenProps };
