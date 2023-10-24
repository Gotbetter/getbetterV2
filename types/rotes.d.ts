import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

/** Navigator Type */
type RootStackParamList = {
  AuthRoutes: undefined;
  HomeRoutes: undefined;
  StudyRoomRoutes: { roomId: number };
};

type AuthStackParamList = {
  LoginScreen: undefined;
};

type HomeStackParamList = {
  HomeScreen: undefined;
  RoomCreateRoutes: undefined;
  RoomCodeScreen: undefined;
};

type RoomCreateStackParamList = {
  CategoryFormScreen: undefined;
  TitleFormScreen: undefined;
  DescriptionFormScreen: undefined;
  DetailInformationFormScreen: undefined;
  RuleFormScreen: undefined;
  AccountFormScreen: undefined;
};

type StudyRoomStackParamList = {
  StudyRoomScreen: { roomId: number };
};

export {
  RootStackParamList,
  AuthStackParamList,
  HomeStackParamList,
  RoomCreateStackParamList,
  StudyRoomStackParamList,
};

/** useNavigation Type */
type AutoLoginManagerNavigationType = NativeStackNavigationProp<RootStackParamList, 'AutoLoginManager'>;

type HomeScreenNavigationType = NativeStackNavigationProp<RootStackParamList & HomeStackParamList, 'HomeRoutes'>;

type RoomCreateScreenNavigationType = NativeStackNavigationProp<RoomCreateStackParamList>;

type StudyRoomScreenNavigationType = NativeStackNavigationProp<RootStackParamList & HomeStackParamList>;

export {
  AutoLoginManagerNavigationType,
  HomeScreenNavigationType,
  RoomCreateScreenNavigationType,
  StudyRoomScreenNavigationType,
};

/** Screen Props Type*/
type LoginScreenProps = NativeStackScreenProps<AuthStackParamList, 'LoginScreen'>;

type HomeScreenProps = NativeStackScreenProps<HomeStackParamList, 'HomeScreen'>;

export { LoginScreenProps, HomeScreenProps };
