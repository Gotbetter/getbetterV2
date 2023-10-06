import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthRoutes from '@routes/AuthRoutes';
import HomeRoutes from '@routes/HomeRoutes';
import AutoLoginManager from '@utils/AutoLoginManager';
import { RootStackParamList } from 'types/rotes';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <AutoLoginManager>
        <Stack.Navigator initialRouteName={'AuthRoutes'} screenOptions={{ headerShown: false }}>
          <Stack.Screen name="AuthRoutes" component={AuthRoutes} />
          <Stack.Screen name="HomeRoutes" component={HomeRoutes} />
        </Stack.Navigator>
      </AutoLoginManager>
    </NavigationContainer>
  );
}
